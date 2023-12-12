import React,{Component} from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";
import { bindActionCreators } from "redux";
import { add, changeDescription,search,clear } from "./todoActions";


import {connect} from 'react-redux'


class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler=this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        const {add,search,description}=this.props
        if(e.key==="Enter"){
            e.shiftKey ? search():add(description)
        }else if (e.key==='Escape'){
            clear()
        }
    }

    render(){
        const {add,search,description}=this.props
        return(
            <div role='form' className="todoForm">
            <Grid cols='12 9 10'>
                <input id="description" className="form-control" 
                placeholder="Agregue una nueva tarea" 
                onChange={this.props.changeDescription}
                onKeyUp={this.keyHandler}
                value={this.props.description}
                />
            </Grid>
            <Grid cols='12 3 2'>
               <IconButton style='primary' icon='plus' onClick={()=>add(description)}></IconButton>
               <IconButton style='info' icon='search' onClick={search}></IconButton>
               <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
                {/* <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button> */}
            </Grid>
            {/* <div className="col-xs-12 col-sm-9 col-md-10">
            </div>
            <div className="col-xs-12 col-sm-3 col-md-2">
            </div>  */}
        </div>
        )
    }
}

// const TodoForm= props =>{

//     const  keyHandler = (e)=>{
//         // if(e.key==="Enter"){
//         //     e.shiftKey ? props.handleSearch():props.handleAdd
//         // }else if (e.key==='Escape'){
//         //     props.handleClear()
//         // }
//     }

//     return(
//         <></>
//         // <div role='form' className="todoForm">
//         //     <Grid cols='12 9 10'>
//         //         <input id="description" className="form-control" 
//         //         placeholder="Agregue una nueva tarea" 
//         //         onChange={props.changeDescription}
//         //         onKeyUp={keyHandler}
//         //         value={props.description}
//         //         />
//         //     </Grid>
//         //     <Grid cols='12 3 2'>
//         //        <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
//         //        <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
//         //        <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
//         //         {/* <button className="btn btn-primary">
//         //             <i className="fa fa-plus"></i>
//         //         </button> */}
//         //     </Grid>
//         //     {/* <div className="col-xs-12 col-sm-9 col-md-10">
//         //     </div>
//         //     <div className="col-xs-12 col-sm-3 col-md-2">
//         //     </div>  */}
//         // </div>
//     )
// }

const mapStateToProps = state =>({description:state.todo.description})
const mapDispatchToProps= dispatch => bindActionCreators({add,changeDescription,search,clear},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props =>{

    const  keyHandler = (e)=>{
        if(e.key==="Enter"){
            e.shiftKey ? props.handleSearch():props.handleAdd
        }
    }

    return(
        <div role='form' className="todoForm">
            <Grid cols='12 9 10'>
                <input id="description" className="form-control" 
                placeholder="Agregue una nueva tarea" 
                onChange={props.handleChange}
                value={props.description}
                />
            </Grid>
            <Grid cols='12 3 2'>
               <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
               <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
               <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
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
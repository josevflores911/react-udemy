import React, { Component } from "react";
import "./Contador.css"
import Display from "./Display";
import Botones from "./Botones";
import PasoForm from "./PasoForm";
class Contador extends Component{

       state={
              numero:this.props.numeroInicial || 0,
              paso:this.props.pasoInicial || 0,
        }

        // constructor(props){
        //     super(props)
        //     this.inc=this.inc.bind(this)
        // }

        dec(){
            this.setState({
                numero:this.state.numero-this.state.paso
            })
        }

        inc = ()=>{
            this.setState({
                numero:this.state.numero+this.state.paso
            })
        }

        setPaso = (nuevoPaso)=>{
            this.setState({
                paso:nuevoPaso,
            })
        }

    // constructor(props){
    //     super(props)
        
    //     this.state={
    //          numero:props.numeroInicial,
    //     }
    // }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PasoForm paso={this.state.paso} setPaso={this.setPaso}/>
                <Botones 
               incrementar={this.inc} 
               decrementar={e=>this.dec()}/>
            </div>
        )
    }
}

export default Contador;

//<button onClick={this.inc}>+</button>
//<button onClick={e=>this.dec()}>-</button>
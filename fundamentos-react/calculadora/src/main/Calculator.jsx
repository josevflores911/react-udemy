import React,{Component} from "react";
import './Calculator.css';
import Boton from "../componentes/Boton";
import Display from "../componentes/Display";

export default class Calculator extends Component{

    constructor(props){
        super()
        this.clearMemory=this.clearMemory.bind(this);
        this.setOperation=this.setOperation.bind(this);
        this.addDigit=this.addDigit.bind(this);
    }

    clearMemory(){
        console.log('clean')
    }
    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render(){
    // const addDigit = n =>this.addDigit(n);
    // const setOperation = op =>this.setOperation(op);

        return(
            <div className="calculator">
                <Display value={1000}/>
                
                <Boton label="AC" click={this.clearMemory}/>
                <Boton label="/" click={this.setOperation}/>
                <Boton label="7"  click={this.addDigit}/>
                <Boton label="8" click={this.addDigit}/>
                <Boton label="9" click={this.addDigit}/>
                <Boton label="*" click={this.setOperation}/>
                <Boton label="4" click={this.addDigit}/>
                <Boton label="5" click={this.addDigit}/>
                <Boton label="6" click={this.addDigit}/>
                <Boton label="-" click={this.setOperation}/>
                <Boton label="1" click={this.addDigit}/>
                <Boton label="2" click={this.addDigit}/>
                <Boton label="3" click={this.addDigit}/>
                <Boton label="+" click={this.setOperation}/>
                <Boton label="0" click={this.addDigit}/>
                <Boton label="."click={this.addDigit}/>
                <Boton label="=" click={this.setOperation}/>
            </div>
        )
    }
}
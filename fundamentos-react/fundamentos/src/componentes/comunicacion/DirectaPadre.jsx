import React from "react";
import DirectaHijo from "./DirectaHijo";

export default props =>{
    return(
        <div>
            <DirectaHijo texto="Hijo 1" numero={20} boo={true}></DirectaHijo>
            <DirectaHijo texto="Hijo 1" numero={20} boo={false}></DirectaHijo>
        </div>
    )
}
import React from "react";
import Conditional from "./conditional";

export default props =>{
    return(
        <Conditional test={!props.hide}>
            <button className={'btn btn-'+props.style}
                 onClick={props.onClick}>
                <i className={"fa fa-"+props.icon}></i>
            </button>
        </Conditional>

    )
   
}
import React from "react";

const PageTitle = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <br/>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default PageTitle
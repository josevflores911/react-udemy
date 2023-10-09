import React from "react";
import alumnos from "../../data/alumnos";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return (
        <div>
            <ul>
                {alumnos.map((al) =>{
                    return(
                        <div key={al.id}>{al.nombre}-{al.nota}</div>
                        )
                })}
            </ul>
        </div>
    )
}
import React from "react";
import If from "./If";

// eslint-disable-next-line import/no-anonymous-default-export
export default props=>{
    const usuario =props.usuario || {}
    return(
        <div>
            
           <If test={usuario && usuario.nombre}>
                Sea Bienvenido {usuario.nombre}

            </If>
            <If test={!usuario || !usuario.nombre}>
                Sea Bienvenido {'Bro'}
            </If>
            {/*  <If test={usuario && usuario.nombre}>
                ea Bienvenido {usuario.nombre}
                <Else>
                    otra cosa
                </Else>
            </If>*/}
        </div>
    )
}
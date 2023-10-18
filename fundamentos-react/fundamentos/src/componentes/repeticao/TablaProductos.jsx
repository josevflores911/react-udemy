import React from "react";

import productos from "../../../fundamentos/src/data/productos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    function getLinhas(){
        return productos.map((producto, i)=>{
            return(
                <tr key={producto.id}
                className={i%2===0?'Par':'Impar'}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TablaProductos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
                </table>
        </div>
    )
}
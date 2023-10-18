import React,{cloneElement} from 'react';



// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>
            {props.children.map((child,i)=>{
                return cloneElement(child,{...props,key:i})
            })}
        </div>
    )
}
/* <FamiliaMiembro nombre="Pedro"></FamiliaMiembro>
            <FamiliaMiembro nombre="Ana"></FamiliaMiembro>
            <FamiliaMiembro nombre="Gustavo"></FamiliaMiembro> */
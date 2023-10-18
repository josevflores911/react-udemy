/** 
 * error en renderizacion condicional 1 2 3
*/


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    // const elseChild = props.children.filter(child=>{
    //     return child.type && child.type.name ==='Else'
    // })[0]

    // const ifChildren= props.children.filter(child=>{
    //     return child !== elseChild
    // })

    if(props.test){
        return props.children
    }
    else{
        return false
    }
}

export const Else = props => props.children
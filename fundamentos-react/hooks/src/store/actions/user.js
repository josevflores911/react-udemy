export function login(dispatch,name){

    // fetch('url')
    //     .then(resp=>resp.json())
    //     .then(json=>dispatch({type:'userList',payload:json}))

    dispatch({type:'login',payload:'Maria'})
}
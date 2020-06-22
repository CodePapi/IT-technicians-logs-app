import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG} from './types'
//import log from '../../src/reducers/index'
//import log from '../'

// export const getLogs=()=>{
//     return (dispatch)=>{
//         setLoading()
//         const res = await fetch('http://localhost:5000/logs')
//     const data = await res.json()
//     dispatch({
//         type:GET_LOGS,
//         payload:data
//     })

//     }
// }
//get logs
export const getLogs=()=> async dispatch=>{
   
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/logs')
    const data = await res.json()
    dispatch({
        type:GET_LOGS,
        payload:data
    })
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload:error.response.data
        })
    }
       

}

//add logs
export const addLogs=(log)=> async dispatch=>{
   
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type':'application/json'
            }
        })
    const data = await res.json()
    dispatch({
        type:   ADD_LOG,
        payload:data
    })
        
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload:error.response.data
        })
    }
       

}

//set logs
export const setLoading=()=>{
    return {
        type: SET_LOADING
    }
}
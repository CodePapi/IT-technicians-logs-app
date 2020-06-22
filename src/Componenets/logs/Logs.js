import React, {useEffect} from 'react'
import LogItems from "./LogsItems"
import Preload from '../load/PreLoad'
import {connect }from 'react-redux'
import PropTypes from 'prop-types'
import {getLogs} from '../../actions/logActions'

const Logs=({log:{logs, loading}, getLogs})=> {
// const[load, setLoad]=useState(false)
// const[logs, setLogs]=useState([])
useEffect(()=>{
    getLogs()
},[])

// const getLogs = async()=>{
//     setLoad(true);
//     const res = await fetch('http://localhost:5000/logs')
//     const data = await res.json()
//     console.log(data)
//     setLogs(data)
//     setLoad(false)

    if(loading || logs===null){
        return <Preload/>
    }
// }


    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">
                    System logs
                </h4>
            </li>
            {!loading&& logs.lenght===0?(<h4>No logs</h4>):
            (logs.map(log=>
            <LogItems log={log} key={log.id}/>))}
        </ul>
    )
}
Logs.propTypes={
    log: PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
 log:state.log
})
export default connect(mapStateToProps, {getLogs})(Logs)

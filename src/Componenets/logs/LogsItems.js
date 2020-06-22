import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteLog, setCurrent} from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize'


const LogsItems = ({log, deleteLog, setCurrent}) => {
    const onDelete=()=>{
        deleteLog(log.id)

        M.toast({html:'Log Deleted'})
    }
    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' 
                 style={log.attention===true?
                 {color:"green"}:{color:"red"}} 
                 className="modal-trigger"
                 onClick={()=>setCurrent(log)}
                 >
                   
                 
                    {log.message}


                </a>
                <br/>
               ID : {log.id} last updated by <span>{log.tech}</span> at { " "}
                   {log.date}
               <a href="!#" onClick={onDelete} >
                   <i className="small material-icons grey-text ">
                       delete
                       </i></a>
            </div>
        </li>
        
    )
}

LogsItems.propTypes = {
log: PropTypes.object.isRequired,
deleteLog: PropTypes.func.isRequired, 
setCurrent: PropTypes.func.isRequired,
}

export default connect(
    null, 
    {deleteLog, 
    setCurrent})
    (LogsItems)



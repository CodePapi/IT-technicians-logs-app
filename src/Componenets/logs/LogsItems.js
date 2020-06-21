import React from 'react'
import PropTypes from 'prop-types'


const LogsItems = ({log}) => {
    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal'  style={log.attention===true?{color:"green"}:{color:"red"}} className="modal-trigger">
                    {log.message}
                </a>
                <br/>
               ID : {log.id} last updated by <span>{log.tech}</span> at { " "}
                   {log.date}
               <a href="/" ><i className="small material-icons grey-text ">delete</i></a>
            </div>
        </li>
        
    )
}

LogsItems.propTypes = {
log: PropTypes.object.isRequired 
}

export default LogsItems



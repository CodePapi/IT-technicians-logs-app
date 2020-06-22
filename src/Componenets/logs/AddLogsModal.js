import React, {useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addLogs} from '../../actions/logActions'
import M from "materialize-css/dist/js/materialize.min.js"

 const AddLogsModal = ({addLogs}) => {

    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')
    const onSubmit=()=>{
        if(message===''|| tech===''){
            M.toast({html: "please enter  message and tech"})
        }
        else{

            const newLog={
                message,
                attention,
                tech,
                date: new Date()
            }
            addLogs(newLog)
            M.toast({html:`Log added by ${tech}`})
            //clear all fields
            setAttention(false)
            setMessage('')
            setTech('')
        }
        }
    return (
        <div id="add-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System</h4>
                <div className="row">
                    <div className='inputField'>
                        <input 
                        type="text" 
                        name="message" 
                        value={message} 
                        onChange={e=>setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>

                    <div className='inputField'>
                       <select name="tech" 
                       value={tech} 
                       className="browser-default" 
                       onChange={e=>setTech(e.target.value)}>
                           <option value="" disabled>
                                Select Technician add
                           </option>
                           <option value="John Doe">
                               John Doe
                           </option>
                           <option value="John Smith">
                               John Smith
                           </option>
                           <option value="Chris Smith">
                              Chris Smith
                           </option>
                           <option value="Mike Scoffield">
                               Mike Scoffield
                           </option>
                           <option value="Luke Heen">
                              Luke Heen
                           </option>

                       </select>
                        
                    </div>

                    <div className='inputField'>
                        
                        <label>
                            <p>
                            <input 
                        type="button" 
                        value={true} 
                        checked={attention} 
                        onClick={e=>setAttention(e.target.value=!attention)}
                        className="filled"
                        />
                            </p>
                            <span>Needs attention</span>
                        </label>
                    </div>

                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close wave-effect wave-green btn-flat">
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle={
    width: "75%",
    height:"75%"
}

AddLogsModal.propTypes={
    addLogs: PropTypes.func.isRequired,}

export default connect(null, {addLogs}) (AddLogsModal)
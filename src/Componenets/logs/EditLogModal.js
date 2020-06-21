import React, {useState} from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

 const EditLogsModal = () => {

    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')
    const onSubmit=()=>{
        if(message===''|| tech===''){
            M.toast({html: "please enter  message and tech"})
        }
        else{
            setAttention(false)
            setMessage('')
            setTech('')
        }
        }
    return (
        <div id="edit-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
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
                                Select Technician
                           </option>
                           <option value="John Doe">
                               John Doe
                           </option>
                           <option value="John Smith">
                               John Smith
                           </option>
                           <option value="Sam Smith">
                               Sam Smith
                           </option>

                       </select>
                        
                    </div>

                    <div className='inputField'>
                        
                        <label>
                            <p>
                            <input 
                        type="checkbox" 
                        value={attention} 
                        checked={attention} 
                        onChange={e=>setAttention(!attention)}
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

export default EditLogsModal
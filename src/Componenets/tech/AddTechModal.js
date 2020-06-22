import React, {useState} from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

 const AddTechModal = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState("")
    
    const onSubmit=()=>{
        if(firstname===''|| lastname===''){
            M.toast({html: "please enter tech's name"})
        }
        else{
           setFirstName('')
           setLastName('')
        }
        }
    return (
        <div id="tech-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>New Technicians</h4>
                <div className="row">
                    <div className='inputField'>
                        <input 
                        type="text" 
                        name="firstName" 
                        value={firstname} 
                        onChange={e=>setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>

                    <div className='inputField'>
                        <input 
                        type="text" 
                        name="lastName" 
                        value={lastname} 
                        onChange={e=>setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>


                </div>

            </div>
            <div className="modal-footer">
                <a href="!#" onClick={onSubmit} 
                className="modal-close wave-effect wave-green btn-flat">
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

export default AddTechModal
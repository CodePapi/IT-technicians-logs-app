import React from 'react'

export const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
            <i className="small material-icons  grey-text">add</i></a>
            <ul>
                <li>
                <a href="#tech-list-modal" className="btn-floating btn-large green darken-2 modal-trigger">
            <i className="small material-icons  grey-text">person</i></a>
                </li>
                <li>
                <a href="#tech-log-modal" className="btn-floating btn-large red darken-2 modal-trigger">
            <i className="small material-icons  grey-text">person_add</i></a>
                </li>
            </ul>
        </div>
        
    )
}


export default AddBtn
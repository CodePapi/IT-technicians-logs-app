import React from 'react'
import PropTypes from 'prop-types'


const TechItems= ({techs}) => {
    return (
        <li className="collection-item">
            <div>
                <a href='#!'  className="secondary-content">
                    {techs.firstName + "   " + techs.lastName} 
                </a>
                <br/>
               
               <a href="/" >
                   <i className="small material-icons grey-text ">delete</i></a>
            </div>
        </li>
        
    )
}

TechItems.propTypes = {
techs: PropTypes.object.isRequired 
}

export default TechItems



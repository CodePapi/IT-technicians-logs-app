import React from 'react'
import PropTypes from 'prop-types'


const TechItems= ({tech}) => {
    return (
        <li className="collection-item">
            <div>
                <a href='#!'  className="secondary-content">
                    {tech.firstName + "   " + tech.lastName} 
                </a>
                <br/>
               
               <a href="/" >
                   <i className="small material-icons grey-text ">delete</i></a>
            </div>
        </li>
        
    )
}

TechItems.propTypes = {
tech: PropTypes.object.isRequired 
}

export default TechItems



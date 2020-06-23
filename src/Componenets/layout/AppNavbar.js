import React,{useRef} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {searchLogs} from '../../actions/logActions'


const AppNavbar = ({searchLogs}) => {
const text = useRef('')
const onChange=e=>{
  searchLogs(text.current.value)
}
    return (
        <nav className="red" style={{marginBottom:"30px"}}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input 
              id="search" 
              type="search"  
              placeholder='Search Logs...' 
              ref={text}
              onChange={onChange}
              />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

AppNavbar.propTypes={
  searchLogs: PropTypes.func.isRequired,
}

export default connect (null,{searchLogs})(AppNavbar)

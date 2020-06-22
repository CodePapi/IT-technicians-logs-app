import React, {Fragment, useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min.js"
import AppNavbar from './Componenets/layout/AppNavbar';
import Logs from './Componenets/logs/Logs'
import AddBtn from './Componenets/layout/AddBtn'
import AddLogsModal from './Componenets/logs/AddLogsModal'
import EditLogsModal from './Componenets/logs/EditLogModal'
import AddTechModal from './Componenets/tech/AddTechModal'
import TechList from './Componenets/tech/TechListModal'

import {Provider} from 'react-redux'
import store from './store'

const App=()=> {

useEffect(()=>{
  M.AutoInit()
})

  return (
    <Provider store={store}>
    <div>
      <Fragment>
        <AppNavbar/>
      </Fragment>

    <AddBtn/>
      <div className="container">
        <AddTechModal/>
        <EditLogsModal/>
      <AddLogsModal/> 
      <TechList/> 
       
     <Logs/>
    


  
<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Testing</h4>
    <p><iframe src="http://localhost:5000/techs" title="lag"></iframe></p>
  </div>
  <div className="modal-footer">
    <a href="/" className="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
        <button data-target="modal1" className="btn modal-trigger">JSON Logs</button>
        
     
      </div>
    </div>
    </Provider> 
  );
}

export default App;

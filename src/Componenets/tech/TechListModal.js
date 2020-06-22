import React, {useState, useEffect} from 'react'
import Preload from '../load/PreLoad'
import TechItems from './TechItems'

function TechList() {
const[techs, setTechs]=useState([])
const[load, setLoad]=useState(false)
useEffect(()=>{
    getTechs()
},[])

const getTechs= async()=>{
    setLoad(true);
    const res = await fetch('http://localhost:5000/techs')
    const data = await res.json()
    console.log(data)
    setTechs(data)
    setLoad(false)

    if(load){
        return <Preload/>
    }
}


    return (
       <div id ="tech-list-modal" className="modal">
           <div className='modal-content'>
               <h4>Technician List</h4>
               <ul className="collection">
    {!load && techs.map(tech=>(<li 
    className="collection">
        <TechItems tech={tech}
         key={tech.id}
         ></TechItems></li>))}

               </ul>

           </div>

       </div>
    )
}

export default TechList

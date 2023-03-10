import React, { useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function Edit() {
   const context = useContext(DataContext);
   const location = useLocation(); 
   console.log(location.state.data) 
   const navigate = useNavigate();
   const index = (location.state.data);

    // Object In Which the changes will be done 


    const newObj = {
        name : context.entries[index].name,
        age : context.entries[index].age,
        course : context.entries[index].batch,
        batch : context.entries[index].age
        
    }

    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;    
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj)
        }
       );
       navigate('/table');
    }

   return (
    <>
        <input onChange={handleChange} name='Name' placeholder= {context.entries[index].name} className='inputCon'></input>
        <input onChange={handleChange} name='Age'   placeholder= {context.entries[index].age} className='inputCon'></input>
        <input onChange={handleChange} name='course'   placeholder= {context.entries[index].course} className='inputCon'></input>
        <input onChange={handleChange} name='batch'   placeholder= {context.entries[index].batch} className='inputCon'></input>
        <br/>
        <button onClick={handleUpdate} id='update_btn'>Update</button>
    </>
  )
}

export default Edit;
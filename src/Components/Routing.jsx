import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Table from './Table';
import DataContext from './DataContext';
import Edit from './Edit';
import AddNew from './AddNew';

function Ruting() {
    const [data, setData] = useState([]);

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='table' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table/>
         </DataContext.Provider>
      }/>
    <Route path='edit' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>}/>

     <Route path='addnew' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <AddNew/>
        </DataContext.Provider>}/>    

    <Route path='contact' element={<Contact/>}/>
       
    </Routes>
    </>
  )
    }

export default Ruting;
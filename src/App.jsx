import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import Provider from './components/Provider';
import Login from './components/Login';
import Bike from './components/Bike';
import SingleBike from './components/SingleBike';
import Bookeddetails from './components/Bookeddetails';
import SingleBook from './components/SingleBook';
function App() {
  return (
    <> <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home />} />
                

         <Route path="/users" element={<Users />} />
         <Route path="/provider" element={<Provider />} />
         <Route path="/login" element={<Login />} />
         <Route path='/bike' element={<Bike/>}/>
         <Route path='/single/:id' element={<SingleBike/>}/>
        < Route path='/bookeddetails' element={<Bookeddetails/>}/>
        <Route path='/singlebookuser/:id' element={<SingleBook/>}/>
</Routes>
</div>
    </>
  )
}

export default App

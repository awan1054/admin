import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import Provider from './components/Provider';
import Login from './components/Login';


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
<Route path="/" element={<Home />} />
                

         <Route path="/users" element={<Users />} />
         <Route path="/provider" element={<Provider />} />
         <Route path="/login" element={<Login />} />

</Routes>
</div>
    </>
  )
}

export default App

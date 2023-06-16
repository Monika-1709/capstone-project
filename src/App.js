import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route, Router} from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';
import Transactions from './Pages/Transactions.jsx';
import Reviews from './Pages/Reviews.jsx';
import Conversations from './Pages/Conversations.jsx';
 import Login from './LoginPage/Login.jsx';
// import Navigate from './LoginPage/Navigate';
// import { Switch } from '@mui/material';
// import Login from './LoginPage/Login';
// import Conversations from './Pages/Conversations'


function App(){
 
  return (
  <>
  
 
   
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
       
         </Routes>  
        
          {/* <Sidebar> */}
       <Routes>
        
          <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="/conversations" element={<Conversations />} />
               <Route path="/orderhistory" element={<OrderHistory />} />
               <Route path="/transactions" element={<Transactions />} />
               <Route path="/reviews" element={<Reviews />} />
         
               
           </Routes>
        {/* </Sidebar>         */}
      </BrowserRouter> 

   </>
   

  ); 
};

 export default App;

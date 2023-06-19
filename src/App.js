import './App.css';
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
 import Sidebar from './Pages/Sidebar.jsx'
import Dashboard from './Pages/Dashboard.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';
import Transactions from './Pages/Transactions.jsx';
import Reviews from './Pages/Reviews.jsx';
import Conversations from './Pages/Conversations.jsx';
 import Login from './Pages/Login.jsx';



function App(){
 
  return (
  <>
  
 
   
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Sidebar />

         
            </>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </BrowserRouter> 

   </>
   

  ); 
};

 export default App;

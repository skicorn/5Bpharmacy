import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Setting from './pages/AppSetting/Setting';
import Dashboard from './pages/Dashboard/Dashboard';
import Customer from './pages/Customers/Customer';
import Staff from './pages/Staff/Staff';
import Order from './pages/Order/Order';
import Medicine from './pages/Medicine/Medicine';
import Login from './pages/Login/Login';

const App = () => {
   return (
      <BrowserRouter>
         <div className='App'>
            <Routes>
               {/* Default route for Login */}
               <Route path='/' element={<Navigate to='/login' replace />} />
               <Route path='/login' element={<Login />} />
               <Route path='/app/*' element={<AuthenticatedApp />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

const AuthenticatedApp = () => {
   return (
      <>
         <Header />
         <section className='Container'>
            <div className='Sidebar'>
               <Sidebar />
            </div>
            <div className='Content'>
               <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/settings' element={<Setting />} />
                  <Route path='/customers' element={<Customer />} />
                  <Route path='/orders' element={<Order />} />
                  <Route path='/medicines' element={<Medicine />} />
                  <Route path='/staffs' element={<Staff />} />
               </Routes>
            </div>
         </section>
      </>
   );
};

export default App;

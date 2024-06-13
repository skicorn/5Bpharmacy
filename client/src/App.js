import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Setting from './pages/AppSetting/Setting'
import Dashboard from './pages/Dashboard/Dashboard';
import Customer from './pages/Customers/Customer';
import Staff from './pages/Staff/Staff';
import Order from './pages/Order/Order';
import Medicine from './pages/Medicine/Medicine';
import React, { useState, useLocation, useEffect, Component } from "react";
import { BrowserRouter, Route, useHistory, Routes, Link, Router } from "react-router-dom";


function App() {
  // const content={
  //   width:'77.95%';
  // }
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <section className="Container">
          <div className="Sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="Content">
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/settings' element ={<Setting/>}></Route>
              <Route path='/customers' element={<Customer/>}></Route>
              <Route path='/orders' element={<Order/>}></Route>
              <Route path='/medicines' element={<Medicine/>}></Route>
              <Route path='/staffs' element={<Staff/>}></Route>
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';
import './Medicine.css';
import icon_search from '../../assets/glass.svg';
import gray_glass from '../../assets/gray-glass.svg';
import threedot from '../../assets/threedot.png';
import menu from '../../assets/menunew.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Medicine() {
  useEffect(() => {
    document.title = 'Medicine Management';
  }, []);

  const ordersData = [
    {
      order: '#5273',
      date: '11 Jun 2024 22:07',
      customer: 'Devon Lane',
      status: 'Delivered',
      total: '$192.50',
    },
    {
      order: '#9265',
      date: '11 Jun 2024 21:32',
      customer: 'Livia Louthe',
      status: 'Complete',
      total: '$631.00',
    },
    {
      order: '#9266',
      date: '11 Jun 2024 19:57',
      customer: 'Peri Ottawell',
      status: 'Placed',
      total: '$631.00',
    },
    {
      order: '#1090',
      date: '11 Jun 2024 19:37',
      customer: 'Thadeus Jacketts',
      status: 'Processed',
      total: '$100.00',
    },
    {
      order: '#1111',
      date: '11 Jun 2024 19:22',
      customer: 'Rad Jose',
      status: 'Processed',
      total: '$60.00',
    },
    {
      order: '#2475',
      date: '11 Jun 2024 18:11',
      customer: 'Eydie Hopkyns',
      status: 'Complete',
      total: '$1,200.00',
    },
  ];

  return (
    <React.Fragment>
      <div className="medicine-header">
        <h1>MEDICINE</h1>
        <button className="medicine_button_add">Add</button>
      </div>
      <div className="medicine-parent">
        <div className="medicine-bg">
          {/* <div className="nav-search">
            <div className="medicine-nav-search">
              <div className="icon-search">
                <img src={icon_search} alt="Search Icon" />
              </div>
              <input className="input-search" placeholder="Search" />
            </div>
            <div className="medicine-nav-search-button">
              <div className="nav-search-button">
                <button className="nav-search-button1">a</button>
                <button className="nav-search-button2">bb</button>
              </div>
              <button className="nav-search-button-filter">filterfilter</button>
            </div>
          </div> */}
          <div className="multi-nav">
            <div className="add-nav-search-1">
              <div className="icon-search">
                <img className="icon-img" src={gray_glass} ></img>
              </div>
              <div className="input-search"><input className="input-s" placeholder="Search ..." /></div>
            </div>

            <div className="add-nav-search-3">
              <div className="text-search">
                <div className="text-search-3"><button className="button-search-3">Filter</button></div>

                <div className="button-dropdown">
                  <ul><li><button className="button-search-az" >A-Z</button></li>
                    <li><button className="button-search-az">Z-A</button></li></ul>

                </div>

              </div>
            </div>
          </div>
          <div className="staff-table" >
            <table class="table custom-table">
              <thead  >
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order) => (
                  <tr key={order.order} className="Medicine-tr">
                    <td>{order.order}</td>
                    <td>{order.date}</td>
                    <td>{order.customer}</td>
                    <td>{order.status}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Medicine;
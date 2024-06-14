import React, { useEffect, useState } from 'react';
import './Order.css';
import icon_search from '../../assets/glass.svg';
import pen_edit from '../../assets/pen.svg';
import trash from '../../assets/trash.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import gray_glass from '../../assets/gray-glass.svg';
import threedot from '../../assets/threedot.png';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
function Order() {
  useEffect(() => {
    setOrder(ordersData);
    document.title = 'Order Management';
  }, []);
  const [order, setOrder] = useState([]);
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
    {
      order: '#2475',
      date: '11 Jun 2024 18:11',
      customer: 'Eydie Hopkyns',
      status: 'Complete',
      total: '$1,200.00',
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
    <div className="order-all">
        <div className="order-content">
            {/* head staff */}
            <div className="head-order">
                <h2>ORDERS</h2>
                <div className="add-button"><button>Add</button></div>
            </div >
            {/* nav */}
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
                            <ul><li><button className="button-search-az">A-Z</button></li>
                            <li><button className="button-search-az" >Z-A</button></li></ul>
                            
                        </div>

                    </div>
                </div>
            </div>
            <div className="order-table" >
                <table class="table custom-table">
                    <thead  >
                        <tr className="row-1">
                            {/* <th className="checkbox-staff">
                                <input type="checkbox"></input>
                            </th> */}
                            <th scope="col">OrderID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Total</th>
                            <th style={{ color: "white" }} scope="col">Action</th>
                        </tr>

                    </thead>
                    <tbody>

                        {/* {data.map((staff,index)=> {
                                return <tr key={index}> */}
                        {order.map(item => (

                            <tr>
                                <td>{item.order}</td>
                                <td>{item.date}</td>
                                <td>{item.customer}</td>
                                <td>{item.total}</td>
                                <td>
                                    <div className="icon-action">
                                        <div><button><img src={threedot}></img></button></div>
                                    </div>
                                </td>
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

export default Order;
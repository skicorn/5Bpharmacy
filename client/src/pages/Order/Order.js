import React, { useEffect } from 'react';
import './Order.css';
import icon_search from '../../assets/glass.svg';
import pen_edit from '../../assets/pen.svg';
import trash from '../../assets/trash.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Order() {
  useEffect(() => {
    document.title = 'Order Management';
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
      <div className="Order-header">
        <h1>Order</h1>
        <button className="Order_button_add">Add</button>
      </div>

      <div className="Order-parent">
        <div className="Order-bg">
          <div className="nav-search">
            <div className="Order-nav-search">
              <div className="icon-search">
                <img src={icon_search} alt="Search Icon" />
              </div>
              <input className="input-search" placeholder="Search" />
            </div>
            <div className="Order-nav-search-button">
              <div className="nav-search-button">
                <button className="nav-search-button1">a</button>
                <button className="nav-search-button2">bb</button>
              </div>
              <button className="nav-search-button-filter">filter</button>
            </div>
          </div>

          <div className="Order-list">
            <div className="Order-list-context">
              <table className="table">
                <thead className="table-light">
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
                    <tr key={order.order} className="Order-tr">
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
      </div>
    </React.Fragment>
  );
}

export default Order;

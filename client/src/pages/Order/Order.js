<<<<<<< HEAD
import React, { useEffect } from 'react';
import './Order.css';
import icon_search from '../../assets/glass.svg';
import pen_edit from '../../assets/pen.svg';
import trash from '../../assets/trash.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { useEffect } from 'react';
import './Order.scss';
>>>>>>> ae4c07f5a62b3ce7ffda0523692f7448accf64ca

function Order() {
  useEffect(() => {
    document.title = 'Order Management';
  }, []);

<<<<<<< HEAD
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
=======
  function buttona() {
    var formA = document.getElementById('oderKformaddoder');
    formA.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('oderbuttonA') &&
        event.target.closest('#oderKformaddoder') == null
      ) {
        formA.style.visibility = 'hidden'; // Ẩn formA nếu click không phải trên oderbuttonA hoặc formA
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }

  function buttonb() {
    var formA1 = document.getElementById('oderKformaddoder');
    formA1.style.visibility = 'visible';

    function handleClickOutside(event) {
      if (
        event.target !== document.getElementById('oderbuttonA1') &&
        event.target.closest('#oderKformaddoder') == null
      )
       {
        formA1.style.visibility = 'hidden'; // Ẩn formA1 nếu click không phải trên oderbuttonA1 hoặc formA1
        document.removeEventListener('click', handleClickOutside);
      }
    }

    document.addEventListener('click', handleClickOutside);
  }
  
  function buttonan() {
    var formA = document.getElementById('oderKfomrm2');
    formA.style.visibility = 'hidden';
  }

  const Kfomrm2 = {
    visibility: 'hidden',
    position: 'absolute',
    top: '100px',
    left: '0',
    right: '0',
    zIndex: '1',
  };

  return (
    <div id="Koder">
      <h1>Order</h1>
      <div className="oderbuttonStyle">
        <button onClick={buttona} id="oderbuttonA">
          Click me
        </button>
        <button onClick={buttonb} id="oderbuttonA1">
          Click me2
        </button>
      </div>
      <div className="oderKdiv" id="oderKdiv">
        <div className="oderKabigdiv">
          <div className="oderKamediumdiv">
            <table className="oderKamediumtable">
              <thead>
                <tr>
                  <th>Cột 1</th>
                  <th>Cột 2</th>
                  <th>Cột 3</th>
                  <th>Cột 4</th>
                  <th>Cột 5</th>
                  <th>Cột 6</th>
                  <th>Cột 7</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dữ liệu 1</td>
                  <td>Dữ liệu 2</td>
                  <td>Dữ liệu 3</td>
                  <td>Dữ liệu 4</td>
                  <td>Dữ liệu 5</td>
                  <td>Dữ liệu 6</td>
                  <td>Dữ liệu 7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={Kfomrm2} id="oderKfomrm2">
        <div className="oderKformaddoder" id="oderKformaddoder">
          <div className="oderKformaddoderheader">Add new</div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>

          <div className="oderKformaddoderinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
            Add
          </button>

          <div class="oderKformaddoderinfoa">
            <image
              src=""
              class="oderKformaddoderinfob"
            > ảnh ở đây </image>
            <p class="oderKformaddoderinfoc">
              paracetamol 650mg paracetamol 650mgparacetamol 650mgparacetamol
              650mg
            </p>
          </div>
          <div class="oderKformaddoderinfoa">
            <image
              src=""
              class="oderKformaddoderinfob"
            > ảnh ở đây </image>
            <p class="oderKformaddoderinfoc">
              paracetamol 650mg paracetamol 650mgparacetamol 650mgparacetamol
              650mg
            </p>
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
          Create
        </button>
        </div>
      
      </div>

      <div style={Kfomrm2} id="oderKfomrm3">
        <div className="oderKformaddoder" id="oderKformaddoder">
          <div className="oderKformaddoderheader">Edit</div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>hello</p>
            <input />
          </div>
          <div className="oderKformaddoderinfo">
            <p>Image</p>
            <button>upload file</button>
          </div>
          <button className="oderKformaddoderinfoadd" onClick={buttonan}>
            Add
          </button>
        </div>
      </div>
    </div>
>>>>>>> ae4c07f5a62b3ce7ffda0523692f7448accf64ca
  );
}

export default Order;

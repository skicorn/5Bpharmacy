import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Medicine.css';
import icon_search from '../../assets/glass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import gray_glass from '../../assets/gray-glass.svg';
import threedot from '../../assets/threedot.png';
import axios from 'axios';

function Medicine() {
  const navigate = useNavigate();

  useEffect(() => {
    setMedicine(medicineData);
    document.title = 'Medicine Management';
  }, []);
  const [medicine, setMedicine] = useState([]);
  const medicineData = [
    {
      MedicineID: 1,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 1',
      Description: 'Description of Medicine 1',
      Price: 10.99,
      Expire: '2024-12-31',
    },
    {
      MedicineID: 2,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 2',
      Description: 'Description of Medicine 2',
      Price: 15.49,
      Expire: '2025-06-30',
    },
    {
      MedicineID: 3,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 3',
      Description: 'Description of Medicine 3',
      Price: 20.99,
      Expire: '2023-09-15',
    },
    {
      MedicineID: 4,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 3',
      Description: 'Description of Medicine 3',
      Price: 20.99,
      Expire: '2023-09-15',
    },
    {
      MedicineID: 5,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 3',
      Description: 'Description of Medicine 3',
      Price: 20.99,
      Expire: '2023-09-15',
    },
    {
      MedicineID: 6,
      IMG: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      Name: 'Medicine 3',
      Description: 'Description of Medicine 3',
      Price: 20.99,
      Expire: '2023-09-15',
    },
  ];

 const addmedicine = () => {
    navigate('/app/medicines/addmedicines');
  };

  return (
    <React.Fragment>
      <div className="order-all">
        <div className="order-content">
          {/* head staff */}
          <div className="head-order">
            <h2>ORDERS</h2>
            <div className="add-button">
              <button onClick={addmedicine}>Add</button>
            </div>
          </div>
          {/* nav */}
          <div className="multi-nav">
            <div className="add-nav-search-1">
              <div className="icon-search">
                <img className="icon-img" src={gray_glass}></img>
              </div>
              <div className="input-search">
                <input className="input-s" placeholder="Search ..." />
              </div>
            </div>

            <div className="add-nav-search-3">
              <div className="text-search">
                <div className="text-search-3">
                  <button className="button-search-3">Filter</button>
                </div>

                <div className="button-dropdown">
                  <ul>
                    <li>
                      <button className="button-search-az">A-Z</button>
                    </li>
                    <li>
                      <button className="button-search-az">Z-A</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="order-table">
            <table class="table custom-table">
              <thead>
                <tr className="row-1">
                  {/* <th className="checkbox-staff">
                                <input type="checkbox"></input>
                            </th> */}
                  <th scope="col">MedicineID</th>
                  <th scope="col">IMG</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Expire</th>
                  <th style={{ color: 'white' }} scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {data.map((staff,index)=> {
                                return <tr key={index}> */}
                {medicine.map((item) => (
                  <tr>
                    <td>{item.MedicineID}</td>
                    <td>
                      <img
                        src={item.IMG}
                        style={{ height: '100px', width: '100px' }}
                      />
                    </td>
                    <td>{item.Name}</td>
                    <td>{item.Description}</td>
                    <td>{item.Price}</td>
                    <td>{item.Expire}</td>
                    <td>
                      <div className="icon-action">
                        <div>
                          <button>
                            <img src={threedot}></img>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Medicine;

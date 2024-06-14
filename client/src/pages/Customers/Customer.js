import React, { useEffect, useState } from "react";
import './Customer.css';

import gray_glass from '../../assets/gray-glass.svg';
import threedot from '../../assets/threedot.png';
import menu from '../../assets/menunew.png';
import square from '../../assets/foursquare.png';
import filter from '../../assets/filter.png';
import triangle from '../../assets/triangle-down.png';
import leftarrow from '../../assets/left-arrow.png';
import rightarrow from '../../assets/right-arrow.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useAsyncError } from "react-router-dom";
// import axios from 'axios'


function Customer() {
    const aray = [
        {   
            id: 1,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
        {   
            id: 2,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
        {   
            id: 3,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
        {   
            id: 4,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
        {   
            id: 5,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
        {   
            id: 6,
            name: "Hony B",
            phone:"0909954546",
            email: "example@gmail.com",
        },
    
    ]
    
    // const [data,setData]=useState([])
    useEffect(() => {
        setCustomer(aray);

        // axios.get('http://localhost:8081/') 
        // .then(res=>setData(res.data))
        // .catch(err=>console.log(err));

        document.title = "Customer Management"
    })



    const [customer, setCustomer] = useState([]);
    const [sortType, setSortType] = useState(null);


    const sortedStaffdesc = [...customer].sort((a, b) => {
        const Reversed = (sortType === 'asc') ? 1 : -1;
        return Reversed * a.name.localeCompare(b.name);
    });
    const sortedStaffasc = [...customer].sort((a, b) => {
        const isReversed = (sortType === 'desc') ? 1 : -1;
        return isReversed * b.name.localeCompare(a.name);
    });
    const handleSortAZ = () => {
        setSortType('asc');
        setCustomer([...customer].sort((a, b) => a.name.localeCompare(b.name)));
    };

    const handleSortZA = () => {
        setSortType('desc');
        setCustomer([...customer].sort((a, b) => b.name.localeCompare(a.name)));
    };
    return (
        <React.Fragment>
            <div className="customer-all">
                <div className="customer-content">
                    {/* head staff */}
                    <div className="head-customer">
                        <h2>CUSTOMERS</h2>
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
                                    <ul><li><button className="button-search-az" onClick={handleSortAZ}>A-Z</button></li>
                                    <li><button className="button-search-az" onClick={handleSortZA}>Z-A</button></li></ul>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="customer-table" >
                        <table class="table custom-table">
                            <thead  >
                                <tr className="row-1">
                                    {/* <th className="checkbox-staff">
                                        <input type="checkbox"></input>
                                    </th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th style={{ color: "white" }} scope="col">Action</th>
                                </tr>

                            </thead>
                            <tbody>

                                {/* {data.map((staff,index)=> {
                                        return <tr key={index}> */}
                                {sortedStaffasc.map(item => (

                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
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
                    <div className="footer-staff">
                        <div className="sub-footer-1">
                            <h4 className="text-des">Rows per page:</h4>
                        </div>
                        <div className="sub-footer-2">
                            <h4 className="text-des">10</h4>
                            <div className="icon-footer"><img src={triangle}></img></div>
                        </div>
                        <div className="sub-footer-3">
                            <h4 className="text-des">1-6 of 6</h4>
                        </div>
                        <div className="sub-footer-4">
                            <div className="icon-footer"><img src={leftarrow}></img></div>
                            <div className="icon-footer"><img src={rightarrow}></img></div>
                        </div>
                    </div>


                </div>
            </div>

        </React.Fragment >
    )
}
export default Customer;
import React, { useEffect, useState } from "react";
import './Staff.css';
import AddPopup from "./AddPopup";
import EditPopup from "./EditPopup";
import DeletePopup from "./DeletePopup";
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

const aray = [
    {
        id: 1,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0,

    },
    {
        id: 2,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 3,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 4,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 5,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 6,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    }
]

function Staff() {
    // const [data,setData]=useState([])
    useEffect(() => {
        setStaff(aray.filter(item => item.present === 0));

        // axios.get('http://localhost:8081/') 
        // .then(res=>setData(res.data))
        // .catch(err=>console.log(err));

        document.title = "Staff Management"
    })
    const [staff, setStaff] = useState([]);
    const [addPopup, setAddPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    return (
        <React.Fragment>
            <div className="staff-all">
                <div className="staff-content">
                    {/* head staff */}
                    <div className="head-staff">
                        <h2>STAFFS</h2>
                        <div className="add-button"><button onClick={() => setAddPopup(true)}>Add</button></div>
                        <AddPopup trigger={addPopup} setTrigger={setAddPopup} >

                        </AddPopup>
                        <EditPopup trigger={editPopup} setTrigger={setEditPopup} >

                        </EditPopup>
                        <DeletePopup trigger={deletePopup} setTrigger={setDeletePopup} >
                            {/* //onClick={()=>setAddPopup(true)} */}
                        </DeletePopup>
                    </div >
                    {/* nav */}
                    <div className="multi-nav">
                        <div className="add-nav-search-1">
                            <div className="icon-search">
                                <img className="icon-img" src={gray_glass} ></img>
                            </div>
                            <div className="input-search"><input className="input-s" placeholder="Search ..." /></div>
                        </div>
                        <div className="add-nav-search-2">
                            <div className="icon-search">
                                <img className="icon-img" src={menu}></img>
                            </div>
                            <div className="icon-search">
                                <img className="icon-img" src={square}></img>
                            </div>
                        </div>
                        <div className="add-nav-search-3">
                            <div className="icon-search">
                                <img className="icon-img" src={filter}></img>
                            </div>
                            <div className="text-search">
                                <div className="text-search-3">Filter</div>
                            </div>
                        </div>
                    </div>
                    <div className="staff-table" >
                        <table class="table custom-table">
                            <thead  >
                                <tr className="row-1">
                                    <th className="checkbox-staff">
                                        <input type="checkbox"></input>
                                    </th>

                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Role</th>
                                    <th style={{ color: "white" }} scope="col">Action</th>
                                </tr>

                            </thead>
                            <tbody>

                                {/* {data.map((staff,index)=> {
                                        return <tr key={index}> */}
                                {staff.map(item => (

                                    <tr>
                                        <td className="checkbox-staff"><div><input type="checkbox"></input></div></td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <div className="icon-action">
                                                <div onClick={() => setEditPopup(true)}><button><img src={threedot}></img></button></div>
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
                        <div  className="sub-footer-4">
                            <div className="icon-footer"><img src={leftarrow}></img></div>
                            <div className="icon-footer"><img src={rightarrow}></img></div>
                        </div>
                    </div>      
                </div>
            </div>

        </React.Fragment >
    )
}
export default Staff;
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

import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useAsyncError } from "react-router-dom";
// import axios from 'axios'

const aray = [
    {
        id: 1,
        src: menu,
        img:"data:image/png;base64,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",
       
        name: "Bony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },
    {
        id: 2,
        src: menu,
        img:"data:image/png;base64,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",
        name: "Aony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },
    {
        id: 3,
        img:"data:image/png;base64,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",
       
        src: menu,
        name: "Cony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },
    {
        id: 4,
        src: menu,
        img:"data:image/png;base64,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",
       
        name: "Eony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },
    {
        id: 5,
        src: menu,
        img:"data:image/png;base64,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",
       
        name: "Gony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },
    {
        id: 6,
        src: menu,
        img:"data:image/png;base64,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",
       
        name: "Hony B",
        phone: "0909954546",
        email: "example@gmail.com",
        salary: "200$",
        idNumber: "12",
        role: "Dược sĩ",
        adress: "25 Hill Cliton",
        present: 0
    },

]

function Staff() {
    // const [data,setData]=useState([])
    useEffect(() => {
        setStaff(aray);

        // axios.get('http://localhost:8081/') 
        // .then(res=>setData(res.data))
        // .catch(err=>console.log(err));

        document.title = "Staff Management"
    })



    const [staff, setStaff] = useState([]);
    const [addPopup, setAddPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [sortType, setSortType] = useState(null);


    const sortedStaffdesc = [...staff].sort((a, b) => {
        const Reversed = (sortType === 'asc') ? 1 : -1;
        return Reversed * a.name.localeCompare(b.name);
    });
    const sortedStaffasc = [...staff].sort((a, b) => {
        const isReversed = (sortType === 'desc') ? 1 : -1;
        return isReversed * b.name.localeCompare(a.name);
    });
    const handleSortAZ = () => {
        setSortType('asc');
        setStaff([...staff].sort((a, b) => a.name.localeCompare(b.name)));
    };

    const handleSortZA = () => {
        setSortType('desc');
        setStaff([...staff].sort((a, b) => b.name.localeCompare(a.name)));
    };
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

                        <div className="add-nav-search-3">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Filter
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleSortAZ} href="#/action-1">A-Z</Dropdown.Item>
                                    <Dropdown.Item onClick={handleSortZA} href="#/action-2">Z-A</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                    <div className="staff-table" >
                        <table class="table custom-table">
                            <thead  >
                                <tr className="row-1">
                                    {/* <th className="checkbox-staff">
                                        <input type="checkbox"></input>
                                    </th> */}


                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">ID Number</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Adress</th>
                                    <th style={{ color: "white" }} scope="col">Action</th>
                                </tr>

                            </thead>
                            <tbody>

                                {/* {data.map((staff,index)=> {
                                        return <tr key={index}> */}
                                {sortedStaffasc.map(item => (

                                    <tr>
                                        {/* <td className="checkbox-staff"><div><input type="checkbox"></input></div></td> */}

                                        <td><img src={item.img} alt={staff.name} height="50" width="50" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.idNumber}</td>
                                        <td>{item.role}</td>
                                        <td>{item.adress}</td>
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
export default Staff;
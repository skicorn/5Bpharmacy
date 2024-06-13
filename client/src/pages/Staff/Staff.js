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

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useAsyncError } from "react-router-dom";

const aray = [
    {
        id: 1,
        name: "Bony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0,
    },
    {
        id: 2,
        name: "Aony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 3,
        name: "Cony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 4,
        name: "Eony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 5,
        name: "Fony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 6,
        name: "Gony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    }
]

function Staff() {
    useEffect(() => {
        setStaff(aray.filter(item => item.present === 0));
        document.title = "Staff Management";
    }, []);

    const [staff, setStaff] = useState([]);
    const [addPopup, setAddPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);
    const [sortType, setSortType] = useState(null);

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
                        <AddPopup trigger={addPopup} setTrigger={setAddPopup} />
                        <EditPopup trigger={editPopup} setTrigger={setEditPopup} />
                        <DeletePopup trigger={deletePopup} setTrigger={setDeletePopup} />
                    </div >
                    {/* nav */}
                    <div className="multi-nav">
                        <div className="add-nav-search-1">
                            <div className="icon-search">
                                <img className="icon-img" src={gray_glass} alt="search icon" />
                            </div>
                            <div className="input-search"><input className="input-s" placeholder="Search ..." /></div>
                        </div>

                        <div className="add-nav-search-3">
                            <div className="icon-search">
                                <img className="icon-img" src={filter} alt="filter icon" />
                            </div>
                            <div className="text-search">
                                <div className="text-search-3"><button className="button-search-3">Filter</button></div>

                                <div className="button-dropdown">
                                    <ul>
                                        <li><button className="button-search-az" onClick={handleSortAZ}>A-Z</button></li>
                                        <li><button className="button-search-az" onClick={handleSortZA}>Z-A</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staff-table">
                        <table className="table custom-table">
                            <thead>
                                <tr className="row-1">
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Role</th>
                                    <th style={{ color: "white" }} scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staff.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <div className="icon-action">
                                                <div onClick={() => setEditPopup(true)}>
                                                    <button><img src={threedot} alt="edit icon" /></button>
                                                </div>
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
                            <div className="icon-footer"><img src={triangle} alt="triangle icon" /></div>
                        </div>
                        <div className="sub-footer-3">
                            <h4 className="text-des">1-6 of 6</h4>
                        </div>
                        <div className="sub-footer-4">
                            <div className="icon-footer"><img src={leftarrow} alt="left arrow icon" /></div>
                            <div className="icon-footer"><img src={rightarrow} alt="right arrow icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Staff;

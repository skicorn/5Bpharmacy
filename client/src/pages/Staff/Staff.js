import React, { useEffect, useState } from "react";
import './Staff.css';
import AddPopup from "./AddPopup";
import EditPopup from "./EditPopup";
import DeletePopup from "./DeletePopup";
import icon_search from '../../assets/glass.svg';
import pen_edit from '../../assets/pen.svg';
import trash from '../../assets/trash.svg';
//'react-bootstrap-table/css/react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useAsyncError } from "react-router-dom";
import axios from 'axios'

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
    },
    {
        id: 7,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 8,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 9,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 10,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 11,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 12,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 13,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 14,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 15,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    },
    {
        id: 16,
        name: "Tony B",
        email: "example@gmail.com",
        phone: "0909954546",
        role: "Dược sĩ",
        present: 0
    }

]

function Staff() {
    const [data,setData]=useState([])
    useEffect(() => {
        setStaff(aray.filter(item => item.present === 0));
        
        axios.get('http://localhost:8081/') 
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
        
            document.title = "Staff Management"
    })
    const [staff, setStaff] = useState([]);
    const [addPopup, setAddPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    

   
    return (
        <React.Fragment>
            <h1>STAFFS</h1>
            <div className="staff-parent">
                <AddPopup trigger={addPopup} setTrigger={setAddPopup} >
                    
                </AddPopup>
                <EditPopup trigger={editPopup} setTrigger={setEditPopup} >
                    
                </EditPopup>
                <DeletePopup trigger={deletePopup} setTrigger={setDeletePopup} >
                    
                </DeletePopup>
                <div className="staff-bg">
                    <div className="search-wrapper">
                        <div className="nav-search">
                            <input className="input-search" placeholder="Enter keywords" />
                            <div className="icon-search">
                                <img src={icon_search} ></img>
                            </div>
                        </div>
                        <div className="staff-button-add"><button onClick={()=>setAddPopup(true)}>Add Employer</button></div>
                    </div>
                    <div className="staff-list">
                        <div className="staff-list-context">
                            <table class="table ">
                                <thead class="table" >
                                    <tr >
                                        <th>
                                            <input className="checkbox-staff" type="checkbox"></input>
                                        </th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map((staff,index)=> {
                                        return <tr key={index}>
                                            <td><div><input className="checkbox-staff" type="checkbox"></input></div></td>
                                            <td>{staff.id}</td>
                                            <td>{staff.name}</td>
                                            <td>{staff.email}</td>
                                            <td>{staff.phone}</td>
                                            <td>{staff.role}</td>
                                            <td><div className="icon-action">
                                                <div onClick={() => setEditPopup(true)}><button><img src={pen_edit}></img></button></div>
                                                <div onClick={() => setDeletePopup(true)}><button><img src={trash}></img></button></div>
                                            </div></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default Staff;
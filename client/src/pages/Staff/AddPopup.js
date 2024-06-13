import React, { useState } from 'react'
import './AddPopup.css';
import upload from '../../assets/upload.svg'
import axios from 'axios';

function AddPopup(props) {
  // const [values,setValues]=useState({
  //   name:'',
  //   id:'',
  //   phone:'',
  //   email:'',
  //   role:''
  // })
  // const handleAdd=(e) =>{
  //   e.preventDefault();
  //   axios.post('http://localhost:5000/staff',values)
  //   .then(res=>console.log(res))
  //   .catch(err=>console.log(err))
  // }
return (props.trigger) ? (
  <div className='add-popup'>
    <div className='add-popup-inner'>
      <div className='header-add-popup'>
        <div className='add-title-popup'>ADD NEW STAFFS</div>
        <div className='icon-close'><button id='close-icon' onClick={() => props.setTrigger(false)}>X</button></div>
      </div>
      <div className='add-staff-content'>
        <div className='add-staff-form'>
          <form className='form-add' /*onSubmit={handleAdd}*/>

            <div className='form-item-add'><label for="input1">Name</label>
              <input type='text' placeholder='david ngo' /*onChange={e => setValues({ ...values, name: e.target.value })}*/></input></div>

            <div className='form-item-add'><label for="input1">Phone</label>
              <input type='text' placeholder='090979770' /*onChange={e => setValues({ ...values, phone: e.target.value })}*/></input></div>

            <div className='form-item-add'><label for="input1">Email</label>
              <input type='text' placeholder='78070870780' /*onChange={e => setValues({ ...values, email: e.target.value })}*/></input></div>

            <div className='form-item-add'><label for="input1">Salary</label>
              <input type='text' placeholder='davidngo@gmail.com' /*onChange={e => setValues({ ...values, salary: e.target.value })}*/></input></div>

            <div className='form-item-add'><label for="input1">Id number</label>
              <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, idnumber: e.target.value })}*/></input></div>
            
            <div className='form-item-add'><label for="input1">Role</label>
              <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, role: e.target.value })}*/></input></div>
            
            <div className='form-item-add'><label for="input1">Adress</label>
              <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, adress: e.target.value })}*/></input></div>
          </form>
        </div>
        <div className='upload-image-add'>
          <div className='upload-item'><img src={upload}></img></div>
          <div className='upload-item'><img src={upload}></img></div>
        </div>
      </div>
      <div className='footer-add-staff'>
        <div className='btn-add'>
          <button className='btn-add-sp' onClick={() => props.setTrigger(false)}>Add</button>
        </div>
      </div>
      {props.children}
    </div>
  </div>
) : "";
}

export default AddPopup

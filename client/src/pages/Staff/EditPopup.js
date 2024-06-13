import React from 'react'
import './EditPopup.css'
import upload from '../../assets/upload.svg'
function EditPopup(props) {
    const { staff } = props;
    return (props.trigger)?(
      <div className='edit-popup'>
      <div className='edit-popup-inner'>
        <div className='header-edit-popup'>
          <div className='edit-title-popup'>EDIT STAFFS</div>
          <div className='icon-close'><button id='close-icon' onClick={() => props.setTrigger(false)}>X</button></div>
        </div>
        <div className='edit-staff-content'>
          <div className='edit-staff-form'>
            <form className='form-edit' /*onSubmit={handleAdd}*/>
  
              <div className='form-item-edit'><label for="input1">Name</label>
                <input type='text' placeholder='david ngo' /*onChange={e => setValues({ ...values, name: e.target.value })}*/></input></div>
  
              <div className='form-item-edit'><label for="input1">Phone</label>
                <input type='text' placeholder='090979770' /*onChange={e => setValues({ ...values, phone: e.target.value })}*/></input></div>
  
              <div className='form-item-edit'><label for="input1">Email</label>
                <input type='text' placeholder='78070870780' /*onChange={e => setValues({ ...values, email: e.target.value })}*/></input></div>
  
              <div className='form-item-edit'><label for="input1">Salary</label>
                <input type='text' placeholder='davidngo@gmail.com' /*onChange={e => setValues({ ...values, salary: e.target.value })}*/></input></div>
  
              <div className='form-item-edit'><label for="input1">Id number</label>
                <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, idnumber: e.target.value })}*/></input></div>
              
              <div className='form-item-edit'><label for="input1">Role</label>
                <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, role: e.target.value })}*/></input></div>
              
              <div className='form-item-edit'><label for="input1">Adress</label>
                <input type='text' placeholder='2000$' /*onChange={e => setValues({ ...values, adress: e.target.value })}*/></input></div>
            </form>
          </div>
          <div className='upload-image-edit'>
            <div className='upload-item'><img src={upload}></img></div>
            
          </div>
        </div>
        <div className='footer-edit-staff'>
          <div className='btn-edit'>
            <button className='btn-edit-sp' onClick={() => props.setTrigger(false)}>Delete</button>
            <button className='btn-edit-sp' onClick={() => props.setTrigger(false)}>Save</button>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
  }
  

export default EditPopup

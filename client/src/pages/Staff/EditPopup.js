import React from 'react'
import './EditPopup.css'
import upload from '../../assets/upload.svg'
function EditPopup(props) {
   
    return (props.trigger)?(
        <div className='edit-popup'>
        <div className='edit-popup-inner'>
          {/* // <button className='btn-add-sp' onClick={() => props.setTrigger(false)}>Them</button> */}
          <div className='icon-close'><button id='close-icon' onClick={() => props.setTrigger(false)}>X</button></div>
          <div className='edit-title-popup'>EDIT STAFFS PROFILE</div>
          <div className='edit-staff-content'>
            <div className='edit-staff-form'>
              <form className='form-edit'>
  
                <div className='form-item-edit'><label for="input1">Name</label>
                  <input type='text' placeholder='david ngo'></input></div>
  
                <div className='form-item-edit'><label for="input1">ID num</label>
                  <input type='text' placeholder='090979770'></input></div>
  
                <div className='form-item-edit'><label for="input1">Phone</label>
                  <input type='text' placeholder='78070870780'></input></div>
  
                <div className='form-item-edit'><label for="input1">Email</label>
                  <input type='text' placeholder='davidngo@gmail.com'></input></div>
  
                <div className='form-item-edit'><label for="input1">Salary</label>
                  <input type='text' placeholder='2000$'></input></div>

              </form>
            </div>
            <div className='upload-image-edit-staff'>
              <div className='form-item-image'> Image</div>
              <div className='upload-item'><img src={upload}></img></div>
            </div>
          </div>
          <div className='footer-edit-staff'>
            <div className='btn-edit'>
              <button className='btn-del' onClick={() => props.setTrigger(false)}>DELETE</button>
              <button className='btn-edit' onClick={() => props.setTrigger(false)}>SAVE</button>
              </div>
            </div>
          {props.children}
        </div>
      </div>
      ):"";
    }

export default EditPopup
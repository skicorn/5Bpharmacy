import React, { useState } from 'react'
import './AddPopup.css';
import upload from '../../assets/upload.svg'
import camera from '../../assets/photo-camera.svg'
import down_arrow from '../../assets/down-arrow.png'
import up_arrow from '../../assets/up-arrow.png'
import axios from 'axios';

function AddPopup(props) {

  const [show, setShow] = useState(false);




  return (props.trigger) ? (
    <div className='add-popup'>
      <div className='add-popup-inner'>
        <div className='add-header'><h2 className='add-popup-title'>Thêm mới nhân viên</h2></div>
        <div className='header-add-tab'>
          <button className='title-add-tab'>Thông tin</button>
          <a></a>
        </div>
        <div className='add-popup-tab'>
          <div className='add-wrapper-left'>
            <div className='img-border'><img style={{ height: "20px", width: "20px" }} src={camera}></img></div>
            <div><button className='title-add-inside-tab'>Chọn ảnh</button></div>
          </div>
          <div className='add-wrapper-right'>
            <div className='add-wrapper-right-top'>
              <div className='add-header'><h2 className='add-popup-title'>Thông tin khởi tạo </h2></div>

              <div className='add-staff-form'>
                <form className='form-add-staff-left' >
                  <div className='form-item-add'><label >Mã nhân viên</label>
                    <input className='border-for-input-add' type='text' placeholder='Mã nhân viên tự động'></input></div>

                  <div className='form-item-add'><label >Số điện thoại</label>
                    <input className='border-for-input-add' type='text' placeholder=''></input></div>
                </form>
                <form className='form-add-staff-right' >
                  <div className='form-item-add'><label >Tên nhân viên</label>
                    <input className='border-for-input-add' type='text' placeholder=''></input></div>
                </form>
              </div>

            </div>
            <div className='add-wrapper-right-bottom'>
              <div className='button-hide-show'>
                <button className='button-click-hide-show' onClick={() => setShow(!show)}>{show === true ?
                  (<span style={{ color: "#12B76A" }}>Ẩn thông tin <img className='img-hide' src={up_arrow} alt="icon" /></span>)
                  :
                  (<span style={{ color: "#12B76A" }}>Thêm thông tin <img className='img-hide' src={down_arrow} alt="icon" /></span>)}
                </button></div>



              {show &&
                <div className="add-wrapper-right-bottom-hide"  >
                  <div className='div-add-job'>  <div className='add-header'><h2 className='add-popup-title'>Thông tin khởi tạo </h2></div>

                    <div className='add-staff-form'>
                      <form className='form-add-staff-left' >
                        <div className='form-item-add'><label >Mã nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder='Mã nhân viên tự động'></input></div>

                        <div className='form-item-add'><label >Số điện thoại</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                      <form className='form-add-staff-right' >
                        <div className='form-item-add'><label >Tên nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                    </div></div>
                  <div className='div-add-information'><div className='add-header'><h2 className='add-popup-title'>Thông tin khởi tạo </h2></div>

                    <div className='add-staff-form'>
                      <form className='form-add-staff-left' >
                        <div className='form-item-add'><label >Mã nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder='Mã nhân viên tự động'></input></div>

                        <div className='form-item-add'><label >Số điện thoại</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                      <form className='form-add-staff-right' >
                        <div className='form-item-add'><label >Tên nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                    </div>
                  </div>
                  <div className='div-add-contact'><div className='add-header'><h2 className='add-popup-title'>Thông tin khởi tạo </h2></div>

                    <div className='add-staff-form'>
                      <form className='form-add-staff-left' >
                        <div className='form-item-add'><label >Mã nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder='Mã nhân viên tự động'></input></div>

                        <div className='form-item-add'><label >Số điện thoại</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                      <form className='form-add-staff-right' >
                        <div className='form-item-add'><label >Tên nhân viên</label>
                          <input className='border-for-input-add' type='text' placeholder=''></input></div>
                      </form>
                    </div>
                  </div>
                </div>}
                <div className='btn-add-footer'>
              <div className='btn-add-1'>
                <button type="submit" className='btn-add-sp-1' onClick={() => props.setTrigger(false)}>Lưu</button>
              </div>
              <div className='btn-add-2'>
                <button type="submit" className='btn-add-sp-2' onClick={() => props.setTrigger(false)}>Bỏ qua</button>
              </div>
            </div>  
            </div>

           

          </div>
          
        </div>
      </div>
      {props.children}
    </div>
  ) : "";
}

export default AddPopup
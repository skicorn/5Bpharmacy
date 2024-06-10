import React from 'react'
import './DeletePopup.css'


function DeletePopup(props) {
    return (props.trigger)?(
        <div className='delete-popup'>
            <div className='delete-popup-inner'>
                <button className='delete-button-popup' onClick={()=>props.setTrigger(false)}>Xoa</button>
                {props.children}
            </div>
          </div>
      ):"";
    }
    

export default DeletePopup

import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=' card shadow p-5 mb-5'>
        <div className='d-flex justify-content-between'>
          <h2>Profile</h2>
          <button className='btn btn-outline-info'onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
        </div>
        <Collapse in={open}>
        <div className='row justify-content-center mt-4'>
          <label htmlFor="profile">
            <input type="file" id="profile"  style={{display:"none"}}/>
            <img 
            width={'200px'}
            height={'200px'} className=''
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZUGcbODvM6HfUEALi00_x4sIvEU73Vzv-bP6XxuwiMS_m_h_T89i8TvGWZafTzpy8mo&usqp=CAU" alt="" />
          </label>
          <div className='mb-4'>
            <input type="text" name='' id=''placeholder='Github Link' className='form-control' />
          </div>
          <div>
            <input type="text" placeholder='Linkedin Link' className='form-control' />
            <div className='mt-3 mb-3'>
              <button className='btn btn-success rounded w-100'>Update</button>
            </div>
          </div>
        </div>
        </Collapse>
      </div>
    </>
  )
}

export default Profile
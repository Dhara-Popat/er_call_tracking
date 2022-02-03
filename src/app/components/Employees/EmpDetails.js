import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import AddFeedback from './AddFeedback';
import '../../../_assets/css/emp.css'

function EmpDetails() {

  // For Model-box 
  const [isOpen, setIsOpen] = useState(false);

  // To get data from storage
  let id = localStorage.getItem('Id')
  let first_name = localStorage.getItem('First Name')
  let last_name = localStorage.getItem('last Name')
  let email = localStorage.getItem('Email')
  let title = localStorage.getItem('Title')
  let first_number = localStorage.getItem('First Number')
  let job_title = localStorage.getItem('Job title')
  let department = localStorage.getItem('DepartMent')
  let job_des = localStorage.getItem('Job Description')

  // To open the model box
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  // To store data in local storage
  const setData = (id, first_name, last_name, email) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('First Name', first_name)
    localStorage.setItem('Last Name', last_name)
    localStorage.setItem('Email', email)
  }

  return (
    <div className='details'>
      <div className='emp'></div>
      <div className='emp-content'>
        <div className='emp-details'>
          <div className='emp-user-details'>
            <i className='emp-user-icon'><FiIcons.FiUser /></i>
            <div className='user-details'>
              <div className='emp-info-btn'>
                <div className='emp-full-name'>
                  <div className='emp-user-name'>
                    <span className='h5'>{first_name}</span>
                    <span className='h5'>{last_name}</span>
                    <span className='h5'>(0{id})</span>
                  </div>
                  <div className='emp-user-info'>
                    <div className='i-flex'>
                      <i><GoIcons.GoMail /></i>
                      <span>{email}</span>
                    </div>
                    <div className='i-flex'>
                      <i><RiIcons.RiUser3Line /></i>
                      <span>{title}</span>
                    </div>
                    <div className='i-flex'>
                      <i><IoIcons.IoIosCall /></i>
                      <span>{first_number}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to='/employees/update'>
                    <button
                      className='btn btn-primary'
                      onClick={() => setData(id, first_name, last_name, email)}
                    >
                      Edit Record
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                {job_des}
              </div>
            </div>
          </div>
          <div className='border-top'>
            <div className='d-flex justify-content-between mt-4'>
              <div>
                <div><strong className='text-dark'>Job Title</strong></div>
                <span>{job_title}</span>
              </div>
              <div>
                <div><strong className='text-dark'>Department</strong></div>
                <span>{department}</span>
              </div>
              <div>
                <div><strong className='text-dark'>Created by</strong></div>
                <div className='emp-user-name'>
                  <span>{first_name}</span>
                  <span>{last_name}</span>
                </div>
              </div>
              <div>
                <div><strong className='text-dark'>Updated by</strong></div>
                <div className='emp-user-name'>
                  <span>{first_name}</span>
                  <span>{last_name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='emp-feedback'>
          <div className='d-flex justify-content-between align-items-center mb-4'>
            <div><strong>ER call tracking Feedback</strong></div>
            <button className='btn btn-primary' onClick={togglePopup}>Add Feedback</button>
            {isOpen && <AddFeedback handleClose={togglePopup} />}
          </div>
          <div className='border-top'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';

function Navbar() {
    return (
        <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
            <a href='/er-call-tracking' className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                <span className='fs-5 d-none d-sm-inline'>ER Call Tracking</span>
            </a>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
            <li className='nav-item'>
                    <Link to='/er-call-tracking' className='nav-link align-middle px-0'>
                        <i className='fs-4 bi-house'><BsIcons.BsPeople/></i> <span className='ms-1 d-none d-sm-inline'>Dashboard</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/er-call-tracking/employees' className='nav-link align-middle px-0'>
                        <i className='fs-4 bi-house'><BsIcons.BsPeople/></i> <span className='ms-1 d-none d-sm-inline'>Employees</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/er-call-tracking/users' className='nav-link align-middle px-0'>
                        <i className='fs-4 bi-house'><BsIcons.BsFillPeopleFill/></i> <span className='ms-1 d-none d-sm-inline'>Users</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/er-call-tracking/reports' className='nav-link align-middle px-0'>
                        <i className='fs-4 bi-house'><HiIcons.HiDocumentReport /></i> <span className='ms-1 d-none d-sm-inline'>Reports</span>
                    </Link>
                </li>
            </ul>
            <hr />
        </div>

    )
}

export default Navbar;

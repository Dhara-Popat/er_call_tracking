import React from 'react';

function UserDetails() {

    let id = localStorage.getItem('ID')
    let first_Name = localStorage.getItem('First Name')
    let last_name = localStorage.getItem('Last Name')
    let email = localStorage.getItem('Email')

    return (
        <div className='container'>
            <div className='table-responsive'>
                <table className='table table-bordered my-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{first_Name}</td>
                            <td>{last_name}</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDetails;

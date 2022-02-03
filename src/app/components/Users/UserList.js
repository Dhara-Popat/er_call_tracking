import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../../index.scss';

function UserList() {

  let history = useHistory();
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    axios.get('https://61ef8dfe732d93001778e454.mockapi.io/Users')
      .then((response) => {
        setAPIData(response.data)
      })
  }, [])

  // To store data in local storage
  const setData = (data) => {
    let { id, firstName, lastName, email } = data
    localStorage.setItem('ID', id)
    localStorage.setItem('First Name', firstName)
    localStorage.setItem('Last Name', lastName)
    localStorage.setItem('Email', email)
  }

  // Delete the data
  const onDelete = (id) => {
    axios.delete(`https://61ef8dfe732d93001778e454.mockapi.io/Users/${id}`)
      .then(() => {
        getData()
      })
  }

  // After deleting get the data
  const getData = () => {
    axios.get('https://61ef8dfe732d93001778e454.mockapi.io/Users')
      .then((getData) => {
        setAPIData(getData.data)
      })
  }

  // View the data
  const onView = (id, firstName, lastName, email) => {
    axios.get(`https://61ef8dfe732d93001778e454.mockapi.io/Users`)
      .then(() => {
        console.log(id, firstName, lastName, email)
        localStorage.setItem('ID', id)
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('Last Name', lastName)
        localStorage.setItem('Email', email)
        history.push('/users/details')
      })
  }

  return (
    <>
      <div className='margin'>
        <h2 className='text-center py-3'>Users List</h2>
        <Link to='/users/create'>
          <button
            className='btn btn-primary'
          >
            Add User
          </button>
        </Link>

        <div className='table-responsive my-3'>
          <table className='table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {APIData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td className='align-btn'>
                      <Link to='/users/update'>
                        <button
                          className='btn btn-primary'
                          onClick={() => setData(data)}
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        className='btn btn-danger'
                        onClick={() => onDelete(data.id)}
                      >
                        Delete
                      </button>
                      <button
                        className='btn btn-primary'
                        onClick={() => onView(data.id, data.firstName, data.lastName, data.email)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UserList;

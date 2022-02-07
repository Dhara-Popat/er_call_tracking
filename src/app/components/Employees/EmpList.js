import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "../../../index.scss";
import { fetchEmps, deleteEmp } from '../../../_redux/Employees/empActions';

function EmpList() {

  let history = useHistory();
  const [APIData, setAPIData] = useState([])

  const dispatch = useDispatch()

  const empStatus = useSelector(state => state.emps.status)

  useEffect(() => {
    if (empStatus === 'idle') {
      dispatch(fetchEmps())
        .unwrap()
        .then((result) => {
          setAPIData(result)
        })
        .catch((error) => {
          setAPIData(error)
        })
    }
  }, [empStatus, dispatch])

  // Delete the data
  const onDelete = (id) => {
    dispatch(deleteEmp(id))
      .unwrap()
      .then(() => {
        getData();
      })
  }

  // After deleting get the data
  const getData = () => {
    dispatch(fetchEmps())
      .unwrap()
      .then((result) => {
        setAPIData(result)
      })
      .catch((error) => {
        setAPIData(error)
      })
  }

  // View the data
  const onView = (data) => {
    let { id, firstName, lastName, email, title, firstNo, jobTitle, department, jobDes } = data
    dispatch(fetchEmps())
      .unwrap()
      .then(() => {
        console.log(data)
        localStorage.setItem('Id', id)
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('last Name', lastName)
        localStorage.setItem('Email', email)
        localStorage.setItem('Title', title)
        localStorage.setItem('First Number', firstNo)
        localStorage.setItem('Job title', jobTitle)
        localStorage.setItem('DepartMent', department)
        localStorage.setItem('Job Description', jobDes)
        history.push('/employees/details')
      })
  }

  return (
    <>
      <div className='margin'>
        <h2 className='text-center py-3'>Employees List</h2>
        <Link to='/employees/create'>
          <button
            className='btn btn-primary'
          >
            Add Employee
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
                      <Link to='/employees/update'>
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
                        onClick={() =>
                          onView(data)}
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

export default EmpList;

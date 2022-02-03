import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import * as BiIcons from 'react-icons/bi';
import '../../../index.scss';

function UpdateEmp() {
    let history = useHistory();
    let first_Name = localStorage.getItem('First Name')
    let last_name = localStorage.getItem('Last Name')
    let email = localStorage.getItem('Email')
    let firstNo = localStorage.getItem('First Number')
    let title = localStorage.getItem('Title')
    let jobTitle = localStorage.getItem('Job title')
    let department = localStorage.getItem('DepartMent')
    let job_des = localStorage.getItem('Job Description')
    const [id, setId] = useState(null)

    useEffect(() => {
        setId(localStorage.getItem('ID'))
    }, []);

    const initialValues = {
        firstName: first_Name,
        lastName: last_name,
        email: email,
        title: title,
        firstNo: firstNo,
        jobTitle: jobTitle,
        department: department,
        job_des: job_des
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required!'),
        title: Yup.string().required('Required!'),
        firstNo: Yup.string().required('Required!'),
        jobTitle: Yup.string().required('Required!'),
        department: Yup.string().required('Required!')
    })


    const updateAPIData = values => {
        axios.put(`https://61ef8dfe732d93001778e454.mockapi.io/emp/${id}`, values)
            .then(() => {
                history.push('/employees')
                // history.goBack()
            })
    }

    // For back button
    const back = () => {
        history.goBack()
    }

    return (
        <div className='container'>
            <button className='btn btn-primary my-3' onClick={back}><i className='mx-2'><BiIcons.BiArrowBack /></i>Back</button>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={updateAPIData}
            >
                <Form className='py-2'>
                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='firstName' className='form-label'>First Name</label>
                        <Field
                            type='text'
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='firstName' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='lastName' className='form-label'>Last Name</label>
                        <Field
                            type='text'
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='lastName' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='email' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='title' className='form-label'>Title</label>
                        <Field
                            type='text'
                            id='title'
                            name='title'
                            placeholder='Project Manager, Developer, etc.'
                            className="form-control form-control-lg"
                        />
                        <ErrorMessage name='title' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='firstNo' className='form-label'>Number</label>
                        <Field
                            type='text'
                            id='firstNo'
                            name='firstNo'
                            placeholder='Mobile Number'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='firstNo' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='jobTitle' className='form-label'>Job Title</label>
                        <Field
                            type='text'
                            id='jobTitle'
                            name='jobTitle'
                            placeholder='Developer, etc.'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='jobTitle' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='department' className='form-label'>Department</label>
                        <Field
                            type='text'
                            id='department'
                            name='department'
                            placeholder='Development, etc.'
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='department' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field-height'>
                        <label htmlFor='job_des' className='form-label'>Job Description</label>
                        <Field
                            as='textarea'
                            type='text'
                            id='job_des'
                            name='job_des'
                            placeholder='write here...'
                            className="form-control form-control-lg"
                        />
                        <ErrorMessage name='job_des' component={TextError} />
                    </div>


                    <button type='submit' className='btn btn-primary'>Update</button>

                </Form>
            </Formik>
        </div>
    )
}

export default UpdateEmp;

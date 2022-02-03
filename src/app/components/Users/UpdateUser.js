import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import '../../../index.scss';

function UpdateUser() {

    let history = useHistory();
    let first_Name = localStorage.getItem('First Name')
    let last_name = localStorage.getItem('Last Name')
    let email = localStorage.getItem('Email')
    const [id, setId] = useState(null)

    useEffect(() => {
        setId(localStorage.getItem('ID'))
    }, []);

    const initialValues = {
        firstName: first_Name,
        lastName: last_name,
        email: email
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required!')
    })


    const updateAPIData = values => {
        axios.put(`https://61ef8dfe732d93001778e454.mockapi.io/Users/${id}`, values)
            .then(() => {
                history.push('/users')
            })
    }

    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={updateAPIData}
            >
                <Form className='py-5'>
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

                    <button type='submit' className='btn btn-primary'>Update</button>

                </Form>
            </Formik>
        </div>
    )
}

export default UpdateUser;

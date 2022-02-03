import React from 'react';
import 'toastify-js/src/toastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../index.scss';
import TextError from './TextError';
import { Link } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('form data', values);
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Please Enter your email address'),
    password: Yup.string()
        .required('Password is required')
})

export function Login() {

    return (
        <div className='wrapper'>
            <div className='logo'>
                <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png' alt='' />
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className='p-3 mt-3 d-flex flex-column justify-content-center align-items-center mb-3'>
                    <div className='form-outline mb-2 form-field'>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            className='form-control form-control-lg'
                            placeholder='Email address'
                        />
                        <ErrorMessage name='email' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field'>
                        <Field
                            type='password'
                            id='password'
                            name='password'
                            className='form-control form-control-lg'
                            placeholder='Password'
                        />
                        <ErrorMessage name='password' component={TextError} />
                    </div>

                    <div className='login-btn'>
                        <button type='submit' className='btn btn-info btn-lg btn-block login-btn'>Login</button>
                    </div>
                </Form>

            </Formik>
            <div className='text-center fs-6'>
                <Link to='/reset'>Forget password?</Link>
            </div>
        </div>
    )
}

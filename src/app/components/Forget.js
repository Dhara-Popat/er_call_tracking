import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../index.scss';
import TextError from './TextError';
import { Link } from 'react-router-dom';

const initialValues = {
    email: ''
}

const onSubmit = values => {
    console.log('form data', values);
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Please Enter your email address')
})

export function Forget() {
    return (
        <div className='wrapper'>
            <div className='logo'>
                <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png' alt='' />
            </div>
            <div className='p-3 reset-from-text'>
                <h4>Forgotten Password?</h4>
                <div>Enter your email to reset your password</div>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className='p-3 d-flex flex-column justify-content-center align-items-center'>
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

                    <button type='submit' className='btn btn-info btn-lg btn-block login-btn fs-6'>Send Password Reset Link</button>
                </Form>

            </Formik>
            <div className='cancel-form-btn'>
                <Link to='/'>
                    <button type='button' className='btn btn-info btn-lg btn-block m-3 fs-6'>Cancel</button>
                </Link>
            </div>
        </div>
    )
}

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../index.scss';
import TextError from './TextError';

const initialValues = {
    Password: '',
    confirmPassword: ''
}

const onSubmit = values => {
    console.log('form data', values);
}

const validationSchema = Yup.object({
    Password: Yup.string()
        .min(6)
        .required('Please Enter new password'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Both password must match')
})


function Reset() {
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
                            type='password'
                            id='Password'
                            name='Password'
                            className='form-control form-control-lg'
                            placeholder='Password'
                        />
                        <ErrorMessage name='Password' component={TextError} />
                    </div>

                    <div className='form-outline mb-2 form-field'>
                        <Field
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            className='form-control form-control-lg'
                            placeholder='Confirm Password'
                        />
                        <ErrorMessage name='confirmPassword' component={TextError} />
                    </div>

                    <button type='submit' className='btn btn-info btn-lg btn-block login-btn'>Reset Password</button>

                </Form>

            </Formik>
        </div>
    )
}

export default Reset;

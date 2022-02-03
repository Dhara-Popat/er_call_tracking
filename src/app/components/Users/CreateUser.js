import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import TextError from '../TextError';
import '../../../index.scss';

function CreateUser1() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: ''
    }

    let history = useHistory();

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required!'),
        lastName: Yup.string().required('Required!'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required!')
    })

    const onSubmit = values => {
        axios.post(`https://61ef8dfe732d93001778e454.mockapi.io/Users`, values)
            .then(() => {
                history.push('/users');
            })
    }

    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
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
                            className="form-control form-control-lg"
                        />
                        <ErrorMessage name='email' component={TextError} />
                    </div>

                    <button type='submit' className='btn btn-primary'>Add</button>

                </Form>
            </Formik>
        </div>
    )
}

export default CreateUser1;

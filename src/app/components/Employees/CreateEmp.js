import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import TextError from '../TextError';
import * as BiIcons from 'react-icons/bi';
import '../../../index.scss';
import { addEmp } from '../../../_redux/Employees/empActions';
import { useDispatch } from 'react-redux';

function CreateEmp() {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        firstNo: '',
        title: '',
        firstNumber: '',
        jobTitle: '',
        department: '',
        job_des: ''
    }

    let history = useHistory();

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

    const dispatch = useDispatch()
    const onSubmit = async (values) => {
            try {
                await dispatch(addEmp( values )).unwrap()
                history.push('/er-call-tracking');
                console.log(values)
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } 
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
                onSubmit={onSubmit}
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
                            placeholder='Project Manager, etc.'
                            className='form-control form-control-lg'
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
                            className="form-control form-control-lg"
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
                            className="form-control form-control-lg"
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
                            className='form-control form-control-lg'
                        />
                        <ErrorMessage name='job_des' component={TextError} />
                    </div>

                    <button type='submit' className='btn btn-primary px-4'>Add Employee</button>

                </Form>
            </Formik>
        </div>
    )
}

export default CreateEmp;

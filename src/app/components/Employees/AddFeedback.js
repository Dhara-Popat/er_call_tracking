import React from 'react';
import * as GrIcons from 'react-icons/gr';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import TextError from '../TextError';
import '../../../index.scss';

function AddFeedback(props) {

    let handleClose = props.handleClose;
    const current = new Date();
    const month = current.toLocaleString('default', { month: 'long' })
    // const time = `${current.getHours()}:${current.getMinutes()}`
    const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
    // let dateOptions = { month: 'long', year: 'numeric', day: 'numeric' }
    let timeOptions = { hour: '2-digit', minute: '2-digit' }
    let fullDate = `${date}, ${current.toLocaleString('en-us', timeOptions)}`.toString()

    const initialValues = {
        asRisk: '',
        feedback: ''
    }

    let history = useHistory();

    const onSubmit = values => {
        axios.post(`https://61ef8dfe732d93001778e454.mockapi.io/emp`, values)
        console.log(values)
    }

    const validationSchema = Yup.object({
        feedback: Yup.string().required('Required!'),
    })

    return (
        <div className='popup'>
            <div className='popup-content'>
                <div className='d-flex justify-content-between mb-3'>
                    <div className='d-flex align-items-center'><strong>Add Feedback</strong></div>
                    <strong><i onClick={handleClose} style={{fontSize: '20px'}}><GrIcons.GrFormClose /></i></strong>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className='feedback-form'>

                        <div className='border-top'>
                            <div className='mt-2'>
                                <label className='form-label'>Date</label>
                                <div>{fullDate}</div>
                            </div>
                        </div>

                        <div className='form-outline mb-2'>
                            <label htmlFor='asRisk' className='form-label'>Attrition Risk</label>
                            <div role='group'>
                                <label className='mx-2'>
                                    <Field type='radio' name='asRisk' value='Yes' className='mx-1' />
                                    <span>Yes</span>
                                </label>
                                <label>
                                    <Field type='radio' name='asRisk' value='No' className='mx-1' />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className='form-outline mb-2 form-field-height'>
                            <label htmlFor='feedback' className='form-label'>Feedback</label>
                            <Field
                                as='textarea'
                                type="text"
                                id='feedback'
                                name='feedback'
                                placeholder='type something here...'
                                className="form-control form-control-lg"
                            />
                            <ErrorMessage name='feedback' component={TextError} />
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddFeedback;

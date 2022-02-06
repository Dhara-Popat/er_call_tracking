import { createAction } from '@reduxjs/toolkit'

export const fetchEmpList = createAction('FETCH_EMPLOYEES')

export const fetchEmps = () => {
    return async(dispatch) => {
        const res= await fetch('https://61ef8dfe732d93001778e454.mockapi.io/emp')
        const result = await res.json()
        dispatch({type: 'FETCH_EMPLOYEES', payload: result})
    }
}
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'
import 'regenerator-runtime/runtime'

export const fetchEmps = createAsyncThunk(
    'emps',
    async () => {
        const result = await axios.get('https://61ef8dfe732d93001778e454.mockapi.io/emp')
        // console.log(result.data)
        return result.data
    }
)

export const addEmp = createAsyncThunk(
    'emps/addNewemp',
    async (values) => {
        const response = await axios.post(`https://61ef8dfe732d93001778e454.mockapi.io/emp`, values)
        return response.data
    }
)

export const updateEmp = createAsyncThunk(
    'emps/update',
    async (values) => {
        axios.put(`https://61ef8dfe732d93001778e454.mockapi.io/emp/${values.id}`, values)
        return values
    }
)

export const deleteEmp = createAsyncThunk(
    'emps/delete',
    async (id) => {
        axios.delete(`https://61ef8dfe732d93001778e454.mockapi.io/emp/${id}`)
        // console.log(id)
        return id
    }
)

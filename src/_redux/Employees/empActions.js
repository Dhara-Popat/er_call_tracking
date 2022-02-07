import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEmps = createAsyncThunk(
    'emps',
    async () => {
        const result = await axios.get('https://61ef8dfe732d93001778e454.mockapi.io/emp')
        console.log(result.data)
        return result.data
    }
)

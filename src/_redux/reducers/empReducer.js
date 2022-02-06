import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import 'regenerator-runtime/runtime'
import axios from 'axios';

const initialState = {
    emps: [],
    status: 'idle',
    error: null
}

export const fetchEmps = createAsyncThunk(
    'emps',
    async () => {
        const result = await axios.get('https://61ef8dfe732d93001778e454.mockapi.io/emp')
        console.log(result.data)
        return result.data
    }
)

export const addEmps = createAsyncThunk(
    'emps/addNewemp',
    async (values) => {
        const response = await axios.post(`https://61ef8dfe732d93001778e454.mockapi.io/emp`, values)
        return response.data
    }
)

export const empsSlice = createSlice({
    name: 'emps',
    initialState: initialState,
    reducers: {
        empAdded: {
            reducer(state, action) {
                state.emps.push(action.payload)
            }
        },
        reactionAdded(state, action) {
            const { empId, reaction } = action.payload
            const existingEmp = state.emps.find(emp => emp.id === empId)
            if (existingEmp) {
                existingEmp.reaction[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchEmps.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.emps = state.emps.concat(action.payload)
        })
        builder.addCase(addEmps.fulfilled, (state, action) => {
            state.emps.push(action.payload)
        })
    }
})

export const { empAdded, reactionAdded } = empsSlice.actions
export default empsSlice.reducer

export const selectAllEmps = state => state.emps.emps

export const selectPostById = (state, empId) =>
    state.emps.find(emp => emp.id === empId)
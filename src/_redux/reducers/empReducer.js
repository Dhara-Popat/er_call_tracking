import { createSlice } from '@reduxjs/toolkit'
import { fetchEmps, addEmp, updateEmp, deleteEmp } from '../Employees/empActions';

const initialState = {
    emps: [],
    status: 'idle',
    error: null
}

export const empsSlice = createSlice({
    name: 'emps',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchEmps.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.emps = state.emps.concat(action.payload)
        })
        builder.addCase(addEmp.fulfilled, (state, action) => {
            state.emps.push(action.payload)
        })
        builder.addCase(updateEmp.fulfilled, (state, action) => {
            state.emps = state.emps.concat(action.payload)
        })
        builder.addCase(deleteEmp.fulfilled, (state, action) => {
            state.emps = state.emps.splice(action.payload)
        })
    }
})

export default empsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import 'regenerator-runtime/runtime'

const initialState = {
    emps: [],
    status: 'idle',
    error: null
}

export const fetchEmps = createAsyncThunk(
    'emps',
    async () => {
        const res = await fetch('https://61ef8dfe732d93001778e454.mockapi.io/emp')
        const result = await res.json()
        return result
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
        builder
            .addCase(fetchEmps.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchEmps.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.emps = state.emps.concat(action.payload)
            })
            .addCase(fetchEmps.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { empAdded, reactionAdded } = empsSlice.actions
export const selectAllEmps = state => state.emps.emps

export const selectPostById = (state, empId) =>
    state.emps.find(emp => emp.id === empId)
import { createSlice } from '@reduxjs/toolkit'

const errorSlice = createSlice({
	name: 'error',
	initialState: null,
	reducers: {
		set: (state, action) => (state = action.payload)
	}
})

export const errorActions = errorSlice.actions
export const errorReducer = errorSlice.reducer

export default errorSlice

import { createSlice } from '@reduxjs/toolkit'

const error = createSlice({
	name: 'error',
	initialState: null,
	reducers: {
		set: (state, action) => (state = action.payload)
	}
})

export default error

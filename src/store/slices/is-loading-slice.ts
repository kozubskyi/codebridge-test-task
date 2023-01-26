import { createSlice } from '@reduxjs/toolkit'

const isLoading = createSlice({
	name: 'isLoading',
	initialState: true,
	reducers: {
		set: (state, action) => (state = action.payload)
	}
})

export default isLoading

import { createSlice } from '@reduxjs/toolkit'

const isLoading = createSlice({
	name: 'isLoading',
	initialState: true,
	reducers: {
		loading: (state, action) => action.payload
	}
})

export const { loading } = isLoading.actions

export default isLoading.reducer

import { createSlice } from '@reduxjs/toolkit'

const isLoadingSlice = createSlice({
	name: 'isLoading',
	initialState: true,
	reducers: {
		set: (state, action) => (state = action.payload)
	}
})

export const isLoadingActions = isLoadingSlice.actions
export const isLoadingReducer = isLoadingSlice.reducer

export default isLoadingSlice

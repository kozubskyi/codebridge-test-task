import { createSlice } from '@reduxjs/toolkit'

const isLoadingSlice = createSlice({
	name: 'isLoading',
	initialState: false,
	reducers: {
		fetchRequest: state => (state = true),
		fetchFinal: state => (state = false)
	}
})

export const isLoadingActions = isLoadingSlice.actions
export const isLoadingReducer = isLoadingSlice.reducer

export default isLoadingSlice

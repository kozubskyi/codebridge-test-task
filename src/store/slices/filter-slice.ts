import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		typing: (state, action) => action.payload
	}
})

export const filterActions = filterSlice.actions
export const filterReducer = filterSlice.reducer

export default filterSlice

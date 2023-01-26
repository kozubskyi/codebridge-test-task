import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		typing: (state, action) => action.payload
	}
})

export const { typing } = filterSlice.actions

export default filterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		change: (state, action) => action.payload
	}
})

export default filterSlice

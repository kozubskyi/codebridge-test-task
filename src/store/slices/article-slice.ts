import { createSlice } from '@reduxjs/toolkit'

const articleSlice = createSlice({
	name: 'article',
	initialState: null,
	reducers: {
		set: (state, action) => (state = action.payload)
	}
})

export const articleActions = articleSlice.actions
export const articleReducer = articleSlice.reducer

export default articleSlice

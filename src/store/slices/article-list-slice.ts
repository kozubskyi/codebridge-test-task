import { createSlice } from '@reduxjs/toolkit'

const articleListSlice = createSlice({
	name: 'articleList',
	initialState: [],
	reducers: {
		set: (state, action) => (state = action.payload),
		filter: (state, action) => {
			return state.filter(({ title }: { title: string }) => title.toLowerCase().includes(action.payload.toLowerCase()))
		}
	}
})

export const articleListActions = articleListSlice.actions
export const articleListReducer = articleListSlice.reducer

export default articleListSlice

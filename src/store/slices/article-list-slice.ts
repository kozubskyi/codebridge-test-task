import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IArticle from '../../models/IArticle'

const initialState: IArticle[] = []

const articleListSlice = createSlice({
	name: 'articleList',
	initialState,
	reducers: {
		fetchSuccess: (state, action: PayloadAction<IArticle[]>) => (state = action.payload),
		clear: state => (state = initialState)
	}
})

export const articleListActions = articleListSlice.actions
export const articleListReducer = articleListSlice.reducer

export default articleListSlice

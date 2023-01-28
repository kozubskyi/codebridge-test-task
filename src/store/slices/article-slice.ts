import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IArticle from '../../models/IArticle'

const initialState: IArticle = {} as IArticle

const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		fetchSuccess: (state, action: PayloadAction<IArticle>) => (state = action.payload),
		clear: state => (state = initialState)
	}
})

export const articleActions = articleSlice.actions
export const articleReducer = articleSlice.reducer

export default articleSlice

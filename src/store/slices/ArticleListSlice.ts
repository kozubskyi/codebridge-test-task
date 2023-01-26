import { createSlice } from '@reduxjs/toolkit'

const ArticleListSlice = createSlice({
	name: 'articleList',
	initialState: [],
	reducers: {
		getArticleList: (state, action) => action.payload,
		filterArticleList: (state, action) =>
			state.filter(({ title }: { title: string }) => title.toLowerCase().includes(action.payload.toLowerCase()))
	}
})

export const { getArticleList, filterArticleList } = ArticleListSlice.actions

export default ArticleListSlice.reducer

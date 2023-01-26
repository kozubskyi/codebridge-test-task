import { createSlice } from '@reduxjs/toolkit'

const ArticleListSlice = createSlice({
	name: 'articleList',
	initialState: [],
	reducers: {
		setArticles: (state, action) => (state = action.payload),
		filterArticles: (state, action) => {
			return state.filter(({ title }: { title: string }) => title.toLowerCase().includes(action.payload.toLowerCase()))
		}
	}
})

export default ArticleListSlice

import { configureStore } from '@reduxjs/toolkit'
import { filterSlice, articleListSlice, articleSlice, isLoadingSlice, errorSlice } from './slices'

const store = configureStore({
	reducer: {
		filter: filterSlice.reducer,
		articleList: articleListSlice.reducer,
		article: articleSlice.reducer,
		isLoading: isLoadingSlice.reducer,
		error: errorSlice.reducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

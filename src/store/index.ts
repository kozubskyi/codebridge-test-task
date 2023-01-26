import { configureStore } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
import { filterReducer, articleListReducer, isLoadingReducer } from './slices'
// import articlesReducer from './articles/reducer'
// import articleReducer from './article/reducer'

const store = configureStore({
	reducer: {
		filter: filterReducer,
		articleList: articleListReducer,
		isLoading: isLoadingReducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store

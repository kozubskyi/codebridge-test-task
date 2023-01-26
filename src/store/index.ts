import { configureStore } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
import { filterSlice, articleListSlice, isLoadingSlice } from './slices'

const store = configureStore({
	reducer: {
		filter: filterSlice.reducer,
		articleList: articleListSlice.reducer,
		isLoading: isLoadingSlice.reducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store

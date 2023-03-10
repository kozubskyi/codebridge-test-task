import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import filterReducer from './filter/reducer'
import articlesReducer from './articles/reducer'

const store = configureStore({
	reducer: {
		filter: filterReducer,
		articles: articlesReducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

export default store

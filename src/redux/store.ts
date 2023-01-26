import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter/reducer'
import articlesReducer from './articles/reducer'

const store = configureStore({
	reducer: {
		filter: filterReducer,
		articles: articlesReducer
	},
	devTools: process.env.NODE_ENV !== 'production'
})

export default store

export type AppDispatch = typeof store.dispatch // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>

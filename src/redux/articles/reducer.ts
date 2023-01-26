import { createReducer } from '@reduxjs/toolkit'
import { articlesGet, articlesFilter } from './actions'

const articlesReducer = createReducer([], {
	// [articlesGet]: (state, action) => action.payload,
	// [articlesFilter]: (state, action) => action.payload
})

export default articlesReducer

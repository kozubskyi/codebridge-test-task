import { createReducer } from '@reduxjs/toolkit'
import { filterChange } from './actions'

const filterReducer = createReducer('', {
	// [filterChange]: (state, action) => action.payload
})

export default filterReducer

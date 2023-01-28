import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		fetchRequest: state => (state = initialState),
		fetchError: (state, action: PayloadAction<string>) => (state = action.payload)
	}
})

export const errorActions = errorSlice.actions
export const errorReducer = errorSlice.reducer

export default errorSlice

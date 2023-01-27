import { FC, ChangeEvent } from 'react'
import { TextField, Box } from '@mui/material'
import './Filter.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { isLoadingSlice, filterSlice, articleListSlice, errorSlice } from '../../store/slices'
import { fetchArticles } from '../../services/api'
import SearchIcon from '../SearchIcon/SearchIcon'

const { actions: filterActions } = filterSlice
const { actions: articleListActions } = articleListSlice
const { actions: isLoadingActions } = isLoadingSlice
const { actions: errorActions } = errorSlice

const Filter: FC = () => {
	const filter = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()

	const onChange = (evt: ChangeEvent<HTMLInputElement>) => dispatch(filterActions.change(evt.target.value))

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', paddingTop: '50px', maxWidth: '600px', paddingBottom: '40px' }}
		>
			<label htmlFor="filter">Filter by keywords</label>
			<Box sx={{ position: 'relative', height: '50px', width: '100%' }}>
				<SearchIcon />
				<TextField
					type="text"
					id="filter"
					variant="outlined"
					size="small"
					fullWidth
					value={filter}
					onChange={onChange}
					sx={{ fontFamily: 'Montserrat' }}
				/>
			</Box>
			<button
				type="button"
				onClick={() => {
					dispatch(isLoadingActions.set(true))

					fetchArticles()
						.then(data => {
							dispatch(articleListActions.setArticles(data))
							dispatch(articleListActions.filterArticles(filter))
						})
						.catch(err => dispatch(errorActions.set(err)))
						.finally(() => dispatch(isLoadingActions.set(false)))
				}}
			>
				filter
			</button>
		</Box>
	)
}

export default Filter

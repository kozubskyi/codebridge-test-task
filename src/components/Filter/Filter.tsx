import { FC, ChangeEvent, useMemo } from 'react'
import { TextField, Box } from '@mui/material'
import debounce from 'lodash.debounce'
import './Filter.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { fetchArticles } from '../../services/spaceflight-news-api'
import { filterActions } from '../../store/slices/filter-slice'
import SearchIcon from '../icons/SearchIcon/SearchIcon'

const Filter: FC = () => {
	// const filter = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()

	const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target
		dispatch(filterActions.typing(value))
		dispatch(fetchArticles(value))
	}

	const debouncedOnChange = useMemo(() => debounce(onChange, 300), [])

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
					// value={filter}
					onChange={debouncedOnChange}
					sx={{ fontFamily: 'Montserrat' }}
				/>
			</Box>
		</Box>
	)
}

export default Filter

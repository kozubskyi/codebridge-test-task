import { FC, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Box } from '@mui/material'
// import { filterChange } from '../../redux/filter/actions'
import { RootState } from '../../redux/store'
import './Filter.scss'
import SearchIcon from '../SearchIcon/SearchIcon'

const Filter: FC = () => {
	const filter = useSelector<RootState>(state => state.filter)
	const dispatch = useDispatch()

	const onChange = (evt: ChangeEvent<HTMLInputElement>): void => {}

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', paddingTop: '50px', maxWidth: '600px', paddingBottom: '40px' }}
		>
			<label htmlFor="filter">Filter by keywords</label>
			<Box sx={{ position: 'relative', height: '50px', width: '100%' }}>
				<SearchIcon />
				<TextField type="text" id="filter" variant="outlined" size="small" value={filter} onChange={onChange} />
			</Box>
		</Box>
	)
}

export default Filter

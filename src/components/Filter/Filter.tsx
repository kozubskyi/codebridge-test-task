import { FC, ChangeEvent } from 'react'
import { TextField, Box } from '@mui/material'
// import { useSelector, useDispatch } from 'react-redux'
import './Filter.scss'
// import { filterChange } from '../../redux/filter/actions'
// import { RootState } from '../../redux/store'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { typing } from '../../store/slices/FilterSlice'
import { getArticleList, filterArticleList } from '../../store/slices/ArticleListSlice'
import { loading } from '../../store/slices/IsLoadingSlice'
import SearchIcon from '../SearchIcon/SearchIcon'
import { getArticles } from '../../services/api'

const Filter: FC = () => {
	const filter = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()
	// const [filter, setFilter] = useState('')

	const onChange = (evt: ChangeEvent<HTMLInputElement>) => dispatch(typing(evt.target.value))

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
					dispatch(loading(true))

					getArticles()
						.then(data => {
							dispatch(getArticleList(data))
							dispatch(filterArticleList(filter))
						})
						.catch(console.log)
						.finally(() => dispatch(loading(false)))
				}}
			>
				filter
			</button>
		</Box>
	)
}

export default Filter

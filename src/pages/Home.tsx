import { FC, useEffect } from 'react'
import Filter from '../components/Filter/Filter'
import ArticleList from '../components/ArticleList/ArticleList'

const Home: FC = () => {
	useEffect(() => {}, [])

	return (
		<>
			<Filter />
			<ArticleList />
		</>
	)
}

export default Home

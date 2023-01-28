import Filter from '../components/Filter/Filter'
import ArticleList from '../components/ArticleList/ArticleList'
import Container from '../components/Container/Container'

const HomePage = () => {
	return (
		<Container>
			<Filter />
			<ArticleList />
		</Container>
	)
}

export default HomePage

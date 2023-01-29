import Filter from '../components/Filter/Filter'
import ArticleList from '../components/ArticleList/ArticleList'
import Container from '../components/Container/Container'

const HomePage = () => {
	return (
		<Container>
			<Filter />
			<ArticleList />
			<p className="final-message">
				This is the test task of{' '}
				<a href="https://jobs.dou.ua/companies/codebridge-technology/" target="_blank" rel="noreferrer">
					Codebridge Technology
				</a>{' '}
				IT-company. It was made to practice next technologies: React, TypeScript, SCSS, Redux Toolkit, Material UI,{' '}
				<a href="https://www.spaceflightnewsapi.net/" target="_blank" rel="noreferrer">
					News API
				</a>
				, Lodash.{' '}
				<a
					href="https://www.figma.com/file/h1veXmuEt84sT7PEZgF42K/Frontend_test?node-id=0%3A1&t=A6nPP2rrIbRPXBDJ-0"
					target="_blank"
					rel="noreferrer"
				>
					Figma
				</a>{' '}
				prototype was used.
			</p>
		</Container>
	)
}

export default HomePage

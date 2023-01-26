import { FC, useEffect, useState } from 'react'
import './ArticleList.scss'
import Article from '../Article/Article'
import Loader from '../Loader/Loader'
import { getArticles } from '../../services/api'

const ArticleList: FC = () => {
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getArticles()
			.then(data => setArticles(data))
			.catch(console.log)
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className="ArticleList">
			<p>{isLoading ? <Loader /> : `Results: ${articles.length}`}</p>
			<ul>
				{!isLoading &&
					articles.length > 0 &&
					articles.map(({ id, imageUrl, title, publishedAt, summary }) => (
						<li key={id}>
							<Article id={id} imageUrl={imageUrl} title={title} publishedAt={publishedAt} summary={summary} />
						</li>
					))}
			</ul>
		</div>
	)
}

export default ArticleList

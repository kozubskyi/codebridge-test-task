import { FC, useEffect, useState } from 'react'
import './ArticleList.scss'
import Article from '../Article/Article'
import { getArticles } from '../../services/api'

// const articles = [
// 	{
// 		id: 1,
// 		imageUrl: 'https://mui.com/static/images/cards/paella.jpg',
// 		title: 'Delicius dish',
// 		publishedAt: 'June 29th, 2021',
// 		summary:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae iusto molestias nihil officiis ipsa et quis voluptates. Libero, porro?'
// 	},
// 	{
// 		id: 2,
// 		imageUrl: 'https://mui.com/static/images/cards/paella.jpg',
// 		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 		publishedAt: 'June 29th, 2021',
// 		summary:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem vero ullam saepe amet aspernatur nam delectus dignissimos deleniti velit provident, dolore quis ab nostrum.'
// 	},
// 	{
// 		id: 1,
// 		imageUrl: 'https://mui.com/static/images/cards/paella.jpg',
// 		title: 'Delicius dish',
// 		publishedAt: 'June 29th, 2021',
// 		summary:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae iusto molestias nihil officiis ipsa et quis voluptates. Libero, porro?'
// 	},
// 	{
// 		id: 2,
// 		imageUrl: 'https://mui.com/static/images/cards/paella.jpg',
// 		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 		publishedAt: 'June 29th, 2021',
// 		summary:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem exercitationem vero ullam saepe amet aspernatur nam delectus dignissimos deleniti velit provident, dolore quis ab nostrum.'
// 	}
// ]

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
			<p>{isLoading ? 'Loading...' : `Results: ${articles.length}`}</p>
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

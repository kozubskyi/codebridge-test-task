import { FC, useEffect } from 'react'
import './ArticleList.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { fetchArticles } from '../../services/spaceflight-news-api'
import ArticleItem from '../ArticleItem/ArticleItem'
import Loader from '../Loader/Loader'
import IArticle from '../../models/IArticle'

const ArticleList: FC = () => {
	const { articleList, isLoading, error } = useAppSelector(state => state)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchArticles())
	}, [dispatch])

	return (
		<div className="ArticleList">
			<p>
				{isLoading && <Loader />}
				{error && `Error: ${error}`}
				{!isLoading && !error && `Results: ${articleList.length}`}
			</p>
			<ul>
				{articleList.map((article: IArticle) => (
					<li key={article.id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ArticleList

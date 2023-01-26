import { FC, useEffect } from 'react'
import './ArticleList.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { isLoadingSlice, articleListSlice } from '../../store/slices'
import { fetchArticles } from '../../services/api'
import ArticleItem from '../ArticleItem/ArticleItem'
import Loader from '../Loader/Loader'

const { actions: articleListActions } = articleListSlice
const { actions: isLoadingActions } = isLoadingSlice

const ArticleList: FC = () => {
	const { articleList, isLoading } = useAppSelector(state => state)
	const dispatch = useAppDispatch()

	useEffect(() => {
		fetchArticles()
			.then(data => dispatch(articleListActions.setArticles(data)))
			.catch(console.log)
			.finally(() => dispatch(isLoadingActions.set(false)))
	}, [])

	return (
		<div className="ArticleList">
			<p>{isLoading ? <Loader /> : `Results: ${articleList.length}`}</p>
			<ul>
				{!isLoading &&
					articleList.length > 0 &&
					articleList.map(({ id, imageUrl, title, publishedAt, summary }) => (
						<li key={id}>
							<ArticleItem id={id} imageUrl={imageUrl} title={title} publishedAt={publishedAt} summary={summary} />
						</li>
					))}
			</ul>
		</div>
	)
}

export default ArticleList

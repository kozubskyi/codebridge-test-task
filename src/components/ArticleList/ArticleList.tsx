import { FC, useEffect } from 'react'
import './ArticleList.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { articleListSlice, isLoadingSlice, errorSlice } from '../../store/slices'
import { fetchArticles } from '../../services/api'
import ArticleItem from '../ArticleItem/ArticleItem'
import Loader from '../Loader/Loader'

const { actions: articleListActions } = articleListSlice
const { actions: isLoadingActions } = isLoadingSlice
const { actions: errorActions } = errorSlice

const ArticleList: FC = () => {
	const { articleList, isLoading, error } = useAppSelector(state => state)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(isLoadingActions.set(true))

		fetchArticles()
			.then(data => dispatch(articleListActions.setArticles(data)))
			.catch(err => dispatch(errorActions.set(err)))
			.finally(() => dispatch(isLoadingActions.set(false)))
	}, [])

	return (
		<div className="ArticleList">
			{isLoading && (
				<p>
					<Loader />
				</p>
			)}
			{/* {error && <p>Error: {error.message}</p>} */}
			{!isLoading && !error && <p>Results: {articleList.length}</p>}
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

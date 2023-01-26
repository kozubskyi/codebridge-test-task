import { FC, useEffect, useState } from 'react'
import './ArticleList.scss'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { getArticleList } from '../../store/slices/ArticleListSlice'
import { loading } from '../../store/slices/IsLoadingSlice'
import { getArticles } from '../../services/api'
import ArticleItem from '../ArticleItem/ArticleItem'
import Loader from '../Loader/Loader'

const ArticleList: FC = () => {
	const { articleList, isLoading } = useAppSelector(state => state)
	const dispatch = useAppDispatch()

	useEffect(() => {
		getArticles()
			.then(data => dispatch(getArticleList(data)))
			.catch(console.log)
			.finally(() => dispatch(loading(false)))
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

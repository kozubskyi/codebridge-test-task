import axios from 'axios'
import { AppDispatch } from '../store'
import { articleListActions } from '../store/slices/article-list-slice'
import { articleActions } from '../store/slices/article-slice'
import { isLoadingActions } from '../store/slices/is-loading-slice'
import { errorActions } from '../store/slices/error-slice'
import IArticle from '../models/IArticle'

interface IResponse {
	count: number
	next: string | null
	previous: string | null
	results: IArticle[]
}

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v4/articles'

export const fetchArticles = (filter: string = '', quantity: number = 100) => {
	return async (dispatch: AppDispatch) => {
		try {
			// dispatch(articleListActions.fetchRequest())
			dispatch(isLoadingActions.fetchRequest())
			dispatch(errorActions.fetchRequest())

			const response = await axios.get<IResponse>(`?limit=${quantity}&title_contains=${filter}`)

			dispatch(articleListActions.fetchSuccess(response.data.results))
		} catch (err) {
			let message
			if (err instanceof Error) message = err.message
			else message = String(err)
			dispatch(errorActions.fetchError(message))
		} finally {
			dispatch(isLoadingActions.fetchFinal())
		}
	}
}

export const fetchArticle = (id: number | string) => {
	return async (dispatch: AppDispatch) => {
		try {
			// dispatch(articleActions.fetchRequest())
			dispatch(isLoadingActions.fetchRequest())
			dispatch(errorActions.fetchRequest())

			const response = await axios.get<IArticle>(`/${id}`)

			dispatch(articleActions.fetchSuccess(response.data))
		} catch (err) {
			let message
			if (err instanceof Error) message = err.message
			else message = String(err)
			dispatch(errorActions.fetchError(message))
		} finally {
			dispatch(isLoadingActions.fetchFinal())
		}
	}
}

import axios from 'axios'
import { AppDispatch } from '../store'
import { articleListActions } from '../store/slices/article-list-slice'
import { articleActions } from '../store/slices/article-slice'
import { isLoadingActions } from '../store/slices/is-loading-slice'
import { errorActions } from '../store/slices/error-slice'
import IArticle from '../models/IArticle'

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/articles'

// export const fetchArticles = async (quantity: number = 100) => {
// 	return await axios.get(`?_limit=${quantity}`).then(response => response.data)
// }

// export const fetchArticle = async (id: number | string) => {
// 	return await axios.get(`/${id}`).then(response => response.data)
// }

export const fetchArticles = (quantity: number = 100) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(isLoadingActions.fetchRequest())
			dispatch(errorActions.fetchRequest())

			const response = await axios.get<IArticle[]>(`?_limit=${quantity}`)

			dispatch(articleListActions.fetchSuccess(response.data))
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

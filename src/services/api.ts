import axios from 'axios'

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/'

export const getArticles = (limit: number = 100) => {
	return axios.get(`/articles?_limit=${limit}`).then(response => response.data)
}

export const getArticle = (id: number) => axios.get(`/articles/${id}`)

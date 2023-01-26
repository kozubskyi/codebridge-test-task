import axios from 'axios'

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/articles'

export const getArticles = (quantity: number = 100) => {
	return axios.get(`?_limit=${quantity}`).then(response => response.data)
}

export const getArticle = (id: number) => {
	return axios.get(`/${id}`).then(response => response.data)
}

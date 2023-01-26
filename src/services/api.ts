import axios from 'axios'

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/articles'

export const fetchArticles = async (quantity: number = 100) => {
	return await axios.get(`?_limit=${quantity}`).then(response => response.data)
}

export const fetchArticle = async (id: number) => {
	return await axios.get(`/${id}`).then(response => response.data)
}

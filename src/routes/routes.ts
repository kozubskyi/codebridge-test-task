import { Article, Home } from '../pages'
// import { Navigate } from 'react-router-dom'

const routes = [
	{
		path: '/',
		element: Home
	},
	{
		path: '/articles/:id',
		element: Article
	}
	// {
	// 	path: '*',
	// 	element: Navigate,
	// 	elementProps: {
	// 		to: '/',
	// 		replace: true
	// 	}
	// }
]

export default routes

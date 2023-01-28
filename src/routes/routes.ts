import { HomePage, ArticlePage } from '../pages'
// import { Navigate } from 'react-router-dom'

const routes = [
	{
		path: '/',
		element: HomePage
	},
	{
		path: '/articles/:id',
		element: ArticlePage
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

import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import { HomePage, ArticlePage } from './pages'

const App: FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/articles/:id" element={<ArticlePage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	)
}

export default App

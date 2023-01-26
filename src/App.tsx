import { FC } from 'react'
import RouteList from './routes/RouteList'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import { Home, Article } from './pages'
import Container from './components/Container/Container'

const App: FC = () => {
	return (
		<div className="App">
			<Container>
				{/* <RouteList /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/articles/:id" element={<Article />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App

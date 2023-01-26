import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'

const RouteList: FC = () => {
	return (
		<Routes>
			{routes.map(route => (
				<Route path={route.path}>{<route.element />}</Route>
			))}
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}

export default RouteList

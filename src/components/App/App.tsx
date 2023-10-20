//* ============================ Основной компонент ====================== *//

import { Routes, Route, useLocation, AnimatePresence } from 'imports/importNpms'

import { routesApp } from 'routes/routesNavigation'

import useCheckWebP from 'hooks/useCheckWebP'

export default function App(): JSX.Element | null {
	useCheckWebP()

	const location = useLocation()

	if (!routesApp) return null

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				{routesApp.map(({ path, Element }) => (
					<Route key={path} path={path} element={Element && <Element />} />
				))}
			</Routes>
		</AnimatePresence>
	)
}

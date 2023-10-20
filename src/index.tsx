//* ============================= Корневой компонент ============================*\\

import { ReactDOM, Suspense, BrowserRouter, Provider } from './imports/importNpms'

import { App, Spinner } from 'imports/importComponents'

import store from './store/store'

import './lang/i18n'

import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Suspense fallback={<Spinner className='spiner-root' />}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</Suspense>
)

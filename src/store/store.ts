//* =================== Store (глобальное хранилище состояний) =============== *//

import { configureStore } from '../imports/importNpms'
import clans from './slice/clansSlice'

const store = configureStore({
	reducer: {
		clans
	},
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

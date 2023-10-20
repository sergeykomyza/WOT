//* =================== Срез "Кланы" (обработчики изменения состояний) =============== *//

import { createSlice, createAsyncThunk, PayloadAction, axios } from 'imports/importNpms'
import { IClans } from 'types/IApp'

const CLANS_URL: string = 'http://localhost:3001/clans'

interface IInitialState {
	clans: [] | IClans
	clansLoading: null | string
	clansError: null | string | undefined
	selectedClans: [] | IClans
	clansSearchValue: string
}

const initialState: IInitialState = {
	clans: [],
	clansLoading: null,
	clansError: null,
	selectedClans: [],
	clansSearchValue: '',
}

export const fetchClans = createAsyncThunk<IClans, undefined, { rejectValue: null | string }>('clans/fetchClans', async (_, { rejectWithValue }): Promise<IClans> => {
	const config = {
		headers: {
			'Content-Type': 'application/json;',
		},
	}
	return await axios
		.get(CLANS_URL, config)
		.then((response) => {
			const data = response.data
			return data
		})
		.catch((error) => {
			if (axios.isAxiosError<null | string, Record<string, unknown>>(error)) {
				console.error(`Ошибка получения данных от ${CLANS_URL}:`, error.response)
			} else {
				console.error(error)
			}
			return rejectWithValue(error.message)
		})
})


const clansSlice = createSlice({
	name: 'clans',
	initialState,
	reducers: {
		setSearchValue(state, action: PayloadAction<string>) {
			state.clansSearchValue = action.payload
		},

		autocompleteSearch(state, action: PayloadAction<string>) {
			state.clansSearchValue = action.payload
		},

		filterClans(state) {


			state.selectedClans = state.clans.filter((item) => {
				return item.name.toLowerCase().includes(state.clansSearchValue.toLowerCase()) || item.acronym.toLowerCase().includes(state.clansSearchValue.toLowerCase())
			})
		},

		clearSearchValue(state) {
			state.clansSearchValue = ''
			state.selectedClans = state.clans
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchClans.pending, (state) => {
				state.clansLoading = 'loading'
				state.clansError = null
			})
			.addCase(fetchClans.fulfilled, (state, action) => {
				state.clansLoading = 'resolved'
				state.clans = action.payload
				state.selectedClans = action.payload
			})
			.addCase(fetchClans.rejected, (state, action) => {
				state.clansLoading = 'rejected'
				state.clansError = action.payload
			})
			.addDefaultCase(() => {})
	},
})

const { actions, reducer } = clansSlice

export const { setSearchValue, autocompleteSearch, filterClans, clearSearchValue } = actions

export default reducer

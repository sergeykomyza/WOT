//* ======================================= Типизация срезa "Кланы" (обработчики изменения состояний) ========================================*\\
//? ТИПЫ:
import {IClans} from '../../../server/Idb'

export interface IinitialState {
	clans: IClans
	clansLoading: string | null // обязательный, булевое значение
	clansError: string | null //
	selectedClans: IClans
	clansSearchValue: string
}

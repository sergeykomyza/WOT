//* ======================================= Типизация вспомогательных ф-ций ========================================*\\

export interface ISortPropertiesConfig<T> {
	property: Extract<keyof T, string | number | Date>
	isDescending: boolean
}

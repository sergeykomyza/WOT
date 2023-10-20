//* ======================================= Типизация компонента "Модальное окно" ========================================*\\

export interface IPropsModal {
	className?: string
	active: boolean
	onClose: () => void
	attrs?: React.HTMLAttributes<HTMLElement>
	children?: React.ReactNode
}

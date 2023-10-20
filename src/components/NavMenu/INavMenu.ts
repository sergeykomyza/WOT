//* ======================================= Типизация компонента "Навигационное меню" ========================================*\\

export interface IPropsNavMenu {
	tag?: React.ElementType
	className?: string
	active?: boolean
	children?: React.ReactNode
	style?: React.CSSProperties
	attrs?: React.HTMLAttributes<HTMLElement>
}

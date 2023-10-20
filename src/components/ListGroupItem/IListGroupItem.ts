//* ======================================= Типизация компонента "элементы Списка" ========================================*\\

export interface IPropsListGroupItem {
	tag?: React.ElementType
	className?: string
	active?: boolean
	disabled?: boolean
	children?: React.ReactNode
	href?: string
	style?: React.CSSProperties | undefined
	attrs?: React.HTMLAttributes<HTMLElement>
	onClick?: React.MouseEventHandler<HTMLLIElement>
}

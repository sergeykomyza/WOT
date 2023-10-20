//* ======================================= Типизация компонента "Ссылка" ========================================*\\

export interface IPropsLinkTo {
	tag?: React.ElementType
	to?: string
	className?: string
	href?: string | undefined
	title?: string
	onClick?: React.MouseEventHandler
	disabled?: boolean
	active?: boolean
	children?: React.ReactNode
	target?: string
	attrs?: React.HTMLAttributes<HTMLElement>
}

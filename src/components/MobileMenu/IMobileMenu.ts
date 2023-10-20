//* ======================================= Типизация компонента "Мобильное меню" ========================================*\\

export interface IPropsMobileMenu {
	tag?: React.ElementType
	className?: string
	active?: boolean
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLElement>
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties | undefined
}

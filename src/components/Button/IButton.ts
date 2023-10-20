//* ======================================= Типизация компонента "Кнопка/Ссылка" ========================================*\\

export interface IPropsButton {
	tag?: React.ElementType
	id?: string | undefined
	className?: string
	onClick?: ((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void) | undefined
	disabled?: boolean
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties | undefined
	href?: string | undefined
	target?: string | undefined
	onMouseOver?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
	type?: 'button' | 'reset' | 'submit' | undefined
}

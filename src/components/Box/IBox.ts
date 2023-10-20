//* ======================================= Типизация компонента "Бокс" ========================================*\\

export interface IPropsBox {
	id?: string | undefined
	tag?: React.ElementType
	className?: string
	active?: boolean
	onClick?: React.MouseEventHandler<HTMLElement>
	children?: React.ReactNode
	style?: React.CSSProperties | undefined
	attrs?: React.HTMLAttributes<HTMLElement>
}

//* ======================================= Типизация компонента "Заголовок" ========================================*\\

export interface IPropsTitle {
	tag: React.ElementType
	className?: string
	onClick?: React.MouseEventHandler<HTMLElement>
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

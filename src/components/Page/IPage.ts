//* ======================================= Типизация компонента "Страница" ========================================*\\

export interface IPropsPage {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

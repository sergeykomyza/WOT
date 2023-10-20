//* ======================================= Типизация компонента "Секция" ========================================*\\

export interface IPropsSection {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

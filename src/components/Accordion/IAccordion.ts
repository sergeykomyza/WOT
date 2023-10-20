//* ======================================= Типизация компонента "Аккордион" ========================================*\\

export interface IPropsAccordion {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

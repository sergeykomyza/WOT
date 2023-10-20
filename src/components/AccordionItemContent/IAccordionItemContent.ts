//* ======================================= Типизация компонента "контент Аккардеона" ========================================*\\

export interface IPropsAccordionItemContent {
	tag?: React.ElementType
	className?: string
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

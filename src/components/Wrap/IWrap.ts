//* ======================================= Типизация компонента "Обертка" ========================================*\\

export interface IPropsWrap {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

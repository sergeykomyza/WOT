//* ======================================= Типизация компонента "Текст" ========================================*\\

export interface IPropsText {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	htmlFor?: string
	attrs?: React.HTMLAttributes<HTMLElement>
}

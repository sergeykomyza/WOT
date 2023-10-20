//* ======================================= Типизация компонента "Кнопка-скролл" ========================================*\\

export interface IPropsScrollButton {
	tag?: React.ElementType
	id?: string | undefined
	className?: string
	indentTop?: number
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties | undefined
}

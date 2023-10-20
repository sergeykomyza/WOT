//* ======================================= Типизация Повторяющегося компонента ========================================*\\

export interface IPropsRepeatComponent {
	tag?: React.ElementType
	className?: string
	qty: number
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties | undefined
}

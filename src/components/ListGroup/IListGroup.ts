//* ======================================= Типизация компонента "Группа списков" ========================================*\\

export interface IPropsListGroup {
	tag?: React.ElementType
	className?: string
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties | undefined
}

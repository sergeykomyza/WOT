//* ======================================= Типизация компонента "Основной контент" ========================================*\\

export interface IPropsMain {
	tag?: React.ElementType
	className?: string
	children: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

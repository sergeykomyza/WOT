//* ======================================= Типизация компонента "Верхний колонтитул" ========================================*\\

export interface IProrsHeader {
	tag?: React.ElementType
	className?: string
	listenScroll?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

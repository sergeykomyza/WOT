//* ======================================= Типизация компонента "Форма" ========================================*\\

export interface IPropsFofm {
	tag?: React.ElementType
	className?: string
	attrs?: React.HTMLAttributes<HTMLElement>
	children: React.ReactNode
	method: string
	action: string
	target?: string
	role?: string
	rel?: string
}

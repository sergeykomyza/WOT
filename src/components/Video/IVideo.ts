//* ======================================= Типизация компонента "Видео" ========================================*\\

export interface IPropsVideo {
	tag?: React.ElementType
	src: string
	srcWebM?: string
	className?: string
	poster?: string
	onClick?: () => void
	disabled?: boolean
	active?: boolean
	autoPlay?: boolean
	loop?: boolean
	muted?: boolean
	controls?: boolean
	tabIndex?: number
	attrs?: React.HTMLAttributes<HTMLElement>
	children?: React.ReactNode
}

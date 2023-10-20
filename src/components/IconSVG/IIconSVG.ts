//* ======================================= Типизация компонента "Иконка SVG" ========================================*\\

export interface IPropsIconSVG {
	tag?: React.ElementType
	idsymbol: string
	className?: string
	title?: string | null
	fill?: string
	stroke?: string
	size?: number
	onClick?: React.MouseEventHandler<SVGSVGElement>
	active?: boolean
	disabled?: boolean
	attrs?: React.HTMLAttributes<HTMLElement>
	style?: React.CSSProperties
}

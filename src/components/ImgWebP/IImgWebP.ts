//* ======================================= Типизация компонента "Изображение WebP" ========================================*\\

export interface IPropsImgWebP {
	tag?: React.ElementType
	src: string | undefined
	srcSet?: string
	className?: string
	type?: string
	alt?: string | undefined
	title?: string
	width?: number
	height?: number
	circle?: boolean
	attrs?: React.HTMLAttributes<HTMLElement>
}

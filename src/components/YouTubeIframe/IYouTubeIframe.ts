//* ======================================= Типизация компонента "Видео YouTube" ========================================*\\

export interface IPropsYouTubeIframe {
	tag?: React.ElementType
	className?: string
	config: object | undefined
	onClick?: React.MouseEventHandler<HTMLElement>
	attrs?: React.HTMLAttributes<HTMLElement>
	children?: React.ReactNode
}

export interface IConfigYouTubeIframe {
	id: string
	title: string
	src: string
	frameBorder: string
	allow: string
	allowFullScreen: string
}

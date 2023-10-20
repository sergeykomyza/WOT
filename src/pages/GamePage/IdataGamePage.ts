//* ======================================= Типизация базы данных страницы "Игра" ========================================*\\

export interface IlistGallery {
	id: string
	img: string | undefined
	imgWebP?: string | undefined
	imgThumbs: string | undefined
	imgThumbsWebP?: string | undefined
	width?: number
	height?: number
	widthThumbs?: number
	heightThumbs?: number
	type?: string
	alt?: string
	altThumbs: string
}

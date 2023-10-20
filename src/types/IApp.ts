//* ============= Типизация данных мультиязычной локализации =============*\\

export interface IRoutesApp {
	name: string
	path: string
	Element?: React.FunctionComponent<any>
	submenu?: IRoutesApp[]
}

export interface IListSlidesVitrine {
	img: string
	imgWebP?: string
	title?: string
	url: string
}

export interface IListLatestNews {
	widthImg?: number
	heightImg?: number
	img: string
	imgWebP?: string
	title?: string
	text?: string
	url: string
	link1Title?: string
	url1: string
	link2Title?: string
	url2: string
	link2IconSVGid: string
	date?: string
}

export interface IListStocks {
	img: string
	imgWebP?: string
	title?: string
	textTimer?: string
	dateStart?: string
	url: string
}

export interface IListVideo {
	id?: string
	img: string
	imgWebP?: string
	iconSVGid: string
	title?: string
	linkTitle: string
	url: string
	date?: string
}

export interface IListInteresting {
	img: string
	imgWebP?: string
	title?: string
	url: string
}

export interface IListVideo {
	id?: string
	img: string
	imgWebP?: string
	iconSVGid: string
	title?: string
}

export interface IListConcept {
	title?: string
	text?: string
}

export interface IListTechnic {
	id: string
	title?: string
	description?: string
	quantity?: string
	type?: string

	technic?: string
	properties?:
		| {
				id: string
				name?: string | undefined
				icon?: string | undefined
				iconWebP?: string | undefined
		  }[]
		| undefined
	imgBg?: string
	imgBgLayer?: string
	imgBgLayerWebP?: string
	imgPagin?: string
	imgPaginWebP?: string
}

export interface IListNation {
	id: string
	nation?: string
	quantity?: string
	type?: string
	technic?: string
	imgFlag?: string
	imgFlagWebP?: string
	imgTanks?: string
	imgTanksWebP?: string
	altTanks?: string
	imgPagin?: string
	imgPaginWebP?: string
}

export interface IListFlipCards {
	id: string
	title?: string | undefined
	backTitle?: string | undefined
	side?: string | undefined
	totalSide?: string | undefined
	backSide?: string | undefined
	img?: string | undefined
	backImg?: string | undefined
	imgWebP?: string | undefined
	backImgWebP?: string | undefined
	subtitle?: string | undefined
	backSubtitle?: string | undefined
	text?: string | undefined
	backText?: string | undefined
}

export interface IListGuide {
	title?: string
	text?: string
	imgBg?: string
	url: string
}

export interface IListAccordion {
	title?: string
	url?: string
	content: {
		title?: string
		url?: string
	}[]
}

export interface IResourcesClans {
	id: string
	title?: string | undefined
	img?: string | undefined
	imgWebP?: string | undefined
	alt?: string | undefined
	linkTitle?: string | undefined
	link?: string | undefined
	features?: string[] | undefined
}

export interface IListBestClans {
	id: string
	title?: string | undefined
	icon?: string | undefined
	iconWebP?: string | undefined
	alt?: string | undefined
	url?: string | undefined
	property: string
	isDescending: boolean
}

export interface IClan {
	id: string
	img: string
	imgWebP: string
	acronym: string
	name: string
	gamer: string
	CR: string
	wPR: string
	aBD: string
	aVL10: string
	fSH: string
	wGM: string
	wSH: string
	url: string
}

export type IClans = IClan[]

export interface IListCurrentTourneys {
	label?: string
	img: string
	imgWebP?: string
	title?: string
	periodEvent?: string
	features: {
		iconSVGid: string
		feature?: string
	}[]
	status?: string
	featuresHidden: {
		iconSVGid: string
		title?: string
		feature?: string
	}[]
	dateStart: string
	url: string
}

export interface IListLatestNews {
	img: string
	imgWebP?: string
	title?: string
	url: string
	link1Title?: string
	url1: string
	link2Title?: string
	url2: string
	link2IconSVGid: string
	date?: string
}

export interface IListСommunities {
	title?: string
	text?: string
	img?: string
	imgWebP?: string
	url?: string
}

export interface IListLangs {
	[key: string]: string
	id: string
	name: string
	code: string
	country_code: string
	continent: string
}

export interface IRoutesFooterNav {
	name: string
	url: string
}

export interface ISocialLink {
	idsymbol: string
	name?: string
	url?: string
	title?: string
	text?: string
}

//* ======================================= Типизация "Базы занных Сервера" ========================================*\\

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

export interface IClans {
	clans: IClan[]
}

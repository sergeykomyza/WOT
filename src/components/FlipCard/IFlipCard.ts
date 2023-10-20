//* ======================================= Типизация компонента "Переворачивающаяся карточка" ========================================*\\

import { IListFlipCards } from 'types/IApp'

export interface IPropsFlipCard {
	tag?: React.ElementType
	className?: string
	children?: React.ReactNode
	card: IListFlipCards
	attrs?: React.HTMLAttributes<HTMLElement>
}

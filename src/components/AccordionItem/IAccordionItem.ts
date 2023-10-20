//* ====================== Типизация компонента "Элемент аккордеона" ===================*\\

import { IListAccordion } from 'types/IApp'

export interface IPropsAccordionItem {
	tag?: React.ElementType
	className?: string
	item: IListAccordion
	onToggle: () => void
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
}

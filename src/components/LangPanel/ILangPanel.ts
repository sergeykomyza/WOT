//* ======================================= Типизация компонента "Языковая панель" ========================================*\\

import type { SetStateAction } from 'imports/importNpms'

export interface IPropsLangPanel {
	tag?: React.ElementType
	className?: string
	active?: boolean
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLElement>
	cb?: React.Dispatch<SetStateAction<boolean>>
	style?: React.CSSProperties | undefined
}

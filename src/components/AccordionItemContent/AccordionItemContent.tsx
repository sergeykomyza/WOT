//* ============================================ Компонент "контент Аккордеона" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsAccordionItemContent } from './IAccordionItemContent'

export const AccordionItemContent: ForwardRefExoticComponent<IPropsAccordionItemContent & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'div', className, active, children, ...attrs }: IPropsAccordionItemContent, ref) => {
		const classes = classNames('accordion__content', active && (className = 'open'))

		return (
			<Tag ref={ref} className={classes} style={active ? { maxHeight: (ref as React.MutableRefObject<HTMLElement>).current.scrollHeight } : { maxHeight: '0px' }} {...attrs}>
				{children}
			</Tag>
		)
	}
)

export const MAccordionItemContent = motion(AccordionItemContent)

//* ======================================= Компонент "Секция" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsSection } from './ISection'

export const Section: ForwardRefExoticComponent<IPropsSection & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'section', className, children, ...attrs }, ref) => {
	const classes = classNames('section', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MSection = motion(Section)

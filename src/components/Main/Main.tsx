//* ======================================= Компонент "Основной контент" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsMain } from './IMain'

export const Main: ForwardRefExoticComponent<IPropsMain & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'main', className, children, ...attrs }, ref) => {
	const classes = classNames('main', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MMain = motion(Main)

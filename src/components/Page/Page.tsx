//* ===================================== Компонент "Страница" ======================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsPage } from './IPage'

export const Page: ForwardRefExoticComponent<IPropsPage & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, children, ...attrs }, ref) => {
	const classes = classNames('page', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MPage = motion(Page)

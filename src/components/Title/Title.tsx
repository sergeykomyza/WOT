//* ======================================= Компонент "Заголовок" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsTitle } from './ITitle'

export const Title: ForwardRefExoticComponent<IPropsTitle & RefAttributes<unknown>> = forwardRef(({ tag: Tag, className, children, ...attrs }, ref) => {
	const classes = classNames('title', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MTitle = motion(Title)

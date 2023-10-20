//* ======================================= Компонент "Обертка" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsWrap } from './IWrap'

export const Wrap: ForwardRefExoticComponent<IPropsWrap & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, children, ...attrs }, ref) => {
	const classes = classNames('wrap', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MWrap = motion(Wrap)

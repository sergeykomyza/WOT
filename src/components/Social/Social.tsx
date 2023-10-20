//* ============================================ Компонент "Социальные ссылки" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsSocial } from './ISocial'

export const Social: ForwardRefExoticComponent<IPropsSocial & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, children, ...attrs }, ref) => {
	const classes = classNames('social', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MSocial = motion(Social)

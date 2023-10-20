//* ============================================ Компонент "Авторские права" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsCopyright } from './ICopyright'

export const Copyright: ForwardRefExoticComponent<IPropsCopyright & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, children, ...attrs }, ref) => {
	const classes = classNames('copyright', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MCopyright = motion(Copyright)

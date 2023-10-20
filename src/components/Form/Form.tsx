//* ==================================== Компонент "Форма" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsFofm } from './IForm'

export const Form: ForwardRefExoticComponent<IPropsFofm & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'form', className, children, ...attrs }, ref) => {
	const classes = classNames('form', className)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MForm = motion(Form)

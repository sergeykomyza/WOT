//* ======================================= Компонент "Текст" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsText } from './IText'

export const Text: ForwardRefExoticComponent<IPropsText & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'p', className, children, ...attrs }, ref) => {
	const classes = classNames(attrs.htmlFor ? 'label' : 'text', className)

	attrs.htmlFor && (Tag = 'label')

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MText = motion(Text)

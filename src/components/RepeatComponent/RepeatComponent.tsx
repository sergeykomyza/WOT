//* ======================= Повторяющийся компонент ========================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsRepeatComponent } from './IRepeatComponent'

export const RepeatComponent: ForwardRefExoticComponent<IPropsRepeatComponent & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, qty, children, ...attrs }, ref) => {
	const classes = classNames(className)

	return (
		<>
			{[...Array(qty)].map((item, index) => (
				<Tag ref={ref} key={index} className={classes} {...attrs}>
					{children}
				</Tag>
			))}
		</>
	)
})

export const MRepeatComponent = motion(RepeatComponent)

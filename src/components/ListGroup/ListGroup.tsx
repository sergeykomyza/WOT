//* ============================================ Компонент "Группа списков" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsListGroup } from './IListGroup'

export const ListGroup: ForwardRefExoticComponent<IPropsListGroup & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'ul', className, active, children, ...attrs }, ref) => {
	const classes = classNames('list-group', className, { active })

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MListGroup = motion(ListGroup)

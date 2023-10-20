//* ============================================ Компонент "элементы Списка" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsListGroupItem } from './IListGroupItem'

export const ListGroupItem: ForwardRefExoticComponent<IPropsListGroupItem & RefAttributes<unknown>> = forwardRef(({ tag: Tag, className, active, disabled, children, ...attrs }, ref) => {
	const classes = classNames('list-group-item', className, { active }, { disabled })

	!Tag && (Tag = 'li')

	if (attrs.href && Tag === 'li') {
		Tag = 'a'
	}

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MListGroupItem = motion(ListGroupItem)

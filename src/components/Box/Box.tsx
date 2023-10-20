//* ====================================== Компонент "Бокс" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsBox } from './IBox'

export const Box: ForwardRefExoticComponent<IPropsBox & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, active, onClick, children, ...attrs }, ref) => {
	const classes = classNames('box', className, { active })

	return (
		<Tag ref={ref} className={classes} onClick={onClick} {...attrs}>
			{children}
		</Tag>
	)
})

export const MBox = motion(Box)

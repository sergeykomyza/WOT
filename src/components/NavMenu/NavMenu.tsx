//* ==================================== Компонент "Навигационное меню" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'

import { IPropsNavMenu } from './INavMenu'

export const NavMenu: ForwardRefExoticComponent<IPropsNavMenu & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'nav', className, active, children, ...attrs }, ref) => {
	const classes = classNames('nav', className, { active })

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
		</Tag>
	)
})

export const MNavMenu = motion(NavMenu)

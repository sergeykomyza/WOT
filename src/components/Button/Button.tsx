//* ======================================= Компонент "Кнопка/Ссылка" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsButton } from './IButton'

export const Button: ForwardRefExoticComponent<IPropsButton & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'button', className = '', onClick = () => {}, disabled = false, active = false, type, children, ...attrs }, ref) => {
		const classes = classNames(attrs.href ? 'link' : 'btn', className, { active }, { disabled })

		const onClickAction = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => (disabled ? e.preventDefault() : onClick(e))

		attrs.href && (Tag = 'a')

		attrs.href ? (type = undefined) : (type = 'button')

		return (
			<Tag ref={ref} className={classes} onClick={onClickAction} disabled={disabled} type={type} {...attrs}>
				{children}
			</Tag>
		)
	}
)

export const MButton = motion(Button)

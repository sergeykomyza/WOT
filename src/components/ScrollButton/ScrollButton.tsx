//* ======================================= Компонент "Кнопка-скролл" ========================================*\\

import { forwardRef, useState, useEffect, classNames, motion } from 'imports/importNpms'

import { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsScrollButton } from './IScrollButton'

import { switchVisibilityBtn, scrollToTop, addAventListener } from 'utils/utils'

export const ScrollButton: ForwardRefExoticComponent<IPropsScrollButton & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'button', className, indentTop = 300, active = false, children, ...attrs }, ref) => {
		const [visibleBtn, setVisibleBtn] = useState(false)

		const classes = classNames('btn-up', className, { active }, visibleBtn ? 'show' : null)

		const scrollWindowEventHandler = () => {
			setVisibleBtn(switchVisibilityBtn(indentTop))
		}

		useEffect(() => {
			addAventListener(window, 'scroll', scrollWindowEventHandler, true)
		}, [])

		return (
			<Tag ref={ref} className={classes} onClick={scrollToTop} {...attrs}>
				{children}
			</Tag>
		)
	}
)

export const MScrollButton = motion(ScrollButton)

//* ======================================= Компонент "Видео YouTube" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsYouTubeIframe } from './IYouTubeIframe'

import './YouTubeIframe.scss'

export const YouTubeIframe: ForwardRefExoticComponent<IPropsYouTubeIframe & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, config, onClick, children, ...attrs }, ref) => {
	const classes = classNames('video-youtube', className)

	!children && (children = 'К сожалению Ваш браузер устарел и не поддерживает плавающие фреймы!')

	return (
		<Tag ref={ref} className={classes} onClick={onClick} {...attrs}>
			<iframe {...config}>{children}</iframe>
		</Tag>
	)
})

export const MYouTubeIframe = motion(YouTubeIframe)

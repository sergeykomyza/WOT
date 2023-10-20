//* ======================================= Компонент "Видео" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsVideo } from './IVideo'

import './Video.scss'

export const Video: ForwardRefExoticComponent<IPropsVideo & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'video', className, src, srcWebM, poster, onClick, active, children, ...attrs }, ref) => {
		const classes = classNames('video', className, { active })

		return (
			<Tag ref={ref} className={classes} active={active} poster={poster} onClick={onClick} {...attrs}>
				<source type='video/webm' src={srcWebM}></source>
				<source type='video/mp4' src={src}></source>
			</Tag>
		)
	}
)

export const MVideo = motion(Video)

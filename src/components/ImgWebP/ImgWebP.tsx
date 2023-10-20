//* ======================================= Компонент "Изображение WebP" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsImgWebP } from './IImgWebP'

export const ImgWebP: ForwardRefExoticComponent<IPropsImgWebP & RefAttributes<HTMLImageElement>> = forwardRef(
	({ tag: Tag = 'picture', className, src, srcSet, type = 'image/webp', alt = 'picture', title, width = 400, height = 200, circle, ...attrs }, ref) => {
		!src && (src = `https://via.placeholder.com/${width}x${height}`)

		const classes = classNames('img', className, { circle })

		return (
			<Tag ref={ref}>
				<source srcSet={srcSet} type={type} />
				<img className={classes} src={src} alt={alt} {...attrs} />
			</Tag>
		)
	}
)

export const MImgWebP = motion(ImgWebP)

//* ============================================ Компонент "Иконка SVG" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import iconsSVG from './IconsSVG.svg'

import { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsIconSVG } from './IIconSVG'

export const IconSVG: ForwardRefExoticComponent<IPropsIconSVG & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'svg', idsymbol, className, title, fill, stroke, size, onClick, disabled, active, ...attrs }, ref) => {
		const classes = classNames('icon', className, { func: onClick }, { active }, { disabled })

		return (
			<Tag ref={ref} className={classes} id={idsymbol} title={title} fill={fill} stroke={stroke} width={size} height={size} onClick={disabled ? (null as any) : onClick} {...attrs}>
				<g>
					{title && <title>{title}</title>}
					<use xlinkHref={`${iconsSVG}#${idsymbol}`} />
				</g>
			</Tag>
		)
	}
)

export const MIconSVG = motion(IconSVG)

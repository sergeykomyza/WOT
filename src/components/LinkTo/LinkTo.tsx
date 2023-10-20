//* ===================================== Компонент "Ссылка" ========================================*\\

import { forwardRef, Link, classNames, motion } from 'imports/importNpms'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsLinkTo } from './ILinkTo'

export const LinkTo: ForwardRefExoticComponent<IPropsLinkTo & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'a', className, to, href, title, onClick, disabled, active, children, ...attrs }, ref) => {
		const classes = classNames('link', className, { active }, { disabled })

		return (
			<>
				{to ? (
					<Link ref={ref as React.Ref<HTMLAnchorElement> | undefined} to={to} className={classes} title={title} onClick={onClick}>
						{children}
					</Link>
				) : (
					href && (
						<Tag ref={ref} className={classes} href={href} title={title} onClick={onClick} {...attrs}>
							{children}
						</Tag>
					)
				)}
			</>
		)
	}
)

export const MLinkTo = motion(LinkTo)

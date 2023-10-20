//* ============================ Kомпонент "Спинер" ====================== *//

import { forwardRef, classNames, motion } from 'imports/importNpms'

import { Box, RepeatComponent } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsSpinner } from './ISpinner'

import './Spinner.scss'

export const Spinner: ForwardRefExoticComponent<IPropsSpinner & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, children, ...attrs }, ref) => {
	const classes = classNames('spinner', className)
	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<Box className='spinner__wrap'>
				<RepeatComponent qty={11} className='spinner__line' />
			</Box>
		</Tag>
	)
})

export const MSpinner = motion(Spinner)

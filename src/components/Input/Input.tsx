//* ==================================== Компонент "Поле ввода" ========================================*\\

import { forwardRef, classNames, motion } from 'imports/importNpms'

import { Box, Text } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsInput } from './IInput'

export const Input: ForwardRefExoticComponent<IPropsInput & RefAttributes<unknown>> = forwardRef(
	({ tag: Tag = 'input', id, className, label, error, required, onClick, onChange, requiredMess, children, ...attrs }, ref) => {
		const classes = classNames('input', className, { error })

		return (
			<Box className={`${className}-box`}>
				{label && (
					<Text className={`${className}-label`} htmlFor={id}>
						{label}
					</Text>
				)}
				<Tag ref={ref} name={id} id={id} className={classes} onClick={onClick} onChange={onChange} {...attrs} />
				{required && (
					<Text tag='span' className={`${className}-required`}>
						{requiredMess}
					</Text>
				)}
				{error && (
					<Text tag='span' className={`${className}-error`}>
						{error}
					</Text>
				)}
			</Box>
		)
	}
)

export const MInput = motion(Input)

//* ==================================== Типизация компонента "Поле ввода" ========================================*\\

export interface IPropsInput {
	tag?: React.ElementType
	id: string
	className?: string
	label?: string
	error?: string
	required?: boolean
	requiredMess?: string
	children?: React.ReactNode
	attrs?: React.HTMLAttributes<HTMLInputElement>
	value?: string | string[] | number | undefined
	onClick?: React.MouseEventHandler<HTMLInputElement>
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	autoComplete?: string
	placeholder?: string
	maxLength?: number
}

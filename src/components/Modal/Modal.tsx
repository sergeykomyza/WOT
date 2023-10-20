//* ======================================= Компонент "Модальное окно" ========================================*\\

import { useEffect, useCallback, classNames, useTranslation } from 'imports/importNpms'

import { Portal, Box, Button, IconSVG } from 'imports/importComponents'

import { IPropsModal } from './IModal'

import useSwitchBodyClass from 'hooks/useSwitchBodyClass'

import './Modal.scss'

const Modal = ({ className, active, onClose, children, ...attrs }: IPropsModal): JSX.Element | null => {
	const classes = classNames('modal', className, { active })

	const classes1 = classNames('modal__content', `${className}__content`, { active })

	const classes2 = classNames('modal__btn-close', `${className}__btn-close`, { active })

	const { t } = useTranslation()

	useSwitchBodyClass({ className: 'modal-open', active })

	const closeOnEscKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)
	useEffect(() => {
		window.addEventListener('keydown', closeOnEscKeyDown)
		return () => {
			window.removeEventListener('keydown', closeOnEscKeyDown)
		}
	}, [closeOnEscKeyDown])

	return (
		<>
			{active && (
				<Portal>
					<Box className={classes} onClick={onClose} {...attrs}>
						<Box className={classes1} onClick={(e) => e.stopPropagation()}>
							<Button className={classes2} onClick={onClose}>
								<IconSVG title={t('close')} idsymbol='close-modal' />
							</Button>
							{children}
						</Box>
					</Box>
				</Portal>
			)}
		</>
	)
}

export default Modal

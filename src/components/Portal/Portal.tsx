//* ======================================= Компонент "Портал" ========================================*\\

import { useEffect, useMemo, createPortal } from 'imports/importNpms'

import { IProrsPortal } from './IPortal'

export const Portal = ({ children = null }: IProrsPortal): JSX.Element => {
	const body = document.body

	const modalRootElement = useMemo(() => document.createElement('div'), [])

	modalRootElement.id = 'modal-root'

	useEffect(() => {
		body.appendChild(modalRootElement)

		return () => {
			body.removeChild(modalRootElement)
		}
	})

	return createPortal(children, modalRootElement)
}

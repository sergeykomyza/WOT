import { useState, useEffect } from 'imports/importNpms'

export const useFixingHeaderScrollUp = (listenEvent: boolean = true, startOffset: number = 200, removeListener: boolean = false): boolean[] => {
	const [startOffsetY] = useState<number>(startOffset)

	const [isFixed, setIsFixed] = useState<boolean>(false)

	const [isScrollUp, setIsScrollUp] = useState<boolean>(false)

	const [lastScrollY, setLastScrollY] = useState<number>(0)

	useEffect(() => {
		if (!listenEvent) return

		const listener = () => {
			const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
			const currentScrollY = scrollPosition()

			if (currentScrollY > lastScrollY && currentScrollY > startOffsetY) {
				setIsFixed(true)

				setIsScrollUp(false)
			} else if (currentScrollY < lastScrollY) {
				setIsScrollUp(true)
			}

			if (currentScrollY === 0) {
				setIsFixed(false)
				setIsScrollUp(false)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', listener)

		if (removeListener) {
			return () => {
				window.removeEventListener('scroll', listener)
			}
		}
	})

	return [isFixed, isScrollUp]
}

import { BaseSyntheticEvent, MutableRefObject, RefObject, useEffect } from 'imports/importNpms'

export function useClickTrackingOutside(
	refs: RefObject<HTMLElement | null>[] | MutableRefObject<HTMLElement | null>[] | null,
	handler: (e: BaseSyntheticEvent | MouseEvent | TouchEvent) => void,
	opened: boolean,
	exceptionRefs?: RefObject<HTMLElement | null>[] | MutableRefObject<HTMLElement | null>[] | null
) {
	useEffect(() => {
		if (!opened) return

		const listener = (e: BaseSyntheticEvent | MouseEvent | TouchEvent) => {
			if (
				(refs && refs instanceof Array && refs.some((ref) => (ref !== null && ref instanceof HTMLElement ? ref.contains(e.target) : ref.current !== null && ref.current.contains(e.target)))) ||
				(exceptionRefs &&
					exceptionRefs instanceof Array &&
					exceptionRefs.some((exceptionElem) =>
						exceptionElem !== null && exceptionElem instanceof HTMLElement ? exceptionElem.contains(e.target) : exceptionElem.current !== null && exceptionElem.current.contains(e.target)
					))
			) {
				return
			}

			handler(e)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [refs, handler, opened, exceptionRefs])
}

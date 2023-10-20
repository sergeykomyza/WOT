import { MutableRefObject, RefObject } from 'imports/importNpms'

export default function useMultiRefs<T>(initialValue: T | null): [() => T | RefObject<T>[] | MutableRefObject<HTMLElement | null>[], (ref: RefObject<T>) => void] {
	let currentRefs: RefObject<T>[] = []

	let refs = new Set(currentRefs)

	function getRefs(): T | RefObject<T>[] | MutableRefObject<HTMLElement | null>[] {
		if (initialValue && refs.size === 0) {
			return initialValue
		}

		if (typeof document === 'undefined') {
			return Array.from(refs)
		} else {
			return Array.from(refs).filter((ref: any) => {
				return document.contains(ref)
			})
		}
	}

	function addRef(ref: RefObject<T>): void {
		if (ref !== null) {
			refs.add(ref)
		}
	}

	return [getRefs, addRef]
}

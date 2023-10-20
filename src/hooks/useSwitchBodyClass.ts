import { useEffect } from 'react'

interface IPropsSwitchBodyClass {
	className: string
	active: boolean
}

export default function useSwitchBodyClass({ className, active }: IPropsSwitchBodyClass): void {
	useEffect(() => {
		document.body.classList.toggle(className, active)
		return () => document.body.classList.remove(className)
	}, [active, className])
}

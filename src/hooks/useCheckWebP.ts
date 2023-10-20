export default function useCheckWebP(): void {
	function testWebP() {
		return new Promise((isSupport) => {
			const webP = new Image()
			webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
			webP.onload = webP.onerror = () => {
				isSupport(webP.height === 2)
			}
		})
	}

	testWebP().then((hasWebP) => {
		const className = hasWebP ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}

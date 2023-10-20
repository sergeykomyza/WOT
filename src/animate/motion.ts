//* ======================= Параметры анимации Framer motion компонентов =============== *//

//? ПОДКЛЮЧАЕМ ФАЙЛЫ К КОМПОНЕНТУ...
//? МОДУЛИ:
// import { SwiperOptions, useTransition, i18n } from 'imports/importNpms'

//? ТИПЫ:
import type { Variants } from 'imports/importNpms'

//? Анимация страниц компонента при переключении
// предопределяем визуальные состояния, в которых может находиться компонент
const varsPages: Variants = {
	// начальное состояние
	hidden: {
		y: -20,
		opacity: 0,
	},
	// конечное состояние
	visible: {
		y: 0,
		opacity: 1,
	},
}
export const confPagesAnim = {
	initial: 'hidden',  // начальное состояние анимированного элемента
	animate: 'visible',
	variants: varsPages, // вариант
	transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
}

// предопределяем визуальные состояния, в которых может находиться компонент
export const varsText: Variants = {
	// начальное состояние
	hidden: {
		y: '10%', // смещение элемента по указанной оси
		opacity: 0,
	},
	// конечное состояние
	visible: (custom: number) => ({
		y: 0, // смещение элемента по указанной оси
		opacity: 1,
		transition: {
			delay: custom * 0.2, // задержка анимации
			duration: 1, // длительность анимации
			// type: 'tween', // логика анимации
			// ease: 'easeInOut', // изинги анимации
		},
	}),
}
export const confTextAnim = {
	initial: 'hidden', // начальное состояние анимированного элемента
	animate: 'visible', // конечное состояние анимированного элемента
	variants: varsText, //
	exit: { y: '10%', opacity: 0 }, // состояние анимированного элемента при его размантировании
}

export const confTextAnimScroll = {
	initial: 'hidden', // начальное состояние анимированного элемента
	whileInView: 'visible', // конечное состояние анимированного элемента
	variants: varsText, //
	viewport: { once: false, amount: 0.2 },
}

//? Анимация пагинации слайдера Нации, страницы Игра
// предопределяем визуальные состояния, в которых может находиться компонент
const varsPaginSliderNation: Variants = {
	// начальное состояние
	hidden: {
		y: '15%', // смещение элемента по указанной оси
		opacity: 0,
	},
	// конечное состояние
	visible: (custom: number) => ({
		y: 0, // смещение элемента по указанной оси
		opacity: 1,
		transition: {
			delay: custom * 0.2, // задержка анимации
			duration: 1, // длительность анимации
			// type: 'tween', // логика анимации
			// ease: 'easeInOut', // изинги анимации
		},
	}),
}
export const confPaginSliderNation = {
	initial: 'hidden', // начальное состояние элемента
	whileInView: 'visible', // состояние элемента зависящее от вьюпорта
	variants: varsPaginSliderNation, //
	// если элемент находится в области видимости браузера запускаем анимацию
	viewport: {
		// once: false, // запускать анимацию при скролле один раз
		amount: 0.2, // отступ тригера запуска анимации при скролле
	},
}


//? Анимация спинера секции Лучшие кланы страницы Кланы
// предопределяем визуальные состояния, в которых может находиться компонент
const varsBastClansSpiner: Variants = {
	// начальное состояние
	hidden: {
		width: 0,
		// opacity: 0,
	},
	// конечное состояние
	visible: {
		width: '100%',
		// opacity: 1,
		// transition: {
		// 	duration: 1, // длительность анимации
		// 	// type: 'tween', // логика анимации
		// 	// ease: 'easeInOut', // изинги анимации
		// },
	},
}
export const confBastClansSpinerAnim = {
	initial: 'hidden',
	animate: 'visible',
	variants: varsBastClansSpiner,
	// exit: { x: '100%', opacity: 0 },
	// exit: { height: 0, opacity: 0 },
	transition: { duration: 2, type: 'spring', stiffness: 100 },
}

//? Анимация колонок лучшие кланы
const varsBastClansItem: Variants = {
	// начальное состояние
	hidden: {
		opacity: 0,
		scale: 0,
	},
	// конечное состояние
	visible: {
		opacity: 1,
		scale: 1,
	},
}
export const confBastClansItemAnim = {
	initial: 'hidden',
	animate: 'visible',
	variants: varsBastClansItem,
	// exit: { height: 0, opacity: 0 },
	transition: { duration: 0.4 }, // длительность анимации
}





//? Анимация переворачивающихся карточек, секции , страницы Игра

// const varsFlipCardItem: Variants = {
// 	// начальное состояние
// 	hidden: {
// 		opacity: 0,
// 		scale: 0,
// 	},
// 	// конечное состояние
// 	visible: {
// 		opacity: 1,
// 		scale: 1,
// 	},
// }
// export const confFlipCardItemAnim = {
// 	initial: 'hidden',
// 	whileInView: 'visible',
// 	variants: varsFlipCardItem,
// 	// exit: { height: 0, opacity: 0 },
// 	transition: { duration: 0.4 }, // длительность анимации
// }

export const varsFrontFlipCard: Variants = {
	// начальное состояние
	hidden: {
		// y: '15%', // смещение элемента по указанной оси
		// opacity: isFrontCard ? 1 : 0,
		transform: 'rotateY(0deg)',
		// whileHover: '',
	},
	// конечное состояние
	visible: (custom: boolean) => ({
		// y: 0, // смещение элемента по указанной оси
		// opacity: isFrontCard ? 1 : 0,
		// transform: `rotateY(${isFrontCard ? 0 : 180}deg)`,
		transform: `rotateY(${custom ? 0 : 180}deg)`,
		transition: {
			// delay: 0.2, // задержка анимации
			duration: 0.5, // длительность анимации
			// type: 'tween', // логика анимации
			// ease: 'easeInOut', // изинги анимации
		},
	}),
}
export const confFrontFlipCardAnim = {
	initial: 'hidden', // начальное состояние анимируемого элемента
	animate: 'visible', // конечное состояние анимируемого элемента
	variants: varsFrontFlipCard, // свой вариант настроек начального/конечного состояния элемента
}

// предопределяем визуальные состояния, в которых может находиться анимируемый элемент
export const varsBackFlipCard: Variants = {
	// начальное состояние
	hidden: {
		// opacity: isFrontCard ? 1 : 0,
		transform: 'rotateY(180deg)',
	},
	// конечное состояние
	visible: (custom: boolean) => ({
		// opacity: isFrontCard ? 0 : 1,
		transform: `rotateY(${custom ? 180 : 360}deg)`,
		transition: {
			// delay: 0.2, // задержка анимации
			duration: 0.5, // длительность анимации
			// type: 'tween', // логика анимации
			// ease: 'easeInOut', // изинги анимации
		},
	}),
}

export const confBackFlipCardAnim = {
	initial: 'hidden', // начальное состояние анимируемого элемента
	animate: 'visible', // конечное состояние анимируемого элемента
	variants: varsBackFlipCard, // свой вариант настроек начального/конечного состояния элемента
}

// --------------------------
// //?
// // предопределяем визуальные состояния, в которых может находиться компонент
// const varsPages: Variants = {
// 	// начальное состояние
// 	hidden: { opacity: 0, x: -200, y: 0 },
// 	// конечное состояние
// 	visible: { opacity: 1, x: 0, y: 0 },
// 	exit: { opacity: 0, x: 0, y: -100 },
// }

// export const confPagesAnim = {
// 	initial: 'hidden',
// 	animate: 'visible',
// 	exit: 'exit',
// 	variants: varsBastClansSpiner,
// 	transition: { type: 'linear' }
// 	// // exit: { x: '100%', opacity: 0 },
// 	// // exit: { height: 0, opacity: 0 },
// 	// transition: { duration: 2, type: 'spring', stiffness: 100 },
// }

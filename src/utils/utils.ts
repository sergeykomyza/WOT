//* ========================= Вспомогательные ф-ции ======================== *//

import { ISO_8601_FULL } from './RegExp/RegExp'
import { ISortPropertiesConfig } from './IUtils'

export default function declensNum(num: number, dec: string[]): string {
	if (num > 100) num = num % 100
	if (num <= 20 && num >= 10) return dec[2]
	if (num > 20) num = num % 10
	return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2]
}

export const sortProperties = <T>(objectA: T, objectB: T, config: ISortPropertiesConfig<T>): number => {
	// Обьявляем указанные переменные:
	// передаем в переменную полученное значение свойства объекта-А
	const pptyA = objectA[config.property],
		// передаем в переменную полученное значение свойства объекта-Б
		pptyB = objectB[config.property],
		// возвращаем в переменную результат проверки выполнения условия: если есть доступ к локализации браузера пользователя, то получаем строку с локализацией браузера пользователя, если нет то возвращаем указанный массив с локализациями...
		lang = window.navigator ? window.navigator.language : ['en-US', 'ru-RU'],
		// передаем в переменную объект с опциями для конструктора сортировщика(Intl.Collator) и метода (localeCompare)
		optsCollator = {
			// usage: 'search', // расскоментировать для осуществления поиска совпадающих строк (по умолчанию - )
			ignorePunctuation: true, // определяем, должна ли игнорироваться пунктуация (значения: true/false, по умолчанию )
			numeric: true, // определяем, нужно ли сортировать  также числа в строках (значения: true/false, по умолчанию )
			sensitivity: 'accent', // определяем, какие различия в строках должны приводить к ненулевому результату (значения: base/accent/case/variant, по умолчанию "variant")
			// caseFirst: 'upper', // определяем, буквы какого регистра должны идти первыми — верхнего или нижнего (значения: 'upper', 'lower' и 'false', по умолчанию 'false')
		},
		// обьявляем переменную и передаем в нее экземпляр конструктора сортировщика/поисковика совпадающих строк в объектах, который принимает массив языков для определения локализации сортировки + объект с настройкамим...
		collator = new Intl.Collator(
			// определяем локализацию языков для сортировки/поиска
			lang, // пример значений: 'ru-RU' или ['en-US', 'ru-RU'], или undefined
			optsCollator // передаем в сортировщик ранее обьявленные опции сортировки
		)
	//  проверяем условие: если свойства получены, то выполняем следующее...
	if (pptyA && pptyB) {
		// проверяем условие: если полученные значения свойств являются строками и эти строки не пустые, то выполняем следующее...
		if (typeof pptyA === 'string' && typeof pptyB === 'string' && pptyA !== '' && pptyB !== '') {
			// обьявляем переменные и передаем в них строки с удаленными пробелами в начали и конце
			const strA = pptyA.trim(),
				strB = pptyB.trim()
			// проверяем условие: если браузер поддерживает Intl объект, то выполняем следующее...
			if (window.Intl) {
				// проверяем, если указанные строки содержат даты формата "ISO 8601", то выполняем следующее...
				if (checkStrСomplRegExp(strA, ISO_8601_FULL) && checkStrСomplRegExp(strB, ISO_8601_FULL)) {
					// передаем в переменную созданные из полученных строк объекты даты, приведенные к полному формату ISO 8601
					const dateA = new Date(strA).toISOString(),
						dateB = new Date(strB).toISOString()
					// возвращаем результат сравнения конструктором указанных строк в зависимости от полученых настроек в массиве "config" ({ property: 'nameProperties',isDescending: true}) переданном в ф-цию как параметр
					return config.isDescending ? collator.compare(dateB, dateA) : !config.isDescending ? collator.compare(dateA, dateB) : 0
				}
				// если нет то...
				else {
					// возвращаем результат сравнения конструктором указанных строк в зависимости от полученых настроек в массиве "config" ({ property: 'nameProperties',isDescending: true}) переданном в ф-цию как параметр
					return config.isDescending ? collator.compare(strB, strA) : !config.isDescending ? collator.compare(strA, strB) : 0
				}
			}
			// если нет, то сортировку осуществляем запасным методом localeCompare, который имеет лучшую поддержку браузерами...
			else {
				// возвращаем результат сравнения указанных строк, с учетом локазизации и полученных опций
				return config.isDescending ? strB.localeCompare(strA, lang, optsCollator) : !config.isDescending ? strA.localeCompare(strB, lang, optsCollator) : 0
				// return strA.localeCompare(strB, lang, optsCollator) === 0
			}
		}
		// если нет, то проверяем являются ли полученные значения свойств числами, если да, то выполняем следующее...
		else if (typeof pptyA === 'number' && typeof pptyB === 'number') {
			// возвращаем результат сравнения чисел в зависимости от полученых настроек в массиве "config" ({ property: 'nameProperties',isDescending: true}) переданном в ф-цию как параметр
			return config.isDescending ? pptyB - pptyA : !config.isDescending ? pptyA - pptyB : 0
		}
	}
	return 0
}

const checkStrСomplRegExp = (str: string, regExp: RegExp): boolean => regExp.test(str.trim())

export const formatStrNum = (str: string, regExp: RegExp, divider: string): string => str.replace(regExp, divider)


export const uniqueObjByPpty = <T extends { [key: string]: string }>(arr: T[], key: string): T[] => [...new Map(arr.map((item: T) => [item[key], item])).values()]

export const filterArrObjPptyValue = <T extends { [ppty: string]: string }>(arr: T[], ppty: string, pptyValue: string): T[] =>
	[...arr]
		.filter((item: T) => item[ppty] === pptyValue)

export const scrollToAnchor = (ref: React.RefObject<HTMLElement>, indentTop: number): void => {
	const anchorPosition: number | undefined = ref.current?.getBoundingClientRect().top
	anchorPosition &&
		window.scrollTo({
			top: anchorPosition - indentTop,
			behavior: 'smooth',
		})
}

export const switchVisibilityBtn = (indentTop: number): boolean => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	return scrollTop >= indentTop ? true : false
}

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}

export const filterArrObjPpty = <T extends {}>(arr: T[], ppty: string): T[] => {
	const selectedObjs: T[] = []
	arr.map((item) => {
		const filteredArray = Object.entries(item).filter(([key]) => key.includes(ppty))
		const filteredObject = Object.fromEntries(filteredArray)
		return selectedObjs.push(filteredObject as T)
	})
	//
	return selectedObjs
}

export const currentScrollY = (): number => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

export const addAventListener = <T extends EventTarget, E extends Event>(element: T, eventType: string, handler: (this: T, evt: E) => void, remove?: boolean) => {

	element.addEventListener(eventType, handler as (evt: Event) => void)

	if (remove && remove === true) {
		return () => element.removeEventListener(eventType, handler as (evt: Event) => void)
	}
}

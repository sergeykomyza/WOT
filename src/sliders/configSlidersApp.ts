//* ======================== Параметры компонента "Слайдер" =============== *//

import { SwiperOptions, i18n } from 'imports/importNpms'
import { Keyboard, Navigation, Pagination, Controller, A11y, Autoplay, EffectCreative, Thumbs } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/keyboard'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/controller'
import 'swiper/scss/a11y'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-creative'
import 'swiper/scss/thumbs'

import { filterArrObjPpty } from 'utils/utils'
import { IListTechnic, IListNation } from 'types/IApp'

const { t } = i18n

export const configSliderVitrine: SwiperOptions = {
	modules: [
		Keyboard,
		Navigation,
		Pagination,
		Controller,
		A11y,
		Autoplay,
		EffectCreative,
	],
	spaceBetween: 30,
	slidesPerView: 1,
	autoplay: {
		delay: 3500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	loop: true,
	loopedSlides: 4,
	speed: 1000,
	autoHeight: false,
	navigation: {
		nextEl: '.slider-vitrine__btn-next',
		prevEl: '.slider-vitrine__btn-prev',
	},

	pagination: {
		el: '.slider-vitrine__pagin',
		clickable: true,
		renderBullet: (index: number, className: string) => {
			return `<div class="${className}"></div>`
		}
	},
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	effect: 'creative',
	creativeEffect: {
		prev: {
			translate: [0, 0, -1],
		},
		next: {
			translate: ['100%', 0, 0],
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
		},
	},
}

export const configSliderConcept: SwiperOptions = {
	modules: [
		Autoplay,
	],
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 1,
	autoplay: {
		delay: 5500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	loop: true,
	loopedSlides: 2,
	speed: 1000,
	autoHeight: false,
	simulateTouch: false,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: false
}

export const configSliderGallery: SwiperOptions = {
	modules: [

		Keyboard,
		Navigation,
		A11y,
		Thumbs,
	],
	spaceBetween: 0,
	centeredSlides: true,
	slidesPerView: 1.35,
	slidesPerGroup: 1,
	loop: true,
	loopedSlides: 2,
	speed: 1000,
	autoHeight: false,
	navigation: {
		nextEl: '#slider-gallery-btn-next',
		prevEl: '#slider-gallery-btn-prev',
	},
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {

		320: {
			slidesPerView: 1.05,
		},
		859: {
			slidesPerView: 1.2,
		},
	},
	observer: true,
	observeParents: true,
	observeSlideChildren: true
}

export const configSliderGalleryThumbs: SwiperOptions = {
	modules: [
		Keyboard,
		A11y,
	],
	spaceBetween: 10,
	slidesPerView: 10,
	slidesPerGroup: 1,
	watchSlidesProgress: true,
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: false,
	observer: true,
	observeParents: true,
	observeSlideChildren: true
}

export const configSliderTechnic: SwiperOptions = {
	modules: [
		Navigation,
		Pagination,
		A11y,
	],
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 1,
	initialSlide: 2,
	loop: true,
	loopedSlides: 2,
	speed: 1000,
	autoHeight: false,
	navigation: {
		nextEl: '#slider-technic-btn-next',
		prevEl: '#slider-technic-btn-prev',
	},
	pagination: {
		el: '#pagin-slider-technic',
		clickable: true,
		renderBullet: (index: number, className: string) => {

			const listTechnicObj: IListTechnic[] = t('game.listTechnic', { returnObjects: true })
			const titlesTechnic = filterArrObjPpty(listTechnicObj, 'title')
			const quantitysTechnic = filterArrObjPpty(listTechnicObj, 'quantity')
			const paginationsTechnic = filterArrObjPpty(listTechnicObj, 'imgPagin')
			const paginationsTechnicWebP = filterArrObjPpty(listTechnicObj, 'imgPaginWebP')

			return `
			<div class="${className}">
				<div class="${className}__title">${titlesTechnic[index].title}</div>
				<picture>
					<source srcset="${paginationsTechnicWebP[index].imgPaginWebP}" type="image/webp">
					<img class="${className}__img" src="${paginationsTechnic[index].imgPagin}" alt="${titlesTechnic[index].title}">
				</picture>
				<div class="${className}__quantity">${quantitysTechnic[index].quantity}</div>
			</div>`
		}
	},
	simulateTouch: false,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: false,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		639: {
			slidesPerView: 1,
			 spaceBetween: 30
		},
	}
}

export const configSliderNation: SwiperOptions = {
	modules: [
		Navigation,
		Pagination,
		A11y,
	],
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	loopedSlides: 2,
	speed: 1000,
	autoHeight: false,
	navigation: {
		nextEl: '#slider-nation-btn-next',
		prevEl: '#slider-nation-btn-prev',
	},
	pagination: {
		el: '#pagin-slider-nation',
		clickable: true,
		renderBullet: (index: number, className: string) => {

			const listNationObj: IListNation[] = t('game.listNation', { returnObjects: true })
			const nationNation = filterArrObjPpty(listNationObj, 'nation')
			const quantityNation = filterArrObjPpty(listNationObj, 'quantity')
			const paginationsNation = filterArrObjPpty(listNationObj, 'imgPagin')
			const paginationsNationWebP = filterArrObjPpty(listNationObj, 'imgPaginWebP')

			return `
			<div class="${className}">
				<div class="${className}__title">${nationNation[index].nation}</div>
				<picture>
					<source srcset="${paginationsNationWebP[index].imgPaginWebP}" type="image/webp">
					<img class="${className}__img" src="${paginationsNation[index].imgPagin}" alt="${nationNation[index].nation}">
				</picture>
				<div class="${className}__quantity">${quantityNation[index].quantity}</div>
			</div>`
		}
	},
	simulateTouch: false,
	touchRatio: 1,
	touchAngle: 45,
	grabCursor: false
}

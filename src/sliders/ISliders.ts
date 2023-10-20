//* ======================================= Типизация компонента "Слайдер" ========================================*\\
import type swiper from 'swiper'

export type TSwiper = swiper & {
	slidesGrid: number[]
}
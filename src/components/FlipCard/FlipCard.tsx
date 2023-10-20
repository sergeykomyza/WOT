//* ==================================== Компонент "Переворачивающаяся карточка" ========================================*\\

import { useState, forwardRef, MouseEvent, classNames, motion, useTranslation } from 'imports/importNpms'

import { Box, MBox, Title, ImgWebP, Button, Text, IconSVG } from 'imports/importComponents'

import { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsFlipCard } from './IFlipCard'

import { confFrontFlipCardAnim, confBackFlipCardAnim } from 'animate/motion'

import './FlipCard.scss'

export const FlipCard: ForwardRefExoticComponent<IPropsFlipCard & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, card, ...attrs }, ref) => {
	const { title, backTitle, side, totalSide, backSide, img, backImg, imgWebP, backImgWebP, subtitle, backSubtitle, text, backText } = card

	const [isFrontCard, setIsFrontCard] = useState<boolean>(true)

	const classes = classNames('flip-card', className)

	const { t } = useTranslation()

	const handleClickBtnFlipCard = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		setIsFrontCard(!isFrontCard)

		e.stopPropagation()
	}

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<MBox className='flip-card-front' custom={isFrontCard} {...confFrontFlipCardAnim}>
				<Title tag='h3' className='flip-card-front__title'>
					{title}
				</Title>
				<Text className='flip-card-front__side'>
					{side}
					<Box tag='span'>{totalSide}</Box>
				</Text>
				<ImgWebP className='flip-card-front__img' width={224} height={224} src={img} srcSet={imgWebP} alt={subtitle} type='image/webp' />
				{side && side !== '' && (
					<Box className='flip-card-front-nav'>
						<Button className='flip-card-front-nav__btn-left' onClick={handleClickBtnFlipCard}>
							<IconSVG title={t('flip')} idsymbol='arrow-left' />
						</Button>
						<Button className='flip-card-front-nav__btn-right' onClick={handleClickBtnFlipCard}>
							<IconSVG title={t('flip')} idsymbol='arrow-right' />
						</Button>
					</Box>
				)}
				<Text className='flip-card-front__subtitle'>{subtitle}</Text>
				<Text className='flip-card-front__text'>{text}</Text>
			</MBox>
			<MBox className='flip-card-back' custom={isFrontCard} {...confBackFlipCardAnim}>
				<Title tag='h3' className='flip-card-back__title'>
					{backTitle}
				</Title>
				<Text className='flip-card-back__side'>
					{backSide}
					<Box tag='span'>{totalSide}</Box>
				</Text>
				<ImgWebP className='flip-card-back__img' width={224} height={224} src={backImg} srcSet={backImgWebP} alt={backSubtitle} type='image/webp' />
				<Box className='flip-card-back-nav'>
					<Button className='flip-card-back-nav__btn-left' onClick={handleClickBtnFlipCard}>
						<IconSVG title={t('flip')} idsymbol='arrow-left' />
					</Button>
					<Button className='flip-card-back-nav__btn-right' onClick={handleClickBtnFlipCard}>
						<IconSVG title={t('flip')} idsymbol='arrow-right' />
					</Button>
				</Box>
				<Text className='flip-card-back__subtitle'>{backSubtitle}</Text>
				<Text className='flip-card-back__text'>{backText}</Text>
			</MBox>
		</Tag>
	)
})

export const MFlipCard = motion(FlipCard)

//*=============================== Компонент-страница "Игра" ===============================*//

import { useState, useEffect, useRef, useTranslation, Swiper, SwiperSlide, SwiperCore, Thumbs, cookies } from 'imports/importNpms'

import { Header, Wrap, Video, Box, MBox, Title, MTitle, ImgWebP, Button, MButton, Text, MText, Section,
	Footer, ListGroup, MListGroup, ListGroupItem, IconSVG, Modal, YouTubeIframe, RepeatComponent, ScrollButton, MPage, MFlipCard, LinkTo, MLinkTo } from 'imports/importComponents'

import { configSliderConcept, configSliderGallery, configSliderGalleryThumbs, configSliderTechnic, configSliderNation } from 'sliders/configSlidersApp'
import { configYouTubeIframeModalContent } from 'components/YouTubeIframe/configsYouTubeIframe'

import { VIDEOtrailer, VIDEOtrailerWebM } from 'assets/video/importVIDEO'
import { IMGtrailer, IMGlogo_309x138, IMGlogoWebP_309x138 } from 'assets/img/importIMG'

import { IListVideo, IListConcept, IListTechnic, IListNation, IListFlipCards } from 'types/IApp'
import { TSwiper } from 'sliders/ISliders'

import { listGallery } from './dataGamePage'

import { scrollToAnchor } from 'utils/utils'

import { confPagesAnim, confTextAnimScroll } from 'animate/motion'

import './GamePage.scss'

SwiperCore.use([Thumbs])

export default function GamePage(): JSX.Element | null {
	const refСonceptTitle = useRef<HTMLElement>(null)
	const refFrameSlideGalleryThumbs = useRef<HTMLElement>(null)

	const currentLangCode = cookies.get('i18next') || 'ru'
	const { t } = useTranslation()
	const listVideoObj: IListVideo[] = t('game.listVideo', { returnObjects: true })
	const listConceptObj: IListConcept[] = t('game.listConcept', { returnObjects: true })
	const listTechnicObj: IListTechnic[] = t('game.listTechnic', { returnObjects: true })
	const listNationObj: IListNation[] = t('game.listNation', { returnObjects: true })
	const listFlipCardsObj: IListFlipCards[] = t('game.listFlipCards', { returnObjects: true })

	const [galerySlider, setGalerySlider] = useState<TSwiper | null>(null)
	const [thumbsGalerySlider, setThumbsGalerySlider] = useState<TSwiper | null>(null)
	const [scrollValFrameThumbs, setScrollValFrameThumbs] = useState(0)
	useEffect(() => {
		if (!refFrameSlideGalleryThumbs.current) return
		refFrameSlideGalleryThumbs.current.style.transform = `translateX(${scrollValFrameThumbs}px)`
	}, [scrollValFrameThumbs])

	const onSlideChange = () => {
		if (!galerySlider || !thumbsGalerySlider) return
		const valuesLocationSlideThumbs = thumbsGalerySlider.slidesGrid
		const indexSlideGalerySlider = galerySlider.realIndex
		const scrollValFrameThumbs = valuesLocationSlideThumbs.filter((item, index: number) => index === indexSlideGalerySlider)[0]
		setScrollValFrameThumbs(scrollValFrameThumbs)
	}

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [idModalContent, setIdModalContent] = useState('')
	const selectedСonfig = configYouTubeIframeModalContent.find((item) => item.id === idModalContent)
	const openModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (e.currentTarget.dataset.modal) {
			setIdModalContent(e.currentTarget.dataset.modal)
			setIsOpenModal(true)
		}
	}
	const closeModal = () => {
		setIsOpenModal(false)
	}

	return (
		<MPage className='game' {...confPagesAnim}>
			<Header listenScroll={false} />
			<Section className='release'>
				<Box className='video-box video-trailer'>
					<ListGroup className='breadcrumbs'>
						<ListGroupItem className='breadcrumbs__item'>
							<LinkTo to='/' className='breadcrumbs__link'>
								<IconSVG className='breadcrumbs__icon' title='Вернуться на главную' idsymbol='arrow-crumbs' />
								<Text tag='span' className='breadcrumbs__text'>
									{t('game.releaseBreadcrumbs_text')}
								</Text>
							</LinkTo>
						</ListGroupItem>
					</ListGroup>
					<Box className='release__info'>
						<LinkTo to='/' className='link-logo' title={t('wot') || undefined}>
							<ImgWebP className='img-logo' width={220} height={98} src={IMGlogo_309x138} srcSet={IMGlogoWebP_309x138} alt={t('wot') || undefined} />
						</LinkTo>
						<Title tag='h1' className='release__title'>
							{t('game.release_title')}
						</Title>
						<ListGroup className='release__cols'>
							{listVideoObj.map(({ id, title, img, imgWebP, iconSVGid }) => (
								<ListGroupItem className='release__col' key={id}>
									<Box className='frame'>
										<Box className='image' data-modal={id} onClick={(e) => openModal(e)}>
											<ImgWebP className='image__img' width={200} height={114} src={img} srcSet={imgWebP} alt={title} />
											<IconSVG className='image__icon' title='смотреть' idsymbol={iconSVGid} />
										</Box>
									</Box>
									<Title tag='h3' className='title-image' data-modal={id} onClick={(e) => openModal(e)}>
										{title}
									</Title>
								</ListGroupItem>
							))}
							<ListGroupItem className='release__col'>
								<Button className='release__btn' onClick={() => window.open('http://red.wargaming.net/7hbx4i30/')}>
									<Text tag='span'>{t('createAccount')}</Text>
								</Button>
								<Box className='os-icons'>
									<IconSVG className='os-icons__icon' idsymbol='windows' title='Windows OS' />
									<IconSVG className='os-icons__icon' idsymbol='mac' title='Mac OS' />
								</Box>
							</ListGroupItem>
						</ListGroup>
						<Button className='btn-scroll' onClick={() => scrollToAnchor(refСonceptTitle, 130)}>
							<Text className='btn-scroll__text'>{t('learnMore')}</Text>
							<RepeatComponent qty={3} className='btn-scroll__arrow' />
						</Button>
					</Box>
					<Video className='video-trailer' src={VIDEOtrailer} srcWebM={VIDEOtrailerWebM} poster={IMGtrailer} autoPlay loop muted></Video>
				</Box>
			</Section>
			<Section className='concept'>
				<Box className='concept__info'>
					<MTitle tag='h2' className='concept__title' ref={refСonceptTitle} {...confTextAnimScroll}>
						{t('game.concept_title')}
					</MTitle>
					<MBox className='concept__slider' {...confTextAnimScroll}>
						<Swiper
							className='slider-concept'
							{...configSliderConcept}>
							{listConceptObj.map(({ title, text }, index: number | undefined) => (
								<SwiperSlide className='slider-concept-slide' key={`slide-${index}`}>
									<Box className='slider-concept__content'>
										<Box className='slider-concept__info'>
											<Title tag='h3' className='slider-concept__title'>
												{title}
											</Title>
											<Text className='slider-concept__text'>{text}</Text>
										</Box>
									</Box>
								</SwiperSlide>
							))}
						</Swiper>
					</MBox>
					<MText className='concept__text' {...confTextAnimScroll}>
						{t('game.concept_text')}
					</MText>
				</Box>
			</Section>
			<Section className='gallery'>
				<MTitle tag='h2' className='gallery__title' {...confTextAnimScroll}>
					{t('game.gallery_title')}
				</MTitle>
				<MText className='gallery__text' {...confTextAnimScroll}>
					{t('game.gallery_text')}
				</MText>
				<MBox className='gallery__slider' {...confTextAnimScroll}>
					<Swiper
						className='slider-gallery'
						{...configSliderGallery}
						thumbs={{ swiper: thumbsGalerySlider }}
						onSwiper={(swiper) => {
							setGalerySlider(swiper as TSwiper)
						}}
						onSlideChange={onSlideChange}>
						{listGallery.map(({ id, width, height, img, imgWebP, type, alt }) => (
							<SwiperSlide className='slider-gallery-slide' key={id}>
								<Box className='slider-gallery__content content-slider-gallery'>
									<ImgWebP className='content-slider-gallery__img' width={width} height={height} src={img} srcSet={imgWebP} type={type} alt={alt} />
								</Box>
							</SwiperSlide>
						))}
						<Box className='nav-slider'>
							<Button id='slider-gallery-btn-prev' className='nav-slider__btn-prev'>
								<IconSVG title='Предыдущий слайд' idsymbol='arrow-left' />
							</Button>
							<Button id='slider-gallery-btn-next' className='nav-slider__btn-next'>
								<IconSVG title='Следующий слайд' idsymbol='arrow-right' />
							</Button>
						</Box>
					</Swiper>
					<Swiper
						id='slider-gallery-thumbs'
						className='slider-gallery-thumbs'
						{...configSliderGalleryThumbs}
						onSwiper={(swiper) => {
							setThumbsGalerySlider(swiper as TSwiper)
						}}
					>
						{listGallery.map(({ id, widthThumbs, heightThumbs, imgThumbs, imgThumbsWebP, type, altThumbs }, index: number | undefined) => (
							<SwiperSlide className='slider-gallery-thumbs-slide' key={`thumbs-${id}`}>
								<Box className='slider-gallery-thumbs__content content-slider-gallery-thumbs'>
									<ImgWebP
										width={widthThumbs}
										height={heightThumbs}
										src={imgThumbs}
										srcSet={imgThumbsWebP}
										type={type}
										alt={altThumbs}
									/>
								</Box>
							</SwiperSlide>
						))}
						<Box tag='span' ref={refFrameSlideGalleryThumbs} className='slide-frame' />
					</Swiper>
				</MBox>
			</Section>
			<Section className='technic'>
				<Wrap>
					<Box className='technic__info'>
						<MTitle tag='h2' className='technic__title' {...confTextAnimScroll}>
							{t('game.technic_title')}
						</MTitle>
						<MText className='technic__text' {...confTextAnimScroll}>
							{t('game.technic_text')}
						</MText>
					</Box>
					<Box className='technic__slider'>
						<Swiper
							className='slider-technic'
							{...configSliderTechnic}
							key={`slider-technic-${currentLangCode}`}>
							{listTechnicObj.map(({ id, imgBg, imgBgLayer, imgBgLayerWebP, title, description, quantity, type, technic, properties }) => (
								<SwiperSlide className='slider-technic-slide' key={id}>
									<Box
										className='class-technic'
										style={{
											backgroundImage: `url(${imgBg})`,
										}}>
										<ImgWebP className='class-technic__img-layer' src={imgBgLayer} srcSet={imgBgLayerWebP} alt={title} />
										<MTitle
											tag='h3'
											className='class-technic__title'
											{...confTextAnimScroll}>
											{title}
										</MTitle>
										<MText
											className='class-technic__description'
											{...confTextAnimScroll}>
											{description}
										</MText>
										<Box className='representation'>
											<MText
												className='text representation__quantity'
												{...confTextAnimScroll}>
												{quantity}
											</MText>
											<MText
												className='text representation__type'
												{...confTextAnimScroll}>
												{type}
											</MText>
											<MText
												className='text representation__technic'
												{...confTextAnimScroll}>
												{technic}
											</MText>
										</Box>
										<MListGroup
											className='properties'
											{...confTextAnimScroll}>
											{properties?.map(({ id, name, icon, iconWebP }) => (
												<ListGroupItem className='properties__item' key={id}>
													<Box className='properties__img'>
														<ImgWebP src={icon} srcSet={iconWebP} alt={name} />
													</Box>
													<Text className='properties__name'>{name}</Text>
												</ListGroupItem>
											))}
										</MListGroup>
									</Box>
								</SwiperSlide>
							))}
							<Box className='nav-slider'>
								<Button id='slider-technic-btn-prev' className='nav-slider__btn-prev'>
									<IconSVG title={t('prevSlide')} idsymbol='arrow-left' />
								</Button>
								<Button id='slider-technic-btn-next' className='nav-slider__btn-next'>
									<IconSVG title={t('nextSlide')} idsymbol='arrow-right' />
								</Button>
							</Box>
							<MBox
								id='pagin-slider-technic'
								className='pagin-slider'
								{...confTextAnimScroll}
							/>
						</Swiper>
					</Box>
				</Wrap>
			</Section>
			<Section className='nation'>
				<Wrap>
					<Box className='nation__info'>
						<MTitle
							tag='h2'
							className='nation__title'
							{...confTextAnimScroll}>
							{t('game.nation_title')}
						</MTitle>
						<MText
							className='nation__text'
							{...confTextAnimScroll}>
							{t('game.nation_text')}
						</MText>
					</Box>
					<Box className='nation__slider'>
						<Swiper
							className='slider-nation'
							{...configSliderNation}
							key={`slider-nation-${currentLangCode}`}>
							{listNationObj.map(({ id, imgFlag, imgFlagWebP, imgTanks, imgTanksWebP, nation, quantity, type, technic, altTanks }) => (
								<SwiperSlide className='slider-nation-slide' key={id}>
									<Box className='picture-slide'>
										<ImgWebP className='img-flag' src={imgFlag} srcSet={imgFlagWebP} alt={nation} />
										<ImgWebP className='img-tanks' src={imgTanks} srcSet={imgTanksWebP} alt={altTanks} />
									</Box>
									<MTitle
										tag='h3'
										className='title-slide'
										{...confTextAnimScroll}>
										{nation}
									</MTitle>
									<Box className='representation'>
										<Wrap>
											<MText
												className='representation__quantity'
												{...confTextAnimScroll}>
												{quantity}
											</MText>
											<MText
												className='representation__type'
												{...confTextAnimScroll}>
												{type}
											</MText>
											<MText
												className='representation__technic'
												{...confTextAnimScroll}>
												{technic}
											</MText>
										</Wrap>
									</Box>
								</SwiperSlide>
							))}
							<Box className='nav-slider'>
								<Button id='slider-nation-btn-prev' className='nav-slider__btn-prev'>
									<IconSVG title={t('prevSlide')} idsymbol='arrow-left' />
								</Button>
								<Button id='slider-nation-btn-next' className='nav-slider__btn-next'>
									<IconSVG title={t('nextSlide')} idsymbol='arrow-right' />
								</Button>
							</Box>
							<MBox
								id='pagin-slider-nation'
								className='pagin-slider'
								{...confTextAnimScroll}
							/>
						</Swiper>
					</Box>
				</Wrap>
			</Section>
			<Section className='regime'>
				<Wrap>
					<Box className='regime__info'>
						<MTitle
							tag='h2'
							className='regime__title'
							{...confTextAnimScroll}>
							{t('game.regime_title')}
						</MTitle>
						<MText
							className='regime__text'
							{...confTextAnimScroll}>
							{t('game.regime_text')}
						</MText>
					</Box>
					<Box className='regime__cards'>
						{listFlipCardsObj.map((card, i) => (
							<MFlipCard
								key={card.id}
								card={card}
								custom={i + 1}
								{...confTextAnimScroll}
							/>
						))}
					</Box>
				</Wrap>
			</Section>
			<Section className='invite'>
				<Box className='invite__info'>
					<MLinkTo
						to='/'
						className='link-logo invite__logo'
						{...confTextAnimScroll}>
						<ImgWebP className='img-logo' width={270} height={120} src={IMGlogo_309x138} srcSet={IMGlogoWebP_309x138} alt={t('wot') || undefined} />
					</MLinkTo>
					<MTitle
						tag='h2'
						className='invite__title'
						{...confTextAnimScroll}>
						{t('game.invite_title')}
					</MTitle>
					<MText
						className='invite__text'
						{...confTextAnimScroll}>
						{t('game.invite_text')}
					</MText>
					<MButton
						className='invite__btn'
						onClick={() => window.open('http://red.wargaming.net/7hbx4i30/')}
						{...confTextAnimScroll}>
						<Text tag='span'>{t('createAccount')}</Text>
					</MButton>
				</Box>
			</Section>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
			<Modal className='modal-wot' active={isOpenModal} onClose={closeModal}>
				<YouTubeIframe config={selectedСonfig} />
			</Modal>
		</MPage>
	)
}

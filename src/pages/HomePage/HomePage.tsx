//* ============================ Компонент-страница "Домашняя" ====================== *//

import { useState, useRef, useTranslation, Swiper, SwiperSlide, Countdown, zeroPad } from 'imports/importNpms'

import { MPage, Header, Wrap, Box, Title, ImgWebP, Button, Text, Section, Footer, ListGroup,
ListGroupItem, IconSVG, Modal, YouTubeIframe, Main, LinkTo, ScrollButton } from 'imports/importComponents'

import { configSliderVitrine } from 'sliders/configSlidersApp'
import { configYouTubeIframeModalContent } from 'components/YouTubeIframe/configsYouTubeIframe'

import { IMGlogo_640x352, IMGlogoWebP_640x352, IMGpremStore, IMGpremStoreWebP } from 'assets/img/importIMG'

import { IListSlidesVitrine, IListInteresting, IListVideo, IListStocks, IListLatestNews } from 'types/IApp'

import declensNum from 'utils/utils'

import { confPagesAnim } from 'animate/motion'

import './HomePage.scss'

export default function HomePage(): JSX.Element | null {
	const contentEl = useRef<HTMLElement>(null)

	const [isVisibleContent, setIsVisibleContent] = useState(false)

	const { t } = useTranslation()
	const listSlidesVitrineObj: IListSlidesVitrine[] = t('home.listSlidesVitrine', { returnObjects: true })
	const listInterestingObj: IListInteresting[] = t('home.listInteresting', { returnObjects: true })
	const listVideoObj: IListVideo[] = t('home.listVideo', { returnObjects: true })
	const listStocksObj: IListStocks[] = t('home.listStocks', { returnObjects: true })
	const listLatestNewsObj: IListLatestNews[] = t('home.listLatestNews', { returnObjects: true })
	const declensDeysObj = t('declensDeys', { returnObjects: true })

	const handlerСlickBtnShowContent = () => {
		setIsVisibleContent(!isVisibleContent)
	}

	const renderTimer = (days: number, hours: number, minutes: number, seconds: number) =>
		days > 0
			? days + ` ` + declensNum(days, declensDeysObj as string[])
			: hours > 0
			? `${zeroPad(hours)} ч : ${zeroPad(minutes)} мин : ${zeroPad(seconds)} с `
			: minutes > 0
			? `${zeroPad(minutes)} мин : ${zeroPad(seconds)} с `
			: `${zeroPad(seconds)} с `

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [idModalContent, setIdModalContent] = useState('')
	const selectedConfig = configYouTubeIframeModalContent.find((item) => item.id === idModalContent)

	const openModal = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		if (e.currentTarget.dataset.modal) {
			setIdModalContent(e.currentTarget.dataset.modal)
			setIsOpenModal(true)
		}
	}

	const closeModal = () => {
		setIsOpenModal(false)
	}

	return (
		<MPage className='home' {...confPagesAnim}>
			<Header />
			<Main>
				<Section className='vitrine'>
					<Wrap>
						<LinkTo to='/' className='link-logo' title={t('wot') || undefined}>
							<ImgWebP className='img-logo' width={272} height={149} src={IMGlogo_640x352} srcSet={IMGlogoWebP_640x352} alt={t('wot') || undefined} />
						</LinkTo>
						<Box className='vitrine-row'>
							<Swiper
								className='slider-vitrine'
								{...configSliderVitrine}>
								{listSlidesVitrineObj.map(({ img, imgWebP, title, url }) => (
									<SwiperSlide className='slider-vitrine-slide' key={`slide-${url}`}>
										<Box className='image-link'>
											<LinkTo href={url} className='image-link__link' target='_blank'>
												<Title tag='h3' className='image-link__title'>
													{title}
												</Title>
												<ImgWebP className='image-link__img' width={615} height={200} src={img} srcSet={imgWebP} alt={title} />
											</LinkTo>
										</Box>
									</SwiperSlide>
								))}
								<Button className='slider-vitrine__btn-prev'>
									<IconSVG title={t('prevSlide')} idsymbol='arrow-left' />
								</Button>
								<Button className='slider-vitrine__btn-next'>
									<IconSVG title={t('nextSlide')} idsymbol='arrow-right' />
								</Button>
								<Box className='slider-vitrine__pagin'></Box>
							</Swiper>
							<Box className='image-link image-link--shop'>
								<LinkTo
									className='image-link__link'
									href='https://worldoftanks.eu/b4r/4496/go?to=https://eu.wargaming.net/shop/wot/main/?utm_source=worldoftanks.eu-new&utm_medium=referral&utm_campaign=wot-portal&utm_content=PSbannert'
									target='_blank'>
									<Box className='image-link__text'>
										<IconSVG idsymbol='shop' />
										<Text tag='span'>{t('premiumShop')}</Text>
									</Box>

									<ImgWebP className='image-link__img' width={291} height={193} src={IMGpremStore} srcSet={IMGpremStoreWebP} alt='Премиум магазин' />
								</LinkTo>
							</Box>
						</Box>
					</Wrap>
				</Section>
				<Section className='latest-news'>
					<Wrap>
						<Title tag='h3' className='latest-news__title'>
							{t('latestNews')}
						</Title>
						<LinkTo className='latest-news__link' href='https://worldoftanks.eu/ru/news/' target='_blank'>
							{t('allNews')}
							<IconSVG title='смотреть' idsymbol='arrow-crumbs' />
						</LinkTo>
						<ListGroup className='latest-news__cols'>
							{listLatestNewsObj.map(({ widthImg, heightImg, img, imgWebP, title, text, url, link1Title, url1, link2Title, url2, link2IconSVGid, date }) => (
								<ListGroupItem className='latest-news__col' key={title}>
									<Box className='image-link'>
										<LinkTo className='image-link__link' href={url} target='_blank'>
											<ImgWebP className='image-link__img' width={widthImg} height={heightImg} src={img} srcSet={imgWebP} alt={title} />
										</LinkTo>
									</Box>
									<Box className='info'>
										<LinkTo className='info__link' href={url} target='_blank'>
											<Title tag='h3' className='info__title'>
												{title}
											</Title>
											<Text className='info__text'>{text}</Text>
										</LinkTo>
										<ListGroup>
											<ListGroupItem>
												<LinkTo className='info__category' href={url1} target='_blank'>
													{link1Title}
												</LinkTo>
												<Text tag='span' className='info__date'>
													{date}
												</Text>
											</ListGroupItem>
											<ListGroupItem>
												<LinkTo className='info__discuss' href={url2} target='_blank'>
													<IconSVG idsymbol={link2IconSVGid} />
													{link2Title}
												</LinkTo>
											</ListGroupItem>
										</ListGroup>
									</Box>
								</ListGroupItem>
							))}
						</ListGroup>
					</Wrap>
				</Section>
				<Section className='stocks'>
					<Wrap>
						<Title tag='h3' className='stocks__title'>
							{t('home.stocks_title')}
						</Title>
						<ListGroup
							tag='ul'
							ref={contentEl}
							className='stocks__cols'
							style={isVisibleContent ? { maxHeight: (contentEl as React.MutableRefObject<HTMLElement>).current.scrollHeight } : { maxHeight: '15rem' }}>
							{listStocksObj.map(({ img, imgWebP, title, textTimer, dateStart, url }) => (
								<Countdown
									date={new Date(`${dateStart}`)}
									key={url}
									renderer={({ days, hours, minutes, seconds, completed }) => {
										if (!completed) {
											return (
												<ListGroupItem className='stocks__col'>
													<LinkTo className='stocks__link' href={url} target='_blank'>
														<Box className='image'>
															<ImgWebP className='image__img' width={285} height={160} src={img} srcSet={imgWebP} alt={title} />
															<Title tag='h3' className='image__title'>
																{title}
															</Title>
														</Box>
														<Box className='stocks__timer'>
															<Text>{textTimer}</Text>
															<Text>
																{renderTimer(days, hours, minutes, seconds)}
															</Text>
														</Box>
													</LinkTo>
												</ListGroupItem>
											)
										}
									}}
								/>
							))}
						</ListGroup>
						<Button className='stocks__btn' onClick={handlerСlickBtnShowContent}>
							{!isVisibleContent ? t('showAll') : t('rollUp')}
							<IconSVG idsymbol='down-arrow-circle' active={isVisibleContent} />
						</Button>
					</Wrap>
				</Section>
				<Section className='videos'>
					<Wrap>
						<Title tag='h3' className='videos__title'>
							{t('home.video_title')}
						</Title>
						<LinkTo className='videos__link' href='https://worldoftanks.eu/ru/media/' target='_blank'>
							{t('home.video_link')}
							<IconSVG title='вернуться' idsymbol='arrow-crumbs' />
						</LinkTo>
						<ListGroup className='videos__cols'>
							{listVideoObj.map(({ id, title, linkTitle, iconSVGid, url, date, img, imgWebP }) => (
								<ListGroupItem className='videos__col' key={title}>
									<Box data-modal={id} className='image' onClick={(e) => openModal(e)}>
										<ImgWebP className='image__img' width={390} height={219} src={img} srcSet={imgWebP} alt={title} />
										<IconSVG className='image__icon' title='смотреть' idsymbol={iconSVGid} />
									</Box>
									<Box data-modal={id} className='info' onClick={(e) => openModal(e)}>
										<Title tag='h3' className='info__title'>
											{title}
										</Title>
										<LinkTo className='info__category' href={url} target='_blank'>
											{linkTitle}
										</LinkTo>
										<Text tag='span' className='info__date'>
											{date}
										</Text>
									</Box>
								</ListGroupItem>
							))}
						</ListGroup>
					</Wrap>
				</Section>
				<Section className='interesting'>
					<Wrap>
						<ListGroup className='interesting__cols'>
							{listInterestingObj.map(({ img, imgWebP, title, url }) => (
								<ListGroupItem className='interesting__col' key={url}>
									<Box className='image-link'>
										<LinkTo className='image-link__link' href={url} target='_blank'>
											<ImgWebP className='image-link__img' width={288} height={160} src={img} srcSet={imgWebP} alt={title} />
											<Title tag='h3' className='image-link__title'>
												{title}
											</Title>
										</LinkTo>
									</Box>
								</ListGroupItem>
							))}
						</ListGroup>
					</Wrap>
				</Section>
				<Section className='invite'>
					<Box className='invite__info'>
						<Title tag='h2' className='invite__title'>
							{t('home.invite_title')}
						</Title>
						<Text className='invite__text'>{t('home.invite_text')}</Text>
						<Button onClick={() => window.open('https://worldoftanks.eu/ru/content/docs/referral-program-regulations/')} className='invite__btn'>
							<Text tag='span'>{t('home.invite__btn')}</Text>
						</Button>
					</Box>
				</Section>
			</Main>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
			<Modal className='modal-wot' active={isOpenModal} onClose={closeModal}>
				<YouTubeIframe config={selectedConfig} />
			</Modal>
		</MPage>
	)
}

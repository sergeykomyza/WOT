//* ============================ Компонент-страница "Турниры" ====================== *//

import { Countdown, useTranslation } from 'imports/importNpms'

import { MPage, Header, Wrap, Box, Title, ImgWebP, Button, Text, Section, Footer, ListGroup, ListGroupItem, IconSVG, Main, LinkTo, ScrollButton } from 'imports/importComponents'

import declensNum from 'utils/utils'

import { IMGlogoPartner, IMGlogoPartnerWebP } from 'assets/img/importIMG'

import { IListCurrentTourneys, IListLatestNews } from 'types/IApp'

import { confPagesAnim } from 'animate/motion'

import './TourneyPage.scss'

export default function TourneyPage() {
	const { t } = useTranslation()
	const listCurrentTourneysObj: IListCurrentTourneys[] = t('tourney.listCurrentTourneys', { returnObjects: true })
	const listLatestNewsObj: IListLatestNews[] = t('tourney.listLatestNews', { returnObjects: true })
	const declensHoursObj = t('declensHours', { returnObjects: true })

	const renderTimer = (hours?: number, minutes?: number, seconds?: number) =>
		hours && hours > 0 ? hours + ` ` + declensNum(hours, declensHoursObj as string[]) : minutes && minutes > 0 ? `${minutes} мин ${seconds} с ` : seconds && `${seconds} с `

	return (
		<MPage className='tourney' { ...confPagesAnim }>
			<Header />
			<Main>
				<Section className='vitrine'>
					<Wrap>
						<Box className='vitrine-row'>
							<Text className='vitrine__subtitle'>{t('tourney.vitrine_subtitle')}</Text>
							<Text className='vitrine__text'>{t('tourney.vitrine_text')}</Text>
							<Button onClick={() => window.open('https://worldoftanks.eu/ru/content/guide/tournament-guide/')} className='vitrine__btn'>
								<Text tag='span'>{t('tourney.vitrine_btn')}</Text>
							</Button>
						</Box>
						<Box className='vitrine-row'>
							<ListGroup className='breadcrumbs'>
								<ListGroupItem className='breadcrumbs__item'>
									<LinkTo className='breadcrumbs__link' to='/'>
										{t('breadcrumbs_link')}
									</LinkTo>
									<IconSVG className='breadcrumbs__icon' title={t('toTheMainPage')} idsymbol='arrow-crumbs' />
								</ListGroupItem>
								<ListGroupItem className='breadcrumbs__item'>
									<Text tag='span' className='breadcrumbs__text'>
										{t('tourney.tournaments')}
									</Text>
								</ListGroupItem>
							</ListGroup>
							<Title tag='h1' className='vitrine__title'>
								{t('tourney.tournaments')}
							</Title>
						</Box>
					</Wrap>
				</Section>
				<Section className='current'>
					<Wrap>
						<Title tag='h3' className='current__title'>
							{t('tourney.current_title')}
						</Title>
						<LinkTo className='current__link' href='https://worldoftanks.eu/ru/tournaments/all/' target='_blank'>
							{t('tourney.current_link')}
							<IconSVG idsymbol='arrow-crumbs' />
						</LinkTo>
						<ListGroup className='current__cols'>
							{listCurrentTourneysObj.map(({ label, img, imgWebP, title, url, periodEvent, features, status, featuresHidden, dateStart }) => (
								<ListGroupItem className={`current__col ${label && 'importante'}`} key={title}>
									<Text className='current__label' tag='span'>
										{label}
									</Text>
									<Box className='current__image image-current'>
										<LinkTo className='image-current__link' href={url} target='_blank'>
											<ImgWebP src={img} srcSet={imgWebP} width={78} height={78} alt='Логотип турнира' />
										</LinkTo>
									</Box>
									<Box className='current__info info-current'>
										<LinkTo className='info-current__link' href={url} target='_blank'>
											<Title className='info-current__title' tag='h3'>
												{title}
											</Title>
											<Text className='info-current__period'>{periodEvent}</Text>
											<ListGroup className='info-current__features'>
												{features.map(({ iconSVGid, feature }, index) => (
													<ListGroupItem className='info-current__feature' key={index}>
														<IconSVG idsymbol={iconSVGid} />
														<Text tag='span'>{feature}</Text>
													</ListGroupItem>
												))}
											</ListGroup>
										</LinkTo>
										<Countdown
											date={new Date(`${dateStart}`)}
											key={url}
											renderer={({ hours, minutes, seconds, completed }) => {
												if (!completed) {
													return (
														<Box className='info-current__countdown'>
															<Text tag='div'>
																{t('tourney.infoCurrent_countdown')}
																<Text>
																	{/* вызываем выполнение ф-ции и передаем в нее указанные параметры.. */}
																	{renderTimer(hours, minutes, seconds)}
																</Text>
															</Text>
															<LinkTo href={url} target='_blank'>
																<Text tag='span'>{t('tourney.infoCurrent_link')}</Text>
															</LinkTo>
														</Box>
													)
												} else {
													return (
														<Box className='info-current__countdown-over'>
															<Text tag='div'>
																{t('tourney.infoCurrent_countdownOver')}
																<Text>{status}</Text>
															</Text>
														</Box>
													)
												}
											}}
										/>
									</Box>
									<Box className='current__features features-current'>
										<ListGroup className='features-current__list'>
											{featuresHidden.map(({ iconSVGid, title, feature }, index) => (
												<ListGroupItem className='features-current__list-item' key={index}>
													<IconSVG title={title} idsymbol={iconSVGid} />
													<Text tag='div'>
														{title}
														<Text>{feature}</Text>
													</Text>
												</ListGroupItem>
											))}
										</ListGroup>
										<LinkTo href={url} target='_blank'>
											{t('learnMore')}
											<IconSVG idsymbol='arrow-crumbs' />
										</LinkTo>
									</Box>
								</ListGroupItem>
							))}
						</ListGroup>
					</Wrap>
				</Section>
				<Section className='latest-news'>
					<Wrap>
						<Title tag='h3' className='latest-news__title'>
							{t('latestNews')}
						</Title>
						<LinkTo className='latest-news__link' href='https://worldoftanks.eu/ru/news/esports/' target='_blank'>
							{t('allNews')}
							<IconSVG idsymbol='arrow-crumbs' />
						</LinkTo>
						<ListGroup className='latest-news__cols'>
							{listLatestNewsObj.map(({ img, imgWebP, title, url, link1Title, url1, link2Title, url2, link2IconSVGid, date }) => (
								<ListGroupItem className='latest-news__col' key={title}>
									<Box className='image-link'>
										<LinkTo className='image-link__link' href={url} target='_blank'>
											<ImgWebP className='image-link__img' src={img} srcSet={imgWebP} width={277} height={158} alt={title} />
										</LinkTo>
									</Box>
									<Box className='info'>
										<LinkTo className='info__link' href={url} target='_blank'>
											<Title tag='h3' className='info__title'>
												{title}
											</Title>
										</LinkTo>
										<ListGroup>
											<ListGroupItem>
												<LinkTo className='info__category' href={url1} target='_blank'>
													{link1Title}
												</LinkTo>
												<Text className='info__date' tag='span'>
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
				<Section className='contact-us'>
					<Box className='contact-us__box'>
						<ImgWebP className='contact-us__logo-partner' src={IMGlogoPartner} srcSet={IMGlogoPartnerWebP} width={120} height={53} alt={t('WOTpartnersLogo') || ''} />
						<Title tag='h2' className='contact-us__title'>
							{t('tourney.contactUs_title')}
						</Title>
						<Text className='contact-us__subtitle'>{t('tourney.contactUs_subtitle')}</Text>
						<Text className='contact-us__text'>{t('tourney.contactUs_text')}</Text>
					</Box>
				</Section>
			</Main>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
		</MPage>
	)
}

//* ======================================= Компонент-страница "Не найдена" ========================================*\\

import { useNavigate, useTranslation } from 'imports/importNpms'

import { MPage, Header, Wrap, Box, Title, ImgWebP, Button, Text, Section, Footer, ListGroup, ListGroupItem, IconSVG, Main, LinkTo } from 'imports/importComponents'

//? ТИПЫ:
import { IListLatestNews } from 'types/IApp'

//? АНИМАЦИЯ:
import { confPagesAnim } from 'animate/motion'

//? СТИЛИ:
import './ErrorPage.scss'

export default function ErrorPage() {
	const navigate = useNavigate()

	const goBack = () => navigate(-1)

	const { t } = useTranslation()
	const listLatestNewsObj: IListLatestNews[] = t('error.listLatestNews', { returnObjects: true })

	return (
		<MPage className='error' {...confPagesAnim}>
			<Header />
			<Main>
				<Wrap>
					<Section className='vitrine'>
						<Title tag='h1' className='vitrine__title'>
							{t('pageNotFound')}
						</Title>
						<Text tag='div' className='vitrine__text'>
							<Text>{t('error.vitrine_text1')}</Text>
							<Text>
								{t('error.goToThe')}{' '}
								<LinkTo to='/' className='link-orange'>
									{t('error.mainPage')}
								</LinkTo>{' '}
								{t('error.orGo')} <Button onClick={goBack}>{t('back')}</Button>.
							</Text>
						</Text>
					</Section>
					<Section className='latest-news'>
						<Wrap>
							<Title tag='h3' className='latest-news__title'>
								{t('latestNews')}
							</Title>
							<LinkTo className='latest-news__link' href='https://tanki.su/ru/news/' target='_blank'>
								{t('allNews')}
								<IconSVG title='смотреть' idsymbol='arrow-crumbs' />
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
				</Wrap>
			</Main>
			<Footer />
		</MPage>
	)
}

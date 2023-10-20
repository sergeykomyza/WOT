//* ============================ Компонент-страница "Сообщество" ====================== *//

import { useTranslation } from 'imports/importNpms'

import { MPage, Header, Wrap, Footer, ImgWebP, Social, ListGroup, ListGroupItem, LinkTo, IconSVG, Title, Text, Box, Main, ScrollButton } from 'imports/importComponents'

import { IListСommunities, ISocialLink } from 'types/IApp'

import { IMGlogo_634x380, IMGlogoWebP_634x380 } from 'assets/img/importIMG'

import { confPagesAnim } from 'animate/motion'

import './СommunityPage.scss'

export default function СommunityPage() {
	const { t } = useTranslation()

	const listСommunitiesObj: IListСommunities[] = t('community.listСommunities', { returnObjects: true })
	const listSocialLinksObj: ISocialLink[] = t('community.listSocialLinks', { returnObjects: true })

	return (
		<MPage className='community' {...confPagesAnim}>
			<Header />
			<Main>
				<Wrap>
					<LinkTo to='/' className='link-logo' title={t('wot') || undefined}>
						<ImgWebP className='img-logo' width={317} height={190} src={IMGlogo_634x380} srcSet={IMGlogoWebP_634x380} alt={t('wot') || undefined} />
					</LinkTo>
					<ListGroup className='community__list list-community'>
						{listСommunitiesObj.map(({ title, text, img, imgWebP, url }) => (
							<ListGroupItem className='list-community__item' key={url}>
								<Box className='image-link'>
									<LinkTo className='image-link__link' href={url} target='_blank'>
										<Box className='info'>
											<Title tag='h3' className='info__title'>
												{title}
											</Title>
											<Text className='info__text'>{text}</Text>
										</Box>
										<ImgWebP className='image-link__img' width={291} height={193} src={img} srcSet={imgWebP} alt={title} />
									</LinkTo>
								</Box>
							</ListGroupItem>
						))}
						<Social tag='li' className='list-community__item'>
							<ListGroup className='social-contact__list'>
								{listSocialLinksObj.map(({ idsymbol, name, url, title, text }) => (
									<ListGroupItem className='social-contact__item' key={url}>
										<LinkTo href={url} className='social-contact__link' target='_blank'>
											<IconSVG className={`social-contact__icon-${name}`} title={name} idsymbol={idsymbol} />
											<Box className='social-contact__info'>
												<Title tag='h3'>{title}</Title>
												<Text>{text}</Text>
											</Box>
										</LinkTo>
									</ListGroupItem>
								))}
							</ListGroup>
						</Social>
					</ListGroup>
				</Wrap>
			</Main>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
		</MPage>
	)
}

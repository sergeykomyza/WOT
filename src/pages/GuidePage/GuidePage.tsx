//* ============================ Компонент-страница "Рукаводства" ====================== *//

import { NavLink, useTranslation } from 'imports/importNpms'

import { MPage, Header, Section, Footer, ImgWebP, ListGroup, ListGroupItem, LinkTo, IconSVG, Title, Text, Box, Main, Accordion, ScrollButton } from 'imports/importComponents'

import { IMGarrow, IMGarrowWebP } from 'assets/img/importIMG'

import { IListGuide } from 'types/IApp'

import { confPagesAnim } from 'animate/motion'

import './GuidePage.scss'

export default function GuidePage() {

	const { t } = useTranslation()
	const listGuideObj: IListGuide[] = t('guide.listGuide', { returnObjects: true })

	return (
		<MPage className='guide' {...confPagesAnim}>
			<Header />
			<Main>
				<Section className='vitrine'>
					<ListGroup className='breadcrumbs'>
						<ListGroupItem className='breadcrumbs__item'>
							<LinkTo className='breadcrumbs__link' to='/'>
								{t('breadcrumbs_link')}
							</LinkTo>
						</ListGroupItem>
					</ListGroup>
					<Title tag='h1' className='guide__title'>
						{t('guides')}
					</Title>
				</Section>
				<ListGroup className='list-guide'>
					{listGuideObj.map(({ title, text, url, imgBg }) => (
						<ListGroupItem
							className='list-guide__item'
							key={url}
							style={{
								backgroundImage: `url(${imgBg})`,
							}}>
							<LinkTo href={url} className='list-guide__link' target='_blank'>
								<Title tag='h3' className='list-guide__title'>
									{title}
									<ImgWebP width={15} height={18} src={IMGarrow} srcSet={IMGarrowWebP} alt={t('doubleArrow') || ''} />
								</Title>
								<Text className='list-guide__text'>{text}</Text>
							</LinkTo>
						</ListGroupItem>
					))}
				</ListGroup>
				<Box tag='aside' className='guide__sidebar sidebar-guide'>
					<Text className='sidebar-guide__title'>
						<NavLink to='/guide'>{t('guides')}</NavLink>
					</Text>
					<Accordion className='sidebar-guide__links links-sidebar-guide' />
				</Box>
				<Box className='nav-guide'>
					<Title tag='h4' className='nav-guide__title'>
						{t('guides')}
					</Title>
					<LinkTo href='https://tanki.su/ru/content/guide/qs_guide/' target='_blank'>
						{t('guide.navGuide_link')}
						<IconSVG idsymbol='arrow-crumbs' />
					</LinkTo>
				</Box>
			</Main>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
		</MPage>
	)
}

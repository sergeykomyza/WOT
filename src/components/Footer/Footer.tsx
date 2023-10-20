//* ======================================= Компонент "Нижний колонтитул" ========================================*\\

import { forwardRef, classNames, motion, useState, useRef, useTranslation, cookies } from 'imports/importNpms'

import { Wrap, ImgWebP, Button, ListGroup, ListGroupItem, NavMenu, Copyright, LinkTo, Title, Text, Social, Box, IconSVG, LangPanel } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IProrsFooter } from './IFooter'
import { ISocialLink, IRoutesFooterNav, IListLangs } from 'types/IApp'

import { IMGlogoWG, IMGlogoWGWebP } from 'assets/img/importIMG'

import { useClickTrackingOutside } from 'hooks/useClickTrackingOutside'

import './Footer.scss'

export const Footer: ForwardRefExoticComponent<IProrsFooter & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'footer', className, children, ...attrs }, ref) => {
	const classes = classNames('footer', className)

	const [isVisibleLangPanel, setIsVisibleLangPanel] = useState(false)
	const refLangPanel = useRef<HTMLElement | null>(null)
	const refBtnlang = useRef<HTMLElement>(null)

	useClickTrackingOutside([refLangPanel], () => setIsVisibleLangPanel(false), isVisibleLangPanel, [refBtnlang])

	const switchLangPanel = () => {
		setIsVisibleLangPanel(!isVisibleLangPanel)
	}

	const { t } = useTranslation()
	const listLangsObj: IListLangs[] = t('footer.listLangs', { returnObjects: true })
	const routesFooterNavObj: IRoutesFooterNav[] = t('footer.routesFooterNav', { returnObjects: true })
	const listSocialLinksFooterObj: ISocialLink[] = t('footer.listSocialLinksFooter', { returnObjects: true })

	const currentLangCode = cookies.get('i18next') || 'ru'

	let indexObj = listLangsObj.findIndex((item) => item.code.toLowerCase() === currentLangCode.toLowerCase())

	const lang = listLangsObj[indexObj].name

	const langContinent = listLangsObj[indexObj].continent.split(':').join('')

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<Wrap>
				<LangPanel
					ref={refLangPanel}
					active={isVisibleLangPanel}
					className='lang-panel'
					cb={setIsVisibleLangPanel}
					style={isVisibleLangPanel ? { maxHeight: (refLangPanel as React.MutableRefObject<HTMLElement>).current.scrollHeight } : { maxHeight: '0rem' }}
				/>
				<Box className='footer__info'>
					<Title tag='h4'>{t('footer.info_title')}</Title>
					<Text>{t('footer.info_subtitle')}</Text>
				</Box>
				<Social className='social-contact footer__social-contact'>
					<ListGroup className='social-contact__list'>
						{listSocialLinksFooterObj.map(({ idsymbol, name, url, title, text }) => (
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
				<Box className='logo'>
					<LinkTo className='link-logo' href='https://wargaming.net/' target='_blank'>
						<ImgWebP className='img-logo' width={101} height={54} src={IMGlogoWG} srcSet={IMGlogoWGWebP} alt='WARGAMING.NET' />
					</LinkTo>
				</Box>
				<NavMenu className='nav-footer'>
					<ListGroup className='nav__list'>
						{routesFooterNavObj.map(({ name, url }) => (
							<ListGroupItem className='nav__item' key={url}>
								<LinkTo className='nav__link link-nav' href={url} target='_blank'>
									{t(name)}
								</LinkTo>
							</ListGroupItem>
						))}
					</ListGroup>
				</NavMenu>
				<Box className='lang'>
					<Button ref={refBtnlang} className='lang__btn' onClick={switchLangPanel}>
						<IconSVG idsymbol='lang' title='регион' />
						<Text tag='span'>
							{langContinent} ({lang})
						</Text>
						<IconSVG className={isVisibleLangPanel ? 'active' : ''} idsymbol='arrow-crumbs' title='выбрать' />
					</Button>
				</Box>
				<Copyright>
					© 2009–2022{' '}
					<LinkTo className='copyright__link' href='http://wargaming.net' target='_blank'>
						Wargaming.net{' '}
					</LinkTo>
					{t('footer.copyright')} Powered by BigWorld Technology™ © 12+ Developed by{' '}
					<LinkTo className='copyright__link' href='https://github.com/LoktionovTEAM' target='_blank'>
						Loktionov<span>TEAM</span>
						<sup>&#xA9;</sup>
					</LinkTo>
				</Copyright>
			</Wrap>
		</Tag>
	)
})

export const MFooter = motion(Footer)

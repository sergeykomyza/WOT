//* ==================================== Компонент "Мобильное меню" ========================================*\\

import { forwardRef, classNames, motion, useState, useEffect, NavLink, useScrollbarSize, useTranslation, cookies } from 'imports/importNpms'

import { ListGroup, ListGroupItem, LinkTo, IconSVG, Text, Box, Button, NavMenu } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IRoutesApp } from 'types/IApp'
import { IPropsMobileMenu } from './IMobileMenu'

import { addAventListener } from 'utils/utils'

import './MobileMenu.scss'

export const MobileMenu: ForwardRefExoticComponent<IPropsMobileMenu & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, active, onClick, children, ...attrs }, ref) => {
	const body: HTMLElement = document.body

	const currentLangCode = cookies.get('i18next') || 'ru'

	const { width, height } = useScrollbarSize()

	const { t } = useTranslation()

	const routesAppObj: IRoutesApp[] = t('header.routesApp', { returnObjects: true })

	const navList = routesAppObj.slice(1, -1)

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const [levelNesting, setlevelNesting] = useState<number>(1)

	const [currentNavMenu, setCurrentNavMenu] = useState<IRoutesApp[][]>([navList])

	const [selectedLang, setSelectedLang] = useState(currentLangCode)

	if (selectedLang !== currentLangCode) {
		setCurrentNavMenu(() => [...[], navList])

		setSelectedLang(currentLangCode)
	}

	const classes = classNames(
		'mobile-menu',
		className,

		{ active: isOpen }
	)

	const handlerClickBtnOpenMenu = () => {
		setIsOpen(true)

		!isOpen && body && body.classList.add('lock')

		if (body && body.classList.contains('lock')) {
			if (width) {
				body.style.marginRight = width + 'px'
			}

			if (height) {
				body.style.marginBottom = height + 'px'
			}
		}
	}

	const resLevelNesting = () => setlevelNesting(1)

	const handlerClickBtnCloseMenu = () => {
		setIsOpen(false)

		setTimeout(resLevelNesting, 1000)

		isOpen && body && body.classList.remove('lock')

		if (body && !body.classList.contains('lock')) {
			if (width) {
				body.style.marginRight = ''
			}

			if (height) {
				body.style.marginBottom = ''
			}
		}
	}

	const selectLevelNesting = (levelNesting: number, navList?: IRoutesApp[]) => {
		if (!navList) {
			return
		}

		setlevelNesting(levelNesting + 1)
		setCurrentNavMenu((l) => {
			l[levelNesting] = navList
			return l
		})
	}

	const backLevelNesting = () => {
		if (!navList) {
			return
		}

		setlevelNesting(levelNesting - 1)
		setCurrentNavMenu((l) => {
			l[levelNesting] = []
			return l
		})
	}

	useEffect(() => {
		addAventListener(window, 'resize', resetNav, true)
	}, [])

	const resetNav = () => {
		!isOpen && setIsOpen(false)

		setTimeout(resLevelNesting, 1000)

		body && body.classList.contains('lock') && body.classList.remove('lock')
	}

	const handlerClickMenuLink = () => {
		isOpen && body && body.classList.remove('lock')
	}

	return (
		<>
			<Button className='btn-burger' onClick={handlerClickBtnOpenMenu}>
				<Box tag='span' className='btn-burger__line'></Box>
			</Button>
			<Tag ref={ref} className={classes} {...attrs}>
				<Box className='mobile-menu__cover' onClick={handlerClickBtnCloseMenu} active={isOpen} />
				<Box className='mobile-menu__content' active={isOpen}>
					<Box className='content-mobile-menu__header'>
						{levelNesting > 1 && (
							<Button className='mobile-menu__btn-back' onClick={() => backLevelNesting()}>
								<IconSVG idsymbol='arrow-crumbs' title={t('back')} />
								<Text>{t('back')}</Text>
							</Button>
						)}
						{levelNesting === 1 && <Text>{t('menu')}</Text>}
						<Button className='mobile-menu__btn-close' onClick={handlerClickBtnCloseMenu}>
							<IconSVG idsymbol='close' title={t('close')} />
						</Button>
					</Box>
					<NavMenu
						className='content-mobile-menu__nav'
						style={{
							transform: `translateX(calc(-100% * ${levelNesting - 1}))`,
						}}>
						{currentNavMenu.map((route, index) => (
							<ListGroup className='nav-content-mobile-menu__list' key={index}>
								{route.map(({ name, path, submenu }, index) => (
									<ListGroupItem className='nav-content-mobile-menu__item' key={path}>
										{path && levelNesting === 1 ? (
											<NavLink to={path} className='nav-content-mobile-menu__link' onClick={handlerClickMenuLink}>
												{name}
											</NavLink>
										) : (
											<LinkTo href={path} className='nav-content-mobile-menu__link' target='_blanck' onClick={handlerClickBtnCloseMenu}>
												{name}
											</LinkTo>
										)}
										{submenu && submenu.length > 0 && (
											<Button className='nav-content-mobile-menu__btn' onClick={() => selectLevelNesting(levelNesting, submenu)}>
												<IconSVG idsymbol='down-arrow' title='смотреть' />
											</Button>
										)}
									</ListGroupItem>
								))}
							</ListGroup>
						))}
					</NavMenu>
				</Box>
			</Tag>
		</>
	)
})

export const MMobileMenu = motion(MobileMenu)

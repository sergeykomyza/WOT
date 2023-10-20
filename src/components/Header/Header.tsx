//* ======================================= Компонент "Верхний колонтитул" ========================================*\\

import { forwardRef, classNames, motion, useState, useEffect, MouseEvent, NavLink, useTranslation, MutableRefObject, RefObject } from 'imports/importNpms'

import { Wrap, Button, Text, ListGroup, ListGroupItem, IconSVG, NavMenu, MobileMenu, LinkTo } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IProrsHeader } from './IHeader'
import { IRoutesApp } from 'types/IApp'

import { useClickTrackingOutside } from 'hooks/useClickTrackingOutside'
import { useFixingHeaderScrollUp } from 'hooks/useFixingHeaderScrollUp'
import useMultiRefs from 'hooks/useMultiRefs'

import { addAventListener, currentScrollY } from 'utils/utils'

import './Header.scss'

export const Header: ForwardRefExoticComponent<IProrsHeader & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'header', className, listenScroll = true, children, ...attrs }, ref) => {
	const { t } = useTranslation()
	const routesAppObj: IRoutesApp[] = t('header.routesApp', { returnObjects: true })

	const navList = routesAppObj.slice(1, -1)

	const [fnGetSubmenus, fnAddSubmenus] = useMultiRefs<HTMLElement | null>(null)
	const [fnGetBtnSubmenus, fnAddBtnSubmenus] = useMultiRefs<HTMLElement | null>(null)

	const [refsSubmenu, setRefsSubmenu] = useState<HTMLElement | RefObject<HTMLElement | null>[] | null>(null)
	const [refsBtnSubmenu, setRefsBtnSubmenu] = useState<HTMLElement | RefObject<HTMLElement | null>[] | null>(null)
	useEffect(() => {
		setRefsSubmenu(fnGetSubmenus())
		setRefsBtnSubmenu(fnGetBtnSubmenus())
	}, [])

	const [clickedSubmenu, setClickedSubmenu] = useState<number>(-1)
	const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false)

	const toggleSubmenu = (e: MouseEvent<HTMLElement | HTMLAnchorElement>, index: number) => {
		e.preventDefault()
		e.stopPropagation()
		if (clickedSubmenu === index) {
			setIsOpenSubmenu(false)
			return setClickedSubmenu(-1)
		}
		setClickedSubmenu(index)
		setIsOpenSubmenu(true)
	}

	useClickTrackingOutside(
		refsSubmenu as RefObject<HTMLElement | null>[] | MutableRefObject<HTMLElement | null>[] | null,
		() => {
			setClickedSubmenu(-1)
			setIsOpenSubmenu(false)
		},
		isOpenSubmenu,
		refsBtnSubmenu as RefObject<HTMLElement | null>[] | MutableRefObject<HTMLElement | null>[] | null | undefined
	)

	const [isFixed, isScrollUp] = useFixingHeaderScrollUp(listenScroll, 100, true)

	useEffect(() => {
		const closeSubmenuByScroll = () => {
			refsSubmenu &&
				refsSubmenu instanceof Array &&
				refsSubmenu.map((item) => {
					return currentScrollY() > 0 && setClickedSubmenu(-1)
				})
		}

		addAventListener(window, 'scroll', closeSubmenuByScroll, true)
	}, [refsSubmenu])

	const classes = classNames('header', className, { fixed: isFixed }, { 'scroll-up': isScrollUp })

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<Wrap>
				<LinkTo to='/' className='link-logo'>
					<IconSVG className='icon-logo' idsymbol='logo-wot' title={t('wot')} />
				</LinkTo>
				<NavMenu className='header__nav'>
					<ListGroup className='nav__list'>
						{navList.map(({ name, path, submenu }, index) => (
							<ListGroupItem className='nav__item' key={path} active={clickedSubmenu === index}>
								<NavLink to={path} className='nav__link link-nav'>
									{name}
									{submenu && submenu.length > 0 && (
										<Button tag='span' ref={fnAddBtnSubmenus} className='link-nav__btn' onClick={(e) => toggleSubmenu(e, index)} active={clickedSubmenu === index}>
											<IconSVG idsymbol={clickedSubmenu !== index ? 'down-arrow' : 'up-arrow'} />
										</Button>
									)}
								</NavLink>
								{submenu && submenu.length > 0 && (
									<ListGroup className='item__list' ref={fnAddSubmenus} active={clickedSubmenu === index}>
										{submenu?.map(({ name, path }) => (
											<ListGroupItem key={path}>
												<LinkTo href={path} target='_blank'>
													{name}
												</LinkTo>
											</ListGroupItem>
										))}
									</ListGroup>
								)}
							</ListGroupItem>
						))}
					</ListGroup>
				</NavMenu>
				<Button className='header__btn' onClick={() => window.open('http://red.wargaming.net/7hbx4i30/')}>
					<Text tag='span'>{t('createAccount')}</Text>
				</Button>
				<MobileMenu />
			</Wrap>
		</Tag>
	)
})

export const MHeader = motion(Header)

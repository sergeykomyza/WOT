//* ============================ Компонент-страница "Кланы" ====================== *//

import { React, useState, useEffect, useRef, useTranslation, AnimatePresence } from 'imports/importNpms'

import { useAppDispatch, useAppSelector } from 'hooks/reduxUseHooks'
import { useClickTrackingOutside } from 'hooks/useClickTrackingOutside'

import {
	MPage,
	Header,
	Wrap,
	Section,
	Footer,
	ImgWebP,
	ListGroup,
	ListGroupItem,
	MListGroupItem,
	LinkTo,
	IconSVG,
	Title,
	Text,
	Box,
	Main,
	Button,
	Form,
	Input,
	MSpinner,
	ScrollButton,
} from 'imports/importComponents'

import { IResourcesClans, IListBestClans, IClan } from 'types/IApp'

import { fetchClans, setSearchValue, autocompleteSearch, filterClans, clearSearchValue } from 'store/slice/clansSlice'

import { IMGlogo_634x380, IMGlogoWebP_634x380 } from 'assets/img/importIMG'
import { spaceInNum } from 'utils/RegExp/RegExp'

import { confPagesAnim, confBastClansSpinerAnim, confBastClansItemAnim, confTextAnim } from 'animate/motion'

import './ClansPage.scss'

import { sortProperties, formatStrNum } from 'utils/utils'

export default function ClansPage(): JSX.Element {
	const dispatch = useAppDispatch()

	const { t } = useTranslation()
	const clansObj: IClan[] = t('clans.clans', { returnObjects: true })
	const resourcesClansObj: IResourcesClans[] = t('clans.resourcesClans', { returnObjects: true })
	const listBestClansObj: IListBestClans[] = t('clans.listBestClans', { returnObjects: true })

	const { clansLoading, clansError, clansSearchValue, selectedClans } = useAppSelector((state) => state.clans)

	useEffect(() => {
		dispatch(fetchClans())
	}, [dispatch])

	const [isOpenSearchAutocomplete, setIsOpenSearchAutocomplete] = useState(false)

	const onChangeHandlerInputSearch: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(e.target.value))
		dispatch(filterClans())
	}

	const handlerClickInputSearch: React.MouseEventHandler<HTMLInputElement> = () => {
		setIsOpenSearchAutocomplete(true)
	}

	const handlerClickItemAutocompleteSearch: React.MouseEventHandler<HTMLLIElement> = (e: React.MouseEvent<HTMLElement | HTMLAnchorElement>) => {
		dispatch(autocompleteSearch((e.target as HTMLElement).textContent!))
		dispatch(filterClans())
		setIsOpenSearchAutocomplete(false)
	}

	const refAutocomplete = useRef<HTMLElement>(null)
	useClickTrackingOutside([refAutocomplete], () => setIsOpenSearchAutocomplete(false), isOpenSearchAutocomplete)

	const sortBestClans = (property: string, isDescending: boolean) =>
		[...clansObj]
			.sort((a, b): number =>
				sortProperties<IClan>(a, b, {
					property: property as keyof IClan,
					isDescending: isDescending,
				})
			)
			.slice(0, 5)

	const formatNumBestClans = (property: string, CR: string, aBD: string, wGM: string): React.ReactNode =>
		property === 'CR' ? formatStrNum(CR, spaceInNum, ' ') : property === 'aBD' ? aBD : property === 'wGM' && formatStrNum(wGM, spaceInNum, ' ')

	return (
		<MPage className='clans' {...confPagesAnim}>
			<Header />
			<Main>
				<Section className='vitrine'>
					<Wrap>
						<LinkTo to='/' className='link-logo' title={t('wot') || undefined}>
							<ImgWebP className='img-logo' width={317} height={190} src={IMGlogo_634x380} srcSet={IMGlogoWebP_634x380} alt={t('wot') || undefined} />
						</LinkTo>
						<Box className='vitrine__row'>
							<Title tag='h1' className='vitrine__title'>
								{t('clans.vitrine_title')}
							</Title>
							<Text className='vitrine__subtitle'>{t('clans.vitrine_subtitle')}</Text>
							<Box className='vitrine__btns'>
								<Button
									onClick={() =>
										window.open(
											'https://eu.wargaming.net/clans/wot/find_clan/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing&_gl=1*1oqdwr8*local_ga*NTQ0MTcwNzYxLjE2NzA5MjIwNjI.*local_ga_JXR7Q0F7EQ*MTY3MTA5NDgxMi4xMy4xLjE2NzEwOTYzNzMuNDQuMC4w'
										)
									}
									className='vitrine__btn-pickup'>
									<Title tag='span'>{t('clans.vitrine_btnPickup')}</Title>
								</Button>
								<Button
									onClick={() =>
										window.open(
											'https://eu.wargaming.net/clans/wot/create/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing&_gl=1*1how5ht*local_ga*NTQ0MTcwNzYxLjE2NzA5MjIwNjI.*local_ga_JXR7Q0F7EQ*MTY3MTA5NDgxMi4xMy4xLjE2NzEwOTcxOTEuNTkuMC4w'
										)
									}
									className='vitrine__btn-create'>
									<Text tag='span'>{t('clans.vitrine_btnCreate')}</Text>
								</Button>
							</Box>
							<Box className='divider'></Box>
							<LinkTo className='vitrine__link' href='https://lesta.ru/clans/wot/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing' target='_blank'>
								{t('clans.vitrine_linkPortal')}
							</LinkTo>
							<Form
								className='form-search'
								method='get'
								action={
									clansSearchValue &&
									`https://eu.wargaming.net/clans/wot/search/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing#wgsearch&search=${clansSearchValue}&clans-game=wot&type=all`
								}
								target='_blank'
								rel='noopener'
								role='search'>
								<Input
									id='searh-clans'
									className='form-controls'
									value={clansSearchValue}
									placeholder={t('clans.searhClans_placeholder') || ''}
									maxLength={200}
									onChange={onChangeHandlerInputSearch}
									onClick={handlerClickInputSearch}
									autoComplete='off'
								/>
								{clansSearchValue && <IconSVG className='form-search__icon-clear' title={t('clans.formSearch_iconСlear')} idsymbol='del' onClick={() => dispatch(clearSearchValue())} />}
								{clansSearchValue && isOpenSearchAutocomplete ? (
									<ListGroup className='form-search__autocomplete' ref={refAutocomplete}>
										{selectedClans.map(({ id, name, acronym, url }: IClan) => (
											<ListGroupItem className='form-search__autocomplete-item' onClick={handlerClickItemAutocompleteSearch} key={id}>
												<LinkTo href={url} target='_blank'>
													{acronym + name}
												</LinkTo>
											</ListGroupItem>
										))}
									</ListGroup>
								) : null}
								<LinkTo
									className='form-search__btn'
									href='https://eu.wargaming.net/clans/wot/search/?utm_campaign=wot-portal&utm_medium=button&utm_source=clan-landing&_gl=1*10i29j9*local_ga*NDc2ODU0NDkyLjE2NjYyODk0Mjg.*local_ga_JXR7Q0F7EQ*MTY2OTYzNzAwNS4xMjkuMS4xNjY5NjM3MDE0LjUxLjAuMA..#wgsearch&search=&clans-game=wot&type=all'
									target='_blank'
									title={t('clans.formSearch_btn') || undefined}
								/>
							</Form>
						</Box>
					</Wrap>
				</Section>
				<Wrap>
					<Section className='resources'>
						<Box className='resources__cols'>
							{resourcesClansObj.map(({ id, link, linkTitle, title, features, img, imgWebP, alt }) => (
								<Box className='resources__col' key={id}>
									<Box className='resources__image'>
										<LinkTo href={link} title={alt} target='_blank' />
										<ImgWebP src={img} srcSet={imgWebP} alt={alt} />
									</Box>
									<Box className='resources__view'>
										<Box className='resources__view-item' key={link}>
											<Title tag='h3' className='resources__title'>
												{title}
											</Title>
											<ListGroup className='resources__features'>
												{features?.map((feature, index) => (
													<ListGroupItem className='resources__features-item' key={id + index}>
														{feature}
													</ListGroupItem>
												))}
											</ListGroup>
										</Box>
										<LinkTo href={link} className='resources__view-link' target='_blank'>
											{linkTitle}
										</LinkTo>
									</Box>
								</Box>
							))}
						</Box>
						<Box className='resources__box-link'>
							<LinkTo className='resources__link' href='https://lesta.ru/globalmap/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing' target='_blank'>
								{t('clans.resources_link')}
							</LinkTo>
						</Box>
					</Section>
					<Section className='best-clans'>
						<Title tag='h2' className='best-clans__title'>
							{t('clans.bestClans_title')}
						</Title>
						<ListGroup className='best-clans__cols'>
							{listBestClansObj.map(({ id, title, icon, iconWebP, alt, url, property, isDescending }) => (
								<ListGroupItem className='best-clans__col' key={id}>
									<Box className='title-col'>
										<ImgWebP className='title-col__icon' src={icon} srcSet={iconWebP} alt={alt} title={alt} />
										<Text className='title-col__text'>{title}</Text>
									</Box>
									<ListGroup tag='ol' className='best-clans__list'>
										<AnimatePresence initial={false}>
											{clansLoading === 'loading' ? (
												<MSpinner {...confBastClansSpinerAnim} />
											) : clansLoading === 'resolved' ? (
												sortBestClans(property, isDescending).map(({ id, acronym, name, url, CR, aBD, wGM }) => (
													<MListGroupItem key={id} className='best-clans__item' {...confBastClansItemAnim}>
														<LinkTo className='best-clans__name' href={url} target='_blank'>
															<Text tag='span' className='best-clans__acronum'>
																{t(acronym)}
															</Text>
															{t(name)}
														</LinkTo>
														<Text tag='span' className='best-clans__value'>
															{formatNumBestClans(property, CR, aBD, wGM)}
														</Text>
													</MListGroupItem>
												))
											) : (
												clansError && (
													<MListGroupItem className='best-clans__item reset' {...confTextAnim}>
														{t('clans.bestClans_itemError')}
													</MListGroupItem>
												)
											)}
										</AnimatePresence>
									</ListGroup>
									<LinkTo className='best-clans__link' href={url} target='_blank'>
										{t('clans.bestClans_link')}
									</LinkTo>
								</ListGroupItem>
							))}
						</ListGroup>
					</Section>
					<Section className='invite'>
						<Title tag='h3' className='invite__text'>
							{t('clans.invite_text')}
						</Title>
						<Button
							className='invite__btn'
							onClick={() =>
								window.open(
									'https://eu.wargaming.net/clans/wot/find_clan/?utm_campaign=wot-portal&utm_medium=link&utm_source=clan-landing&_gl=1*aofep4*local_ga*NTQ0MTcwNzYxLjE2NzA5MjIwNjI.*local_ga_JXR7Q0F7EQ*MTY3MTEyMzUzNS4xNi4xLjE2NzExMjU0NDYuNTguMC4w'
								)
							}>
							<Text tag='span'>{t('clans.invite_btn')}</Text>
						</Button>
					</Section>
				</Wrap>
			</Main>
			<Footer />
			<ScrollButton indentTop={550}>
				<IconSVG title={t('up')} idsymbol='double-up-arrow' />
			</ScrollButton>
		</MPage>
	)
}

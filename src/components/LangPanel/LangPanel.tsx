//* ============================================ Компонент "Языковая панель" ========================================*\\

import { forwardRef, classNames, useTranslation, motion, cookies } from 'imports/importNpms'

import { Wrap, Box, Button, Text, ListGroup, ListGroupItem, IconSVG } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsLangPanel } from './ILangPanel'
import { IListLangs } from 'types/IApp'

import { uniqueObjByPpty, filterArrObjPptyValue } from 'utils/utils'

import './LangPanel.scss'

export const LangPanel: ForwardRefExoticComponent<IPropsLangPanel & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'div', className, active = false, cb, children, ...attrs }, ref) => {
	const classes = classNames(className, { active })

	const { t, i18n } = useTranslation()

	const listLangsObj: IListLangs[] = t('footer.listLangs', { returnObjects: true })

	const switchLangPanel = () => {
		cb?.(!active)
	}

	const changeLanguage = (lang: string): void => {
		i18n.changeLanguage(lang)
	}

	const currentLangCode = cookies.get('i18next') || 'ru'

	const listLangContinents = uniqueObjByPpty(listLangsObj, 'continent')

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<Wrap>
				<Button className='btn-close' onClick={switchLangPanel}>
					<IconSVG idsymbol='close-modal' title={t('close')} />
				</Button>
				<Box className='lang-panel__info'>
					<Text tag='div' className='lang-panel__text'>
						<Text className='lang-panel__title'>{t('footer.langPanel_title')}</Text>
						<Text className='lang-panel__subtitle'>{t('footer.langPanel_subtitle')}</Text>
					</Text>
					<Box className='underline' />
				</Box>
				<ListGroup className='lang-panel__cols'>
					{listLangContinents.map(({ id, continent }) => (
						<ListGroupItem className='lang-panel__col' key={id}>
							<Text className='lang-panel__continent'>{continent}</Text>
							<ListGroup className='list-lang'>
								{filterArrObjPptyValue(listLangsObj, 'continent', continent).map(({ id, name, code, disabled }) => (
									<ListGroupItem className='list-lang__item' key={id}>
										<Button className='list-lang__btn' onClick={() => changeLanguage(code)} active={currentLangCode === code} disabled={Boolean(disabled)}>
											<Text tag='span'>{name}</Text>
										</Button>
									</ListGroupItem>
								))}
							</ListGroup>
						</ListGroupItem>
					))}
				</ListGroup>
			</Wrap>
		</Tag>
	)
})

export const MLangPanel = motion(LangPanel)

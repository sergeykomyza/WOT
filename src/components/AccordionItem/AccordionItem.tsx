//* ============================================ Компонент "элемент Аккордеона" ========================================*\\

import { forwardRef, useState, useEffect, useRef, classNames, motion, useTranslation } from 'imports/importNpms'

import { ListGroup, ListGroupItem, LinkTo, IconSVG, Title, Box, Button, AccordionItemContent } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsAccordionItem } from './IAccordionItem'

import './AccordionItem.scss'

export const AccordionItem: ForwardRefExoticComponent<IPropsAccordionItem & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'li', className, item, active, onToggle, children, ...attrs }, ref) => {
	const { title, url, content } = item

	const [isActive, setIsActive] = useState<boolean | undefined>()

	const { t } = useTranslation()

	useEffect(() => {
		setIsActive(active)
	}, [active])

	const contentEl = useRef<HTMLElement>(null)

	const classes = classNames('accordion__item', className, active)

	const classBtn = classNames(
		'header-accordion__btn',

		active && (className = 'active')
	)

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			<Box className='accordion__header header-accordion'>
				{content?.length > 0 && (
					<Button className={classBtn} onClick={onToggle}>
						<IconSVG title={active ? t('rollUp') : t('showAll')} idsymbol='triangle-right' />
					</Button>
				)}
				<Title tag='h3' className='header-accordion__title'>
					<LinkTo href={url} target='_blank'>
						{title}
					</LinkTo>
				</Title>
			</Box>
			<AccordionItemContent ref={contentEl} active={isActive}>
				<ListGroup className='guide-links'>
					{content.map((item) => (
						<ListGroupItem className='guide-links__link' key={item.url}>
							<LinkTo href={item.url} target='_blank'>
								{item.title}
							</LinkTo>
						</ListGroupItem>
					))}
				</ListGroup>
			</AccordionItemContent>
		</Tag>
	)
})

export const MAccordionItem = motion(AccordionItem)

//* ============================================ Компонент "Аккордеон" ========================================*\\

import { forwardRef, useState, classNames, motion, useTranslation } from 'imports/importNpms'

import { AccordionItem } from 'imports/importComponents'

import type { ForwardRefExoticComponent, RefAttributes } from 'imports/importNpms'
import { IPropsAccordion } from './IAccordion'
import { IListAccordion } from 'types/IApp'

export const Accordion: ForwardRefExoticComponent<IPropsAccordion & RefAttributes<unknown>> = forwardRef(({ tag: Tag = 'ul', className, children, ...attrs }, ref) => {
	const classes = classNames('accordion', className)

	const [clicked, setClicked] = useState(0)

	const { t } = useTranslation()

	const listAccordionObj: IListAccordion[] = t('guide.listAccordion', { returnObjects: true })

	const handleToggle = (index: number) => {
		if (clicked === index) {
			return setClicked(0)
		}

		setClicked(index)
	}

	return (
		<Tag ref={ref} className={classes} {...attrs}>
			{children}
			{listAccordionObj.map((item, index) => (
				<AccordionItem className='links-sidebar-guide__item' item={item} onToggle={() => handleToggle(index)} active={clicked === index} key={index}></AccordionItem>
			))}
		</Tag>
	)
})

export const MAccordion = motion(Accordion)

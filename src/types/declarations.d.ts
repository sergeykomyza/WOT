declare global {
	namespace JSX {
		// добавляем указанные типы в список доступных
		interface IntrinsicAttributes extends React.Attributes {
			// тут указываем имя и тип пользовательского атрибута который хотим использовать в компоненте
			// loading?: 'auto' | 'eager' | 'lazy'
			custom?: number | boolean | undefined // не обязательный, число
		}
	}
}


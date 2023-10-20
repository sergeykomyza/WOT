//* =========================== Мультиязычность приложения =============================*\\

import { i18n, initReactI18next, LanguageDetector, HttpApi } from '../imports/importNpms'

export default i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init(
		{
			supportedLngs: ['cs', 'fr', 'ru', 'de', 'it', 'tr', 'en-GB', 'hu', 'uk', 'es', 'pl', 'en', 'es-US', 'pt-BR', 'en-IN', 'zh-SG', 'ja', 'zh-TW', 'ko', 'vi', 'th'],
			fallbackLng: 'ru',

			ns: ['translation'],
			defaultNS: 'translation',
			keySeparator: '.',
			interpolation: {
				escapeValue: false,
			},
			detection: {
				order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],

				caches: ['cookie'],
			},
			backend: {
				loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
			},
		},

		(err, t) => {
			if (err) return console.log('что-то пошло не так при загрузке...', err)
			t('key')
		}
	)

import HomePage from 'pages/HomePage'
import GamePage from 'pages/GamePage'
import GuidePage from 'pages/GuidePage'
import ClansPage from 'pages/ClansPage'
import TourneyPage from 'pages/TourneyPage'
import СommunityPage from 'pages/СommunityPage'
import ErrorPage from 'pages/ErrorPage'
import { IRoutesApp } from 'types/IApp'

export const routesApp: IRoutesApp[] = [
	{
		name: 'Главная',
		path: '/',
		Element: HomePage,
	},
	{
		name: 'Игра',
		path: '/game',
		Element: GamePage,
		submenu: [
			{
				name: 'Скачать игру',
				path: 'https://worldoftanks.eu/ru/game/download/',

			},
			{
				name: 'Активировать бонус-код',
				path: 'https://eu.wargaming.net/shop/redeem/?utm_content=bonus-code&link_place=wotp_link_main-menu',

			},
			{
				name: 'Новости',
				path: 'https://worldoftanks.eu/ru/news/',

			},
			{
				name: 'Последние изменения',
				path: 'https://worldoftanks.eu/ru/content/docs/release_notes/',

			},
			{
				name: 'Рейтинги',
				path: 'https://worldoftanks.eu/ru/ratings/',

			},
			{
				name: 'Танковедение',
				path: 'https://worldoftanks.eu/ru/tankopedia/',

			},
			{
				name: 'Музыка',
				path: 'https://worldoftanks.eu/ru/content/music/',

			},
		],
	},
	{
		name: 'Руководства',
		path: '/guide',
		Element: GuidePage,
		submenu: [
			{
				name: 'Новичку',
				path: 'https://worldoftanks.eu/ru/content/guide/newcomers-guide/',

			},
			{
				name: 'Основное',
				path: 'https://worldoftanks.eu/ru/content/guide/general/',

			},
			{
				name: 'Игровая экономика',
				path: 'https://worldoftanks.eu/ru/content/guide/wot_economy/',

			},
			{
				name: 'Безопасность',
				path: 'https://worldoftanks.eu/ru/content/guide/account_security/',

			},
			{
				name: 'Достижения',
				path: 'https://worldoftanks.eu/ru/content/guide/general/achievements/',

			},
			{
				name: 'Играем по правилам',
				path: 'https://worldoftanks.eu/ru/content/guide/fair_play/',

			},
			{
				name: 'Wargaming.net Game Center',
				path: 'https://worldoftanks.eu/ru/content/guide/general/wgc_guide/',
			},
			{
				name: 'Руководства по танкам',
				path: 'https://worldoftanks.eu/ru/content/guide/tank-manuals/',
			},
			{
				name: 'Руководство по Twitch Drops',
				path: 'https://worldoftanks.eu/ru/content/guide/twitch-drops/',
			},
		],
	},
	{
		name: 'Кланы',
		path: '/clans',
		Element: ClansPage,
		submenu: [
			{
				name: 'Укрепрайон',
				path: 'https://worldoftanks.eu/ru/clanwars/strongholds/',

			},
			{
				name: 'Глобальная карта',
				path: 'https://eu.wargaming.net/globalmap/?link_place=wotp_link_main-menu',

			},
			{
				name: 'Рейтинг кланов',
				path: 'https://eu.wargaming.net/clans/wot/leaderboards/?link_place=wotp_link_main-menu',

			},
			{
				name: 'Клановый портал',
				path: 'https://eu.wargaming.net/clans/wot/?link_place=wotp_link_main-menu',
			},
		],
	},
	{
		name: 'Турниры',
		path: '/tourney',
		Element: TourneyPage,
	},
	{
		name: 'Сообщество',
		path: '/community',
		Element: СommunityPage,
		submenu: [
			{
				name: 'Мой профиль',
				path: 'https://worldoftanks.eu/ru/community/accounts/show/me/',
			},
			{
				name: 'Поиск игроков',
				path: 'https://worldoftanks.eu/ru/community/accounts/',

			},
			{
				name: 'Пригласить друга',
				path: 'https://worldoftanks.eu/content/docs/referral-program-regulations/',

			},
			{
				name: 'Форум',
				path: 'http://forum.worldoftanks.eu/index.php?/forum/3162-ru-forum//&link_place=wotp_link_main-menu',

			},
			{
				name: 'Портал модов',
				path: 'https://wgmods.net/?link_place=wotp_link_main-menu',

			},
			{
				name: 'Медиа',
				path: 'https://worldoftanks.eu/ru/media/',

			},
			{
				name: 'Полезный софт',
				path: 'https://worldoftanks.eu/ru/content/soft/',

			},
		],
	},
	{
		name: 'Not Found',
		path: '*',
		Element: ErrorPage,
	},
]

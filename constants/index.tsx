import { ParagraphSize } from '@/components/shared/paragraph';
import { BsBank } from 'react-icons/bs';
import { PiComputerTower } from 'react-icons/pi';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { RiProductHuntLine } from 'react-icons/ri';
import { FaWpforms } from 'react-icons/fa6';
import { LiaQuestionSolid } from 'react-icons/lia';

export const testimonialsMoving = [
	{
		image:
			'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f6b531d39278175132f0df78d35a2e8/1c6e6dccc3a48eb3a4606105e1649ead9029ab21fd07a770521d2b10304aec1f.jpg.webp',
		price: '127 999',
		title: 'Смартфон Apple iPhone 17 Pro 256 ГБ оранжевый',
	},
	{
		image:
			'https://c.dns-shop.ru/thumb/st1/fit/500/500/c2f3c159d518c32a053347ce855eebf6/3f07b1ffa9193a775d83d5a74fa818307037b9e0cf34e51a18ac31304fceefb9.jpg.webp',
		price: '145 999',
		title: 'Смартфон Apple iPhone 17 Pro 512 ГБ серебристый',
	},
	{
		image:
			'https://c.dns-shop.ru/thumb/st1/fit/500/500/6908dbc5933c57d838f947b330178dbc/14ce8c6a5fbaef30feb3cb6b7d742546c045c44eb9207be4acec68cade72a7cf.jpg.webp',
		price: '71 299',
		title: 'Смартфон Apple iPhone 16 128 ГБ черный',
	},
	{
		image:
			'https://c.dns-shop.ru/thumb/st1/fit/500/500/b07cd25f3942541b6c15f68862852c60/1c011e50364ca06348e7158c1c9075a3a580dcfc8054cf47cf76558f20c344c6.jpg.webp',
		price: '88 299',
		title: 'Смартфон Apple iPhone 17 256 ГБ голубой',
	},
	{
		image:
			'https://c.dns-shop.ru/thumb/st1/fit/500/500/c8d5f22a0cc641945da745d765069b23/784b5beffd77d54adcc86eb8360fd7009563b974774f85f9cadb0aa57efab4ff.jpg.webp',
		price: '124 499',
		title: 'Смартфон Apple iPhone 16 Pro Max 256 ГБ серый',
	},
];

type PeopleUrl = string;

export const PEOPLE_URL: PeopleUrl[] = [
	'/person-1.png',
	'/person-2.png',
	'/person-3.png',
	'/person-4.png',
];

// PRODUCTS
interface AdditionalInformation {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	alt: string;
	link: string;
	width: string;
}

export const additionalInformation: AdditionalInformation[] = [
	{
		id: 1,
		title: 'Разработка веб-сайтов',
		description: 'Создаем современные веб-сайты для вашего бизнеса',
		imageUrl: './IT_Digital.webp',
		alt: 'Вклад 22,8% годовых',
		link: '/web-development-agencies',
		width: '500px',
	},
	{
		id: 2,
		title: 'Техническое обслуживание',
		description: 'Техническое обслуживание компьютеров, камер и офисной техники',
		imageUrl: './img/6998fb9e1a46c0c079cb432b3dq.webp',
		alt: 'Переводы быез комиссии',
		link: '/service',
		width: '400px',
	},
];

// Интерфейс описания данных сервиса
interface ServiceData {
	iconColors: string;
	title: string;
	description: string;
	price: string;
	features: string[];
	svgPath: string;
}

// Тип для ключа карты
type ServiceName = string;

// Карта с описанием всех наших сервисов
export const servicesMap: Map<ServiceName, ServiceData> = new Map([
	[
		'Компьютеры и ноутбуки',
		{
			iconColors: 'from-blue-500 to-blue-600',
			title: 'Компьютеры и ноутбуки',
			description: 'Диагностика, ремонт, модернизация, установка ПО, восстановление данных',
			price: 'от 500 ₽',
			features: [
				'Чистка от пыли и замена термопасты',
				'Ремонт материнских плат',
				'Апгрейд комплектующих',
			],
			svgPath:
				'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
		},
	],
	[
		'Видеонаблюдение',
		{
			iconColors: 'from-cyan-500 to-cyan-600',
			title: 'Видеонаблюдение',
			description: 'Установка, настройка и обслуживание систем видеонаблюдения любой сложности',
			price: 'от 2 000 ₽',
			features: ['IP и аналоговые камеры', 'Удалённый доступ', 'Облачное хранение'],
			svgPath:
				'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
		},
	],
	[
		'Офисная техника',
		{
			iconColors: 'from-purple-500 to-purple-600',
			title: 'Офисная техника',
			description: 'Ремонт и обслуживание принтеров, МФУ, сканеров, копировальных аппаратов',
			price: 'от 1300 ₽',
			features: ['Заправка картриджей', 'Ремонт печки и барабана', 'Профилактика'],
			svgPath:
				'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
		},
	],
	[
		'Сети и Wi-Fi',
		{
			iconColors: 'from-green-500 to-green-600',
			title: 'Сети и Wi-Fi',
			description: 'Проектирование, монтаж и настройка локальных сетей и Wi-Fi покрытий',
			price: 'от 1 500 ₽',
			features: ['Прокладка кабеля', 'Настройка роутеров', 'VPN и безопасность'],
			svgPath:
				'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
		},
	],
	[
		'Восстановление данных',
		{
			iconColors: 'from-orange-500 to-orange-600',
			title: 'Восстановление данных',
			description: 'Восстановление информации с любых носителей: HDD, SSD, флешки, карты памяти',
			price: 'от 2 500 ₽',
			features: ['Удалённые файлы', 'После форматирования', 'Повреждённые диски'],
			svgPath:
				'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
		},
	],
	[
		'IT-аутсорсинг',
		{
			iconColors: 'from-pink-500 to-pink-600',
			title: 'IT-аутсорсинг',
			description: 'Полное техническое сопровождение вашего бизнеса на постоянной основе',
			price: 'от 15 000 ₽/мес',
			features: ['Круглосуточная поддержка', 'Выезд специалиста', 'Фиксированная стоимость'],
			svgPath:
				'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
		},
	],
]);

export const testimonials = [
	{
		quote:
			'Spectrum UI is a game-changer! Its components are so well-designed and customizable that it made our app look polished and professional in no time.',
		name: 'Ananya Gupta',
		designation: 'Frontend Engineer, NovaTech',
		src: 'https://basket-18.wbbasket.ru/vol2877/part287729/287729999/images/big/1.webp',
	},
	{
		quote:
			'I love the simplicity and minimalism of Spectrum UI. The components are intuitive and fit seamlessly into our existing projects.',
		name: 'Sophia Allen',
		designation: 'UI/UX Designer, Creatify',
		src: 'https://basket-16.wbbasket.ru/vol2570/part257019/257019308/images/big/1.webp',
	},
	{
		quote:
			'As a junior developer, Spectrum UI has been a lifesaver. The documentation is straightforward, and the components work flawlessly with Tailwind CSS.',
		name: 'Ethan Rodriguez',
		designation: 'Software Engineer, CodeWorks',
		src: 'https://basket-13.wbbasket.ru/vol2006/part200601/200601778/images/big/1.webp',
	},
	{
		quote:
			'The integration with Shadcn made it super easy to customize the components. Spectrum UI is now a must-have in our tech stack.',
		name: 'Priya Sharma',
		designation: 'Full Stack Developer, Innovate Labs',
		src: 'https://basket-16.wbbasket.ru/vol2540/part254045/254045118/images/big/1.webp',
	},
];

export const data = [
	{
		quote:
			"The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
		name: 'Sarah Chen',
		designation: 'Product Manager at TechFlow',
		src: 'https://smartbank.uz/_next/image?url=%2Fassets%2Fimages%2Factual-now%2Fpromo-news.webp&w=640&q=75',
	},
	{
		quote:
			"Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
		name: 'Michael Rodriguez',
		designation: 'CTO at InnovateSphere',
		src: 'https://smartbank.uz/_next/image?url=%2Fassets%2Fimages%2Factual-now%2Fsmartbank-limit_ru.webp&w=640&q=75',
	},
	{
		quote:
			"This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
		name: 'Emily Watson',
		designation: 'Operations Director at CloudScale',
		src: 'https://smartbank.uz/_next/image?url=%2Fassets%2Fimages%2Factual-now%2Fsmartbazar.webp&w=640&q=75',
	},
];

export const todolist = [
	{
		title: 'Почему выбирают именно нас?',
		content: `
    <ul class="list-disc text-base list-inside" style="list-style-type: circle">
    <li>Полное сопровождение: от идеи до запуска и поддержки</li>
    <li>Индивидуальный подход: учитываем особенности вашего бизнеса и рынка</li>
    <li>Современные технологии: используем только проверенные и актуальные инструменты</li>
    <li>Гарантия результата: ваш сайт работает на вас</li>
    </ul>
    `,
	},
	{
		title: 'Наш процесс разработки',
		content: `
      <ul class="list-disc text-base list-inside" style="list-style-type: circle">
        <li>Обсуждение проекта и требований</li>
        <li>Создание прототипа и дизайн-макета</li>
        <li>Разработка и программирование</li>
        <li>Тестирование и исправление ошибок</li>
        <li>Передача проекта заказчику и запуск</li>
        <li>Послепродажное обслуживание и поддержка</li>
      </ul>
    `,
	},
	{
		title: 'Обновленный пример раздела:',
		content: `
    <ul class="list-disc text-base list-inside" style="list-style-type: circle">
      <li>Полное сопровождение: от идеи до запуска и поддержки</li>
      <li>Индивидуальный подход: учитываем особенности вашего бизнеса и рынка</li>
      <li>Современные технологии: используем только проверенные и актуальные инструменты</li>
      <li>Гарантия результата: ваш сайт работает на вас</li>
      <li>Конкурентные цены и прозрачная стоимость</li>
      <li>Быстрые сроки выполнения: проект за 1-2 недели (при необходимости!)</li>
      <li>Гибкое сотрудничество: индивидуальные условия оплаты и работы</li>
      <li>Обучение и инструкции: мы поможем вам управлять сайтом самостоятельно</li>
    </ul>
    `,
	},
];

export const additionalInformationPlan = [
	{
		title: 'Рассрочка «Мурабаха»',
		content: `
    <ul class="list-disc text-base px-6">
     <li class="mb-3">Исламская рассрочка «мурабаха» позволяет купить необходимые товары или услуги без начисления процентов и соблюдения строгих банковских требований</li>
     <li class="mb-3">Справедливость и честность. <br/> Оплата осуществляется фиксированными платежами без скрытых комиссий и переплат</li>
     <li class="mb-3">Соответствие религиозным нормам. <br/> Такой способ приобретения соответствует правилам ислама, запрещающим ростовщичество</li>
     <li class="mb-3">Доступность. <br/> Рассрочка доступна широким слоям населения, даже тем, кто не имеет официальной занятости или кредитной истории</li>
     <li class="mb-3">Гарантированная стабильность графика оплаты помогает планировать бюджет без неожиданных расходо</li>
    </ul>
    `,
	},

	{
		title: 'Принцип работы исламской рассрочки',
		content: `
    <ul class="list-disc text-base px-6">
     <li class="mb-3">Внимательно прочитайте договор, особое внимание уделите пунктам о валюте и возможных изменениях рынка</li>
     <li class="mb-3">Выберите надежного партнера, имеющего сертификат соответствия требованиям Шариата</li>
     <li class="mb-3">Прочтите отзывы клиентов и убедитесь в надежности компании</li>
     <li class="mb-3">Определите свой бюджет заранее, чтобы обеспечить своевременные и комфортные платежи</li>
    </ul>
    `,
	},
	{
		title: 'Хотите начать?',
		content: `
     <ul class="list-disc text-base px-6">
     <li class="mb-3">Узнайте подробности на странице нашего маркетплейса</li>
     <li class="mb-3">Воспользуйтесь удобным калькулятором рассрочки</li>
     <li class="mb-3">Сделайте первый шаг навстречу своей мечте уже сегодня</li>
    </ul>
    <p class="text-base max-w-lg mt-5 px-3">
      Оформляя нашу исламскую рассрочку, вы выбираете честность, доступность и абсолютную защищенность ваших средств. Начните новый этап осознанных покупок с нами
    </p>
    `,
	},
];

export const accordionItems = [
	{
		title: 'Цифровая платформа для Республики',
		content: `
      <p class="text-base px-3">
     Это передовая цифровая экосистема, объединяющая людей и открывающая новые горизонты возможностей. Мы обеспечиваем каждому жителю республики легкий доступ к широкому ассортименту товаров независимо от его местоположения. Наша главная задача — содействовать запуску и росту малого и среднего бизнеса, помогая каждому реализовать свои идеи и достигать новых успехов
      </p>
    `,
	},
	{
		title: 'Быстрая доставка',
		content: `
      <p class="text-base px-3">
      У нас есть быстрая доставка по республике, что позволяет вам получать заказы в кратчайшие сроки. Мы заботимся о вашем комфорте и стремимся обеспечить максимально оперативное обслуживание, чтобы ваши покупки были удобными и своевременными
      </p>
    `,
	},
];

export const accordionItemsList = [
	{
		title: 'Какая финальная стоимость?',
		content: `
      <p class="text-base px-3">
       Разработка сайта зависит от многих факторов, таких как количество страниц, анимаций и функционала который должен быть применен к сайту.
      </p>
    `,
	},
	{
		title: 'Какой срок создания сайта?',
		content: `
      <p class="text-base px-3">
        Вы становитесь партнером банка, который использует ваши средства для этичных и халяльных проектов, а вы получаете доход в зависимости от реальной прибыли.
      </p>
    `,
	},
	{
		title: 'Какие сайты мы можем создать?',
		content: `
      <p class="text-base px-3">
        Вы становитесь партнером банка, который использует ваши средства для этичных и халяльных проектов, а вы получаете доход в зависимости от реальной прибыли.
      </p>
    `,
	},
	{
		title: 'Какое обслуживание после запуска?',
		content: `
      <p class="text-base px-3">
        Вы становитесь партнером банка, который использует ваши средства для этичных и халяльных проектов, а вы получаете доход в зависимости от реальной прибыли.
      </p>
    `,
	},
	{
		title: 'Как получить бесплатный макет?',
		content: `
      <p class="text-base px-3">
        Вы становитесь партнером банка, который использует ваши средства для этичных и халяльных проектов, а вы получаете доход в зависимости от реальной прибыли.
      </p>
    `,
	},
];

export const whatweoffer = [
	{
		bgColor: '#041121',
		textColor: 'text-white',
		title: 'Наша миссия',
		description:
			'Мы создаём возможности для вашего комфорта и стиля. Предлагаем невероятный ассортимент качественных товаров по выгодным ценам и сервис, который превзойдёт ожидания',
	},
	{
		bgColor: '#E2E8F0',
		textColor: 'text-gray-800',
		title: 'Что ждёт вас в ibrmarket ?',
		description:
			'Всё для вашей мечты: электроника, бытовая техника, одежда, аксессуары и гаджеты. Мы отбираем только проверенные бренды – качество, надёжность и экономия гарантированы',
	},
	{
		bgColor: '#E2E8F0',
		textColor: 'text-gray-800',
		title: 'Почему выбирают нас?',
		description:
			'Ваш комфорт – наш приоритет! Безопасные, быстрые покупки с гарантией качества и поддержкой на каждом шагу',
	},
	{
		bgColor: '#E2E8F0',
		textColor: 'text-gray-800',
		title: 'Готовы начать?',
		description:
			'Вопросы? Напишите на support@ibr-market.com или заполните форму на сайте. Присоединяйтесь к тысячам довольных клиентов – ваш следующий шопинг ждёт',
	},
	{
		bgColor: '#041121',
		textColor: 'text-white',
		title: 'Наши преимущества',
		description:
			'В ibrmarket мы предлагаем быструю доставку по республике, гибкие способы оплаты и лёгкий возврат. Наслаждайтесь эксклюзивными скидками для постоянных клиентов и нашей заботой об окружающей среде через экологичные упаковки',
	},
];

export const greatDeals = [
	{
		title: 'Выгодные условия покупки',
		description:
			'Благодаря сотрудничеству с большим количеством продавцов, вы можете оформить рассрочку практически на любую понравившуюся вещь',
		imageUrl: '/6998fb991a46c0c079cb4307.webp',
	},
	{
		title: 'Нас выбирают за внимание и заботу',
		description:
			'Каждый клиент для нас особенный, ведь вы — наши друзья. Мы искренне заинтересованы в вашем успехе и комфорте, помогая подобрать оптимальные условия рассрочки и сделать покупку именно той вещью мечты, которую вы заслуживаете',
		imageUrl: '/6998fba11a46c0c079cb434f.webp',
	},
];

export const aboutagency = [
	{
		title: 'Все началось с желания превосходить другие агентства',
		description:
			'Мы видели, как многие создают сайты с устаревшим дизайном, плохо продуманной структурой и неудобной навигацией',
	},
	{
		title: 'Это побудило нас искать индивидуальные подходы к каждому клиенту',
		description:
			'Наша команда начала разрабатывать современные сайты, которые отличаются удобством и высокой результативностью, чтобы достигать максимальных целей',
	},
	{
		title: 'Использование современных технологий',
		description:
			'Мы применяем передовые технологии и тренды, чтобы ваши сайты были не только красивыми, но и технологически актуальными',
	},
];

export const additionalservices = [
	{
		title: 'Безопасность и гарантии',
		description:
			'В ibrmarket мы заботимся о вашей безопасности: все транзакции защищены шифрованием, а товары проходят проверку на подлинность. Гарантия возврата в течение 14 дней – ваш покой гарантирован',
	},
	{
		title: 'Удобный сайт',
		description:
			'Наш сайт – это ваш личный шопинг-центр: интуитивный интерфейс, быстрый поиск по категориям и персональные рекомендации. Доступен 24/7 с любого устройства – покупайте без ограничений',
	},
	{
		title: 'Доставка до двери',
		description:
			'При оформлении до 20:00. Более поздние заказы доставим завтра. Время и место можно выбрать после подачи заявки',
	},
];

export const decisionData3 = [
	{
		title: 'Надёжность и честность',
		description:
			'Мы строим нашу работу на прочном фундаменте прозрачности и этичности, соблюдая все религиозные и законодательные нормы, чтобы вы чувствовали полное спокойствие и доверие',
	},
	{
		title: 'Отбор лучших товаров',
		description:
			'Каждый продукт тщательно проверяется и сертифицируется, чтобы вы могли быть уверены в качестве и соответствии стандартам халяль',
	},
	{
		title: 'Соответствие нормам шариата',
		description:
			'Мы гарантируем полное соблюдение исламических принципов во всех наших сервисах, чтобы сделки были честными и безупречными',
	},
	{
		title: 'Удобство и доступность платформы',
		description:
			'Наш сервис прост и понятен для каждого — даже если вы впервые пользуетесь интернет-магазином, покупка пройдёт легко и приятно',
	},
];

export const tiers = [
	{
		name: 'Одностраничный сайт',
		id: '1',
		href: '#',
		priceMonthly: '70000 ₽',
		description:
			'Эти сайты часто называют лендинг-пейджами. Они позволяют удобно и лаконично представить несколько товаров или услуг, ведь всё важное размещается на одной странице, обеспечивая быстрый и понятный просмотр для посетителя',
		features: ['Сайт одностраничный', 'Премиальный дизайн', 'SEO оптимизация'],
		featured: false,
	},

	{
		name: 'Интернет-Магазин',
		id: '2',
		href: '#',
		priceMonthly: '180000 ₽',
		description:
			'Интернет-магазины имеют определенный функционал: структуру с разделами, корзину, товарные карточки, форму оформления заказа, интеграцию с почтой и платежные системы для получения платежей.',
		features: [
			'Сайт многостраничный',
			'Премиальный дизайн',
			'Расширенная аналитика',
			'SEO оптимизация',
		],
		featured: true,
	},

	{
		name: 'Многостраничный сайт',
		id: '3',
		href: '#',
		priceMonthly: '90000 ₽',
		description:
			'Сайт состоит из двух и более страниц. Дополнительные страницы помогут органично продвигать сайт в поисковой выдаче так же улучшит взаимодействие клиента с функционалом сайта.',
		features: ['Сайт многостраничный', 'Премиальный дизайн', 'SEO оптимизация'],
		featured: false,
	},
];

export const islamicInstallmentPlan = [
	{
		id: 1,
		image: '/6998fb423b0b9d654e41ef0f.webp',
		title: 'Отсутствие процентов',
		description:
			'Вам не придется платить лишние деньги — только честные выплаты в удобное для вас время',
		bgColor: 'bg-gray-900',
		textColor: 'text-white',
	},
	{
		id: 2,
		image: '/6998fb594ce7086d267ea759.webp',
		title: 'Гибкие условия',
		description: 'Вы сами выбираете срок и сумму рассрочки, делая платежи максимально комфортными',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-gray-800',
	},
	{
		id: 3,
		image: '/6998fb5a4ce7086d267ea76b.webp',
		title: 'Прозрачность и честность',
		description: 'Вся информация о платежах открыта и понятна с первого шага',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-gray-800',
	},
	{
		id: 4,
		image: '/6998fb5b4ce7086d267ea77d.webp',
		title: 'Поддержка',
		description:
			'Наша команда всегда готова помочь вам на каждом этапе, чтобы сделать покупку максимально удобной',
		bgColor: 'bg-gray-900',
		textColor: 'text-white',
	},
];

export const productfinancing = [
	{
		imageUrl: '/img/6998feefregtjkerjh4uib8e2bbb4b1a5b762a5d.webp',
		title: 'Выберите товар',
		description: 'По выгодной цене в нашем магазине',
	},
	{
		imageUrl: '/img/6998fb9eqw241a46c0c079cb432b.webp',
		title: 'На сумму до 150 000 ₽',
		description: 'С договором мурабаха',
	},
	{
		imageUrl: '/img/6998f1b9e23211a46c0c079cb432b.webp',
		title: 'Заполните анкету',
		description: 'Это займет не более 2 минут',
	},
	{
		imageUrl: '/img/699213gt8fb961a46c0c079cb42e3.webp',
		title: 'Остались вопросы?',
		description: 'Наш менеджер свяжется с вами в течение 10 минут',
	},
];

export const content = {
	title: 'Рассрочка без банка',
	description: [
		'1) У нас есть уникальное предложение — исламская рассрочка без штрафов и процентов',
		'2) Вы можете приобрести необходимый товар прямо сейчас и платить удобными частями, полностью освобожденными от любых дополнительных затрат',
		'3) Это отличная возможность сделать выгодную покупку без лишних финансовых нагрузок',
		'4) Не упустите шанс приобрести желаемое уже сегодня и наслаждаться качеством по доступной цене',
	],
	buttonText: 'Подробнее',
};

export const pricingdata = [
	{
		title: 'Индивидуальные услуги',
		services: [
			{ service: 'Создание отдельного блока', price: 'от 2500 ₽' },
			{
				service: 'Формирование политики приватности и cookies',
				price: 'от 2000 ₽',
			},
			{ service: 'Регистрация нового доменного имени', price: 'от 2000 ₽' },
			{ service: 'Обустройство парковки домена', price: 'от 800 ₽' },
			{ service: 'Организация парковки хостинга', price: 'от 2500 ₽' },
			{ service: 'Интеграция карты Google либо Yandex', price: 'от 2500 ₽' },
			{
				service: 'Оптимизация внешнего вида ресурса в поисковиках Google и Yandex',
				price: 'от 4000 ₽',
			},
			{
				service: 'Проектировка логотипа (услуга сервисного типа)',
				price: 'от 5000 ₽',
			},
			{
				service: 'Оформление формы для коммуникации пользователей',
				price: 'от 1500 ₽',
			},
			{ service: 'Монтаж значка фавикон', price: 'от 1500 ₽' },
			{ service: 'Разработка уникальной веб-страницы', price: 'от 6500 ₽' },
			{
				service: 'Раскладка элементов слайдера и карусели',
				price: 'от 1500 ₽',
			},
			{
				service: 'Предоставление услуг установки SSL сертификата',
				price: 'от 2000 ₽',
			},
			{
				service: 'Модификация адаптивной версии сайта для лиц с ослабленным зрением',
				price: 'от 3000 ₽',
			},
			{
				service: 'Перевод интерфейса сайта на иностранные языки',
				price: 'от 2500 ₽',
			},
			{
				service: 'Реализация функции быстрого обращения (пересылка сообщений в мессенджеры)',
				price: 'от 2000 ₽',
			},
			{
				service: 'Запуск системы управления контентом (CMS)',
				price: 'от 5000 ₽',
			},
		],
	},

	{
		title: 'Пакетные услуги',
		services: [
			{
				service: 'SEO-настройка сайта',
				price: 'от 6500 ₽',
			},
			{
				service: 'Оптимизация скорости сайта',
				price: 'от 5 500 ₽',
			},
			{
				service: 'Настройка безопасности и SSL',
				price: 'от 3 500 ₽',
			},
			{
				service: 'Перенос сайта на другой хостинг',
				price: 'от 9 000 ₽',
			},
			{
				service: 'Мобильная адаптация',
				price: 'от 7 500 ₽',
			},
			{ service: 'PWA-приложение', price: 'от 2500 ₽' },
		],
	},
];

export const investigation = [
	{
		title: '1 ШАГ',
		content: (
			<div className="mt-10 text-md">
				<ParagraphSize
					className="text-gray-800 text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-5xl"
					text="Какая финальная стоимость?"
					size="xl"
				/>
				<ul className="list-disc pl-5">
					<li className="text-gray-800 py-5">
						Разработка сайта зависит от многих факторов, таких как количество страниц, анимаций и
						функционала который должен быть применен к сайту
					</li>
				</ul>

				<img
					src="./img/6998fbd325e4ce7086d267ea7a1.webp"
					alt="startup template"
					width={450}
					height={450}
					className=""
					loading="lazy"
				/>
			</div>
		),
	},
	{
		title: '2 ШАГ',
		content: (
			<div className="mt-10 text-md">
				<ParagraphSize
					className="text-gray-800 text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-5xl"
					text="Какой срок создания сайта?"
					size="xl"
				/>
				<ul className="list-disc pl-5">
					<li className="text-gray-800 py-5">
						Всё зависит от сложности проекта. В среднем сайт создается за 1-2 недели. Если сайт
						нужен очень срочно и качественно - наша студия Вам поможет с этим
					</li>
				</ul>
				<img
					src="./img/6998fb9eqw24123fa46c0c079cb432b.webp"
					width={400}
					height={400}
					loading="lazy"
					className=""
					alt={''}
				/>
			</div>
		),
	},
	{
		title: '3 ШАГ',
		content: (
			<div className="mt-10 text-md">
				<ParagraphSize
					className="text-gray-800 text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-5xl"
					text="Какие сайты мы можем создать?"
					size="xl"
				/>
				<ul className="list-disc pl-5">
					<li className="text-gray-800 py-5">
						Лендинг (Landing Page): Одностраничный сайт для продвижения конкретного продукта или
						акции
					</li>
					<li className="text-gray-800 py-3">
						Интернет-магазин (E-commerce): Сайт для онлайн-продажи товаров или услуг
					</li>
					<li className="text-gray-800 py-3">
						Корпоративный сайт: Представляет компанию, услуги и контакты
					</li>
					<li className="text-gray-800 py-3">
						Портфолио: Демонстрация работ или проектов специалиста/компании
					</li>
					<li className="text-gray-800 py-3">Блог: Платформа для публикации статей и заметок</li>
					<li className="text-gray-800 py-3">
						Сайт-визитка: Простая страница с основной информацией и контактами
					</li>
				</ul>
				<img
					src="./img/6998f1b9e23211a46c0c21321079cb432b.webp"
					width={500}
					height={500}
					loading="lazy"
					className=""
					alt={''}
				/>
			</div>
		),
	},
];

export const cardDataInfo = [
	{
		title: 'Гарантированная прибыль',
		description:
			'21% годовых — одна из самых высоких долей на рынке, что позволяет вам получать максимальную выгоду от ваших вложений.',
		imageUrl: '/9.png',
		bgColor: 'bg-cyan-blue',
		textColor: 'text-white',
		colSpan: 'col-span-2',
		rowSpan: 'row-span-2',
	},
	{
		title: 'Минимальная сумма вклада',
		description:
			'250,000 рублей — доступный порог для начала инвестирования, который открывает перед вами новые финансовые возможности.',
		imageUrl: '/10.png',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-black',
		colSpan: 'col-span-2',
		rowSpan: 'row-span-2',
	},
	{
		title: 'Срок вклада',
		description: 'Вы можете выбрать срок, который наиболее подходит для ваших финансовых целей.',
		imageUrl: '/11.png',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-black',
		colSpan: 'md:col-span-2 col-span-3',
		rowSpan: 'md:row-span-3 row-span-2',
	},
	{
		title: 'Выплата вознаграждения',
		description: 'Гибкие условия, которые позволяют вам получать доход в удобное для вас время.',
		imageUrl: '/12.png',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-black',
		colSpan: 'md:col-span-2 col-span-3',
		rowSpan: 'md:row-span-3 row-span-2',
	},
	{
		title: 'Форма участия',
		description:
			'Вы можете выбрать форму участия, которая соответствует вашим инвестиционным предпочтениям и принципам шариата.',
		imageUrl: '/13.png',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-black',
		colSpan: 'md:col-span-2 col-span-3',
		rowSpan: 'md:row-span-3 row-span-2',
	},
];

export const cardslist2 = [
	{
		id: 1,
		image:
			'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fcontribution.375be85f.png%26w%3D640%26q%3D75&w=384&q=75',
		title: 'Свяжитесь с нами',
		description: ' Позвоните или напишите нашим специалистам, чтобы получить консультацию.',
		bgColor: 'bg-[#041121]',
		textColor: 'text-white',
	},
	{
		id: 2,
		image:
			'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fcontribution.375be85f.png%26w%3D640%26q%3D75&w=384&q=75',
		title: 'Заполните заявку',
		description: 'Вы можете заполнить форму на нашем сайте для предварительного рассмотрения.',
		bgColor: 'bg-gray-100',
		textColor: 'text-gray-800',
	},
	{
		id: 3,
		image:
			'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fcontribution.375be85f.png%26w%3D640%26q%3D75&w=384&q=75',
		title: 'Подпишите договор',
		description:
			'После одобрения вы подпишете договор, в котором будут указаны все условия вашего вклада.',
		bgColor: 'bg-gray-100',
		textColor: 'text-gray-800',
	},
];

export const whychooseus = [
	{
		id: 1,
		image: 'https://cdn.tbank.ru/static/pages/files/38254d7a-a186-4418-8a6d-181764bd8225.svg',
		title: 'Профессионализм и надёжность',
		description:
			'Многолетняя деятельность на рынке подтверждает нашу стабильность и высокую репутацию надежного бизнес-партнера',
		bgColor: 'bg-[#041121]',
		textColor: 'text-white',
	},
	{
		id: 2,
		image: 'https://cdn.tbank.ru/static/pages/files/a028bb21-d7d4-41f5-8278-8be707bed56e.svg',
		title: 'Индивидуальные условия',
		description: 'Подбираем оптимальные решения, учитывая потребности каждого партнера',
		bgColor: 'bg-gray-100',
		textColor: 'text-gray-800',
	},
	{
		id: 3,
		image: 'https://cdn.tbank.ru/static/pages/files/229c8ac0-c096-4a9b-855a-b0f6745ac587.svg',
		title: 'Высокое качество услуг',
		description:
			'Предоставляем услуги высокого уровня, обеспечивающие комфорт и эффективность вашему бизнесу',
		bgColor: 'bg-gray-100',
		textColor: 'text-gray-800',
	},
	{
		id: 4,
		image: 'https://cdn.tbank.ru/static/pages/files/229c8ac0-c096-4a9b-855a-b0f6745ac587.svg',
		title: 'Широкий спектр предложений',
		description: 'Предлагаем полный комплекс услуг, охватывающий разные направления деятельности',
		bgColor: 'bg-[#E2E8F0]',
		textColor: 'text-gray-800',
	},
];

export const advantagescomponent = [
	{
		title: 'Поддержка клиентов',
		description:
			'Команда квалифицированных специалистов готова оперативно решить любые вопросы пользователей',
	},
	{
		title: 'Эксклюзивные скидки и акции',
		description: 'Специальные предложения и бонусы, разработанные именно для наших покупателей',
	},

	{
		title: 'Безопасность транзакций',
		description:
			'Мы используем современные технологии защиты платежей, обеспечивая полную безопасность ваших финансов',
	},
];

export const startpartnership = [
	{
		title: '1',
		description: 'Заполните анкету с ФИО и телефоном для подбора лучших условий сотрудничества',
	},
	{
		title: '2',
		description: 'Отправьте заявку на рассмотрение. Специалисты быстро её изучат и свяжутся с вами',
	},
	{
		title: '3',
		description:
			'Начните успешное сотрудничество с IBR Group и откройте новые возможности для развития вашего бизнеса',
	},
];

export const cooperationadvantages = [
	{
		title: 'Прозрачность финансовых схем',
		description:
			'Наши финансовые механизмы построены на принципах честности и справедливости, полностью открыты и легко понятны каждому пользователю',
		number: '1',
	},
	{
		title: 'Широкий ассортимент сертифицированных товаров',
		description:
			'Мы предлагаем только высококачественные товары с подтверждённой сертификацией халяль, соответствующие международным стандартам и требованиям',
		number: '2',
	},
	{
		title: 'Полное соблюдение норм шариата',
		description:
			'Все операции и услуги строго соответствуют религиозным нормам, что исключает любые сомнения в чистоте сделок',
		number: '3',
	},
	{
		title: 'Удобная и интуитивная платформа',
		description:
			'Наша площадка разработана для комфортных и простых покупок и инвестиций, учитывая особенности и потребности верующих',
		number: '4',
	},
];

export const NavbarProducts = [
	{
		name: 'IBR GROUP',
		description: 'Исламские банковские услуги',
		href: '/about-us',
		icon: BsBank,
	},
	{
		name: 'Веб-разработка',
		description: 'Разработка сайтов под ключ',
		href: '/web-development-agencies',
		icon: HiOutlineComputerDesktop,
	},
	{
		name: 'Техобслуживание',
		description: 'Техническое обслуживание оборудования и систем',
		href: '/service',
		icon: PiComputerTower,
	},
];

// Единый конфиг маршрутов (next/navigation — useRouter, useParams). Prod-ready.
export const ROUTES = {
	home: '/',
	installment: '/installment',
	ibrmarket: '/ibrmarket',
	becomePartner: '/become-partner',
	aboutUs: '/about-us',
	service: '/service',
	webDevelopmentAgencies: '/web-development-agencies',
} as const;

export const NAV_ITEMS: { path: string; label: string }[] = [
	{ path: ROUTES.installment, label: 'Рассрочка' },
	{ path: ROUTES.ibrmarket, label: 'Маркетплейс' },
	{ path: ROUTES.becomePartner, label: 'Партнерство' },
];

export const FOOTER_LINKS = [
	{
		title: 'Рекомендуемые продукты',
		links: [
			{ label: 'Рассрочка', link: ROUTES.installment },
			{ label: 'Маркетплейс', link: ROUTES.ibrmarket },
			{ label: 'Партнёрство', link: ROUTES.becomePartner },
		],
	},
	{
		title: 'Дополнительная информация',
		links: [
			{ label: 'Web-разработка', link: ROUTES.webDevelopmentAgencies },
			{ label: 'Техобслуживание', link: ROUTES.service },
			{ label: 'О нас', link: ROUTES.aboutUs },
		],
	},
];

export const recommendation = [
	{
		id: 1,
		title: 'Рассчитать рассрочку',
		description: 'Купите сейчас, платите потом',
		imageUrl: '/Installment-plan.webp',
		altText: 'Переводы без комиссии',
		item: { link: ROUTES.installment },
	},
	{
		id: 2,
		title: 'Маркетплейс',
		description: 'Приобретайте товары по выгодным ценам',
		imageUrl: '/ibrmarket.webp',
		altText: 'История транзакций',
		item: { link: ROUTES.ibrmarket },
	},
	{
		id: 3,
		title: 'Партнерство',
		description: 'Станьте партнером IBR и откройте новые горизонты для вашего бизнеса',
		imageUrl: '/partnership.webp',
		altText: 'История транзакций',
		item: { link: ROUTES.becomePartner },
	},
	{
		id: 4,
		title: 'Принцип работы IBR Group',
		description: 'Объясним просто, подробно и понятно',
		imageUrl: '/howtowork.webp',
		altText: 'Справки и госуслуги',
		item: { link: ROUTES.aboutUs },
	},
];

export const texts = {
	title: 'Бесплатная консультация',
	subtitle: 'Подарим макет вашего будущего сайта',
	heading: 'Готовы стать катализатором роста вашего бизнеса',
	description:
		'Мы свяжемся с вами в течение двух часов, чтобы задать вопросы и обсудить, какую пользу можем принести',
	contactLabel: 'Контактные данные',
	messageLabel: 'Сообщение',
	messagePlaceholder: 'Напишите ваше сообщение...',
	submitButton: 'Открыть вклад',
	inputs: {
		firstName: 'Имя',
		lastName: 'Фамилия',
		email: 'Email',
		phone: 'Телефон',
	},
	imageAlt: 'Фото Никитина',
};

export const advantagesData = [
	{
		number: '1',
		title: 'Создаем только современные сайт',
		description:
			'Многие сайты сегодня выглядят банально и устарели. Мы разрабатываем дизайн и функциональность, которые делают ваш проект ярким и актуальным',
	},
	{
		number: '2',
		title: 'Персонализированный подход к каждому заказчику',
		description:
			'Мы внимательно исследуем ваш бизнес, сферу деятельности и основные цели, чтобы создавать решения, полностью соответствующие вашим потребностям',
	},
	{
		number: '3',
		title: 'Обещаем стопроцентный результат',
		description:
			'Мы отвечаем за качество нашей работы. В итоге вы получите функционирующий сайт, который привлекает клиентов и приносит прибыль',
	},
];

export const features = [
	{
		icon: <MdProductionQuantityLimits />,
		title: 'Выберите товар',
		description: 'В маркете по выгодной цене',
	},
	{
		icon: <RiProductHuntLine />,
		title: 'На сумму до 150 000 ₽',
		description: 'Покупка по договору мурабаха',
	},
	{
		icon: <FaWpforms />,
		title: 'Заполните анкету',
		description: 'Это займет не более 2 минут',
	},
	{
		icon: <LiaQuestionSolid />,
		title: 'Ответим на вопросы',
		description: 'Менеджер свяжется с вами в течение 10 минут',
	},
];

export const FOOTER_CONTACT_INFO = {
	title: 'ООО «ИБР ГРУПП»',
	links: [
		{ label: 'ИНН', value: '0600024677' },
		{ label: 'КПП', value: '060001001' },
		{ label: 'ОГРН', value: '1260600001859' },
	],
};

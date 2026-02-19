// Centralized site data extracted from pages/index.astro
// Replace this module with a DB loader later while keeping the same export.

// Icons
import iconScope from '../assets/icon-scope.svg'
import iconBelly from '../assets/icon-belly.svg'
import iconBaby from '../assets/icon-baby.svg'
import iconBreast from '../assets/icon-breast.svg'
import iconTeam from '../assets/icon-team.svg'
import iconMap from '../assets/icon-map.svg'
import iconEuro from '../assets/icon-euro.svg'
import iconCert from '../assets/icon-cert.svg'

// Videos
import headerVideo from "../assets/stock-video-baby-suckle.mp4"

// Images
import imgPregnant from '../assets/img-pregnant.jpg'
import imgDelivery from '../assets/img-delivery.jpg'
import imgAfter from '../assets/img-after.jpg'
import imgDiverse from '../assets/img-diverse.jpg'

// Team
import imgTeam1 from '../assets/img-team1.jpg'
import imgTeam2 from '../assets/img-team2.jpg'
import imgTeam3 from '../assets/img-team3.jpg'
import imgTeam4 from '../assets/img-team4.jpg'
import imgTeam5 from '../assets/img-team5.jpg'
import imgTeam6 from '../assets/img-team6.jpg'
import imgTeam7 from '../assets/img-team7.jpg'
import imgTeam8 from '../assets/img-team8.jpg'

// ContactMap assets
import iconMapSm from '../assets/icon-map-sm.svg'
import iconPhoneSm from '../assets/icon-phone-sm.svg'
import iconPhoneWhite from '../assets/icon-phone-white.svg'
import iconMailSm from '../assets/icon-mail-sm.svg'
import iconTimeSm from '../assets/icon-time-sm.svg'
import mapUtrecht from '../assets/img-utrecht.png'

// Hero text content
export const hero = {
	video: headerVideo,
	title: 'Professionele geboortezorg voor iedereen',
	description: 'Uw behoefte, onze missie. We staan klaar om u en uw partner door deze spannende tijd te begeleiden.',
	buttons: [
		{
			title: 'Aanmelden',
			variant: 'primary',
			href: '#aanmelden',
			size: 'xl',
			arrow: true
		},
		{
			title: 'Stel een vraag',
			variant: 'secondary',
			href: '#vraag',
			arrow: true
		}
	]
}

export const sectionData = [
	{
		title: 'Wat bieden wij?',
		description: 'Professionele geboortezorg met ruimte voor persoonlijke aandacht.',
		cards: {
			variant: 'solid',
			items: [
				{
					title: 'Verloskundige zorg',
					text: 'Medische begeleiding door gecertificeerde verloskundigen gedurende de gehele zwangerschap.',
					icon: iconScope,
					bg: 'bg-secondary',
					href: '#verloskunde',
				},
				{
					title: 'Begeleiding tijdens zwangerschap',
					text: 'Persoonlijke begeleiding en controles voor een gezonde zwangerschap en voorbereiding op de bevalling.',
					icon: iconBelly,
					bg: 'bg-secondary-400',
					href: '#begeleiding',
				},
				{
					title: 'Bevalling & ondersteuning',
					text: 'Professionele ondersteuning bij bevalling thuis, in het ziekenhuis of in het geboortecentrum.',
					icon: iconBaby,
					bg: 'bg-secondary-300',
					href: '#bevalling',
				},
				{
					title: 'Nazorg & lactatie',
					text: 'Volledige nazorg en lactatiekundige begeleiding in de eerste weken na de bevalling.',
					icon: iconBreast,
					bg: 'bg-secondary-200',
					href: '#nazorg',
				},
			]
		}
	},
	{
		title: 'Voor wie is onze zorg?',
		description: 'Verschillende fases in uw zwangerschap vragen om verschillende expertises. RGZ Utrecht geeft u behandeling op maat.',
		bg: 'bg-tertiary',
		figures: {
			colsMax: 2,
			figurePoint: 'br',
			figureLayout: 'rows',
			items: [
				{
					title: 'Tijdens de zwangerschap',
					text: 'Begeleiding en controles gedurende uw zwangerschap, met aandacht voor uw gezondheid, vragen en voorbereiding op de bevalling.',
					image: imgPregnant,
					href: '#zwangerschap'
				},
				{
					title: 'Bij de bevalling',
					text: ' Professionele ondersteuning tijdens de bevalling, met continue begeleiding en samenwerking met het ziekenhuis wanneer nodig.',
					image: imgDelivery,
					href: '#bevalling'
				},
				{
					title: 'Zorg na de bevalling',
					text: ' Nazorg voor moeder en kind, inclusief controles, herstelbegeleiding en ondersteuning bij voeding en eerste zorgmomenten.',
					image: imgAfter,
					href: '#nazorg'
				},
				{
					title: 'Voor diverse gezinssamenstellingen',
					text: ' Onze zorg is toegankelijk voor alle aanstaande ouders, met respect voor verschillende gezinssituaties en persoonlijke wensen.',
					image: imgDiverse,
					href: '#divers'
				},
			]
		}
	},
	{
		title: 'Waarom RGZ Utrecht?',
		description: 'Velen gingen u voor en hebben hun behoeften in onze handen gelegd. Uw veiligheid en vertrouwen zijn onze hoogste prioriteit.',
		cards: {
			variant: 'outline',
			iconStyle: 'header',
			items: [
				{
					title: 'Alle disciplines in huis',
					text: 'Medische begeleiding door gecertificeerde verloskundigen gedurende de gehele zwangerschap.',
					icon: iconTeam,
					href: '#team',
					linkText: 'Ontmoet onze mensen'
				},
				{
					title: 'Bereikbaar en dichtbij',
					text: 'Persoonlijke begeleiding en controles voor een gezonde zwangerschap en voorbereiding op de bevalling.',
					icon: iconMap,
					href: '#map',
					linkText: 'Bekijk onze locaties'
				},
				{
					title: 'Transparante tarieven',
					text: 'Professionele ondersteuning bij bevalling thuis, in het ziekenhuis of in het geboortecentrum.',
					icon: iconEuro,
					href: '#prices',
					linkText: 'Zie onze prijzen'
				},
				{
					title: 'Professionele zorg',
					text: 'Volledige nazorg en lactatiekundige begeleiding in de eerste weken na de bevalling.',
					icon: iconCert,
					href: '#certificaten',
					linkText: 'Toon certificaten'
				},
			]
		}
	},
	{
		title: 'Ons team',
		description: 'Samen vormen wij een hecht team van verloskundigen en zorgprofessionals. Binnen onze praktijk staat continuïteit centraal: u heeft één vast aanspreekpunt en een vertrouwd team om u heen.',
		bg: 'bg-panel-light',
		cta: {
			text: 'Bekijk al onze medewerkers',
			href: '#team'
		},
		figures: {
			items: [
				{
					image: imgTeam1,
					title: 'Dr. Sophie van den Berg',
					text: 'Verloskundige'
				},
				{
					image: imgTeam2,
					title: 'Drs. Marco de Vries',
					text: 'Gynaecoloog'
				},
				{
					image: imgTeam3,
					title: 'John Jansen',
					text: 'Verloskundige'
				},
				{
					image: imgTeam4,
					title: 'Karin Vermeulen',
					text: 'Lactatiekundige'
				},
				{
					image: imgTeam5,
					title: 'Dr. Emma Bakker',
					text: 'Verloskundige'
				},
				{
					image: imgTeam6,
					title: 'Drs. Tom Hendriks',
					text: 'Verloskundige'
				},
				{
					image: imgTeam7,
					title: 'Sarah Mulder',
					text: 'Kraamverzorgende'
				},
				{
					image: imgTeam8,
					title: 'André Peters',
					text: 'Verloskundige'
				}
			]
		}
	}
]

// Footer data (moved from src/components/Footer.astro)
export const footer = {
	copyText: `©${new Date().getFullYear()} RGZ Utrecht. Alle rechten voorbehouden.`,
	kvkText: 'KVK: 12345678',
	agbText: 'AGB: 95167815',
	urls: [
		{
			title: 'Onze zorg',
			items: [
				{ title: 'Verloskunde', href: '#' },
				{ title: 'Zwangerschap', href: '#' },
				{ title: 'Bevalling', href: '#' },
				{ title: 'Nazorg', href: '#' },
			]
		},
		{
			title: 'Informatie',
			items: [
				{ title: 'Tarieven', href: '#' },
				{ title: 'AGB-codes', href: '#' },
				{ title: 'Voor cliënten', href: '#' },
				{ title: 'Ons team', href: '#' },
			]
		},
		{
			title: 'Juridisch',
			items: [
				{ title: 'Privacyverklaring', href: '#' },
				{ title: 'Toegankelijkheidsverklaring', href: '#' },
				{ title: 'Contact', href: '#' },
			]
		}
	]
}

// Contact / Map data (moved from src/components/ContactMap.astro)
export const contact = {
	title: 'Contact & Regio',
	description: 'Vanuit onze centraal gelegen praktijk in Utrecht bieden wij toegankelijke geboortezorg voor cliënten uit de hele regio.',
	contactData: [
		{
			title: 'Hoofdadres',
			description: ['Maliebaan 45', '3581 CB Utrecht'],
			icon: iconMapSm,
			link: {
				text: 'Bekijk al onze adressen',
				href: '#adressen'
			}
		},
		{
			title: 'Telefoonnummer',
			description: ['030 - 234 56 78'],
			icon: iconPhoneSm
		},
		{
			title: 'E-mailadres',
			description: ['info@rzgrutrecht.nl'],
			icon: iconMailSm
		},
		{
			title: 'Openingstijden',
			description: ['Maandag t/m vrijdag: 08:00 - 18:00', 'Spoed 24/7 bereikbaar'],
			icon: iconTimeSm
		}
	],
	cta: {
		icon: iconPhoneWhite,
		text: 'Neem contact op',
		href: '#contact'
	},
	map: mapUtrecht
}

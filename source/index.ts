type Tag =
	| 'referral'
	| 'recommendation'
	| 'social'
	| 'alias'
	| 'feed'
	| 'donate'
	| string

type Redirection = 'temporary' | 'permanent' | 'page' | 'alias' | 'none'

export interface Link {
	url: string
	name?: string
	description?: string
	color?: string
	tags?: Tag[]
	referralCode?: string
	redirect?: Redirection
}

export interface Links {
	[key: string]: Link | string
}

const links: Links = {
	// Feeds
	'https://balupton.com/feedburner': {
		url: 'http://feeds.feedburner.com/balupton.atom',
		name: 'Blog Posts',
		tags: ['feed'],
	},
	'https://balupton.com/feedmedium': {
		url: 'https://medium.com/feed/@balupton',
		name: 'Medium Posts',
		tags: ['feed'],
	},

	// referrals / affiliates
	'https://balupton.com/recommendations': {
		name: 'Recommendations',
		url: 'https://coda.io/@balupton/gear',
		description:
			'Use my recommendations list to discover apps, services, equipment, and gear that you should be using',
		color: '#000',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/recommends': 'https://balupton.com/recommendations',
	'https://balupton.com/recommend': 'https://balupton.com/recommendations',
	'https://balupton.com/gear': 'https://balupton.com/recommendations',
	// actual
	'https://balupton.com/melon': {
		name: 'Melon',
		url: 'https://melonapp.com?ref=balupton',
		description:
			'Use Melon as an alternative to Zoom, Google Meet, and OBS that supports streaming to multiple locations',
		color: '#ff517b',
		tags: ['referral'],
	},
	'https://bevry.me/r/melon': 'https://balupton.com/melon',
	'https://balupton.com/restream-studio': {
		name: 'Restream Studio',
		url: 'https://restream.io/studio?ref=4xozn',
		description:
			'Use Restream Studio as a free alternative to Zoom, Google Meet, and OBS that supports free streaming to multiple locations',
		color: '#000',
		tags: ['referral', 'recommendation'],
	},
	'https://bevry.me/r/restream-studio': 'https://balupton.com/restream-studio',
	'https://balupton.com/restream': {
		name: 'Restream',
		url: 'https://restream.io/join/4xozn',
		description:
			'Use Restream to broadcast your OBS, Zoom, or RTMP stream to multiple locations at the same time for free',
		color: '#000',
		tags: ['referral', 'recommendation'],
	},
	'https://bevry.me/r/restream': 'https://balupton.com/restream',
	'https://balupton.com/honeygain': {
		name: 'Honeygain',
		url: 'https://r.honeygain.money/B57497FAA2',
		description: 'Use Honeygain to earn money from your spare internet usage',
		color: '#FFCE00',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/nextdns': {
		name: 'NextDNS',
		url: 'https://nextdns.io/?from=qjsjabek',
		description:
			'Use NextDNS as your DNS provider that supports Handshake decentralised domains and customisable content filtering',
		color: '#007BFF',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/vessi': {
		name: 'Vessi Footwear',
		url: 'Https://fbuy.io/vessi/7r4yyb54',
		description: 'Use Vessi Footwear to keep your feet dry while looking cool',
		color: '#005864',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/streamlabs': {
		name: 'Streamlabs',
		url: 'https://streamlabs.com/editor?promo=balupton-b5ee-10',
		description: 'Use Streamlabs as your all-in-one livestreaming solution',
		color: '#31c3a2',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/qantas-wellbeing': {
		name: 'Qantas Wellbeing',
		url:
			'https://go.qantaswellbeing.com/a/key_live_nel0NOrSX1UEasHKwDDwVeghBqfKsZx2?%24identity_id=751804620959329373&channel=Apple%20Notes&feature=invite&type=0&duration=0&source=ios&data=eyIkY2Fub25pY2FsX2lkZW50aWZpZXIiOiJpbnZpdGUtYXF1YWludGFuY2UiLCJnZW5lcmF0ZWRMaW5rSUQiOiIxM0E0NzFDNy0wMzdFLTQ2OUEtOTVGQi04MDZBRTUwQ0U1MDAiLCIkb2dfZGVzY3JpcHRpb24iOiJIZXksIHdhbnQgdG8gZWFybiAxNTAgUWFudGFzIFBvaW50cyBmb3IgYmVpbmcgYWN0aXZlPyBVc2UgbXkgaW52aXRlIGxpbmsgdG8gZG93bmxvYWQgdGhlIFFhbnRhcyBXZWxsYmVpbmcgQXBwLiBDb21wbGV0ZSB5b3VyIGZpcnN0IGNoYWxsZW5nZSAtIGFuZCB0aGUgcG9pbnRzIGFyZSB5b3VycyEiLCJwdWJsaWNNZW1iZXJJRCI6ImZmODA4MDgxNzA1MDhlZjQwMTcwN2NlN2YyZDExYjJhIiwiJGVtYWlsX3N1YmplY3QiOiJKb2luIEJlbmphbWluIEEgTHVwdG9uIG9uIFFhbnRhcyBXZWxsYmVpbmciLCIkb2dfdGl0bGUiOiJIZXksIHdhbnQgdG8gZWFybiAxNTAgUWFudGFzIFBvaW50cyBmb3IgYmVpbmcgYWN0aXZlPyBVc2UgbXkgaW52aXRlIGxpbmsgdG8gZG93bmxvYWQgdGhlIFFhbnRhcyBXZWxsYmVpbmcgQXBwLiBDb21wbGV0ZSB5b3VyIGZpcnN0IGNoYWxsZW5nZSAtIGFuZCB0aGUgcG9pbnRzIGFyZSB5b3VycyEiLCJnZW5lcmF0ZWRCeVB1YmxpY01lbWJlcklEIjoiZmY4MDgwODE3MDUwOGVmNDAxNzA3Y2U3ZjJkMTFiMmEiLCJnZW5lcmF0ZWRUaW1lc3RhbXAiOiIxNTgyOTQ0OTE5LjA4NzU4MyIsInJlZmVycmFsQ29kZSI6Im83d3VjejEifQ%3D%3D',
		description:
			'Use Qantas Wellbeing to earn 150 Qantas Points for being active',
		color: '#e40000',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/gitkraken': {
		name: 'GitKraken',
		url: 'https://www.gitkraken.com/invite/56Cj9yn1',
		description: 'Use GitKraken as your Git desktop client',
		color: '#20968b',
		tags: ['referral'],
	},
	'https://balupton.com/powershop': {
		name: 'Powershop',
		url: 'https://secure.powershop.com.au/r/heatherl-R8MWLKE?p=556',
		description: 'Use Powership as your Australian clean energy provider',
		color: '#fa0e6a',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/fireflies': {
		name: 'Fireflies',
		url: 'https://app.fireflies.ai/login?freecredit=JBS4bOfN',
		description:
			'Use Firelies to take notes for your digital meetings with optional transcription',
		color: '#FB35A7',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/coda': {
		name: 'Coda',
		url: 'https://coda.io/?r=CKtcbWm3QpGD18vwdwDsmw',
		description: 'Use Coda for all your advanced taking',
		color: '#f46a54',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/notion': {
		name: 'Notion',
		url: 'https://www.notion.so/?r=60933d0600364189832f302b54cf49b0',
		description: 'Use Notion for all your note taking',
		color: 'rgb(55, 53, 47)',
		tags: ['referral'],
	},
	'https://balupton.com/pika': {
		name: 'Pika',
		url: 'https://www.pika.dev/code?ref=R7OXG7REoO2TDfs2jgxX',
		description: 'Use Pika for all your frontend web development',
		color: '#4da7ff',
		tags: ['referral'],
	},
	'https://balupton.com/krisp': {
		name: 'Krisp',
		url: 'https://ref.krisp.ai/u/u6e0c886b7',
		description: 'Use Krisp to silence speaker and microphone background noise',
		color: '#FF7E61',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/helium': {
		name: 'Helium',
		url: 'http://fbuy.me/nsesX',
		description:
			'Use Helium to earn money by creating a global worldwide internet hotspot',
		color: '#be73ff',
		tags: ['referral'],
	},
	'https://balupton.com/civicwallet': {
		name: 'Civic',
		url: 'https://www.civic.com/wallet-waitlist/?r=nJWqY',
		description: 'Use Civic to verify the identities of your application users',
		color: '#3AB03E',
		tags: ['referral'],
	},
	'https://balupton.com/civic': 'https://balupton.com/civicwallet',
	'https://balupton.com/sablier': {
		name: 'Sablier',
		url: 'https://sablier.app/r?=ft1gfikc',
		description:
			'Use Sablier to pay your employees in cryptocurrency in realtime',
		color: '#f4a261',
		tags: ['referral'],
	},
	'https://balupton.com/anarchapulco': {
		name: 'Anarchapulco',
		url:
			'https://anarchapulco.com/buy-your-tickets/?coupon-code=tenpercent&ref=benjaminlupton',
		description:
			'Attend Anarchapuclo each year, it is the biggest libertarian/anarachist event in the world',
		color: '#f0543c',
		tags: ['referral'],
	},
	'https://balupton.com/ora': {
		name: 'Ora',
		url: 'https://ora.pm/?r=c67fdec477d3b489',
		description: 'Use Ora for all your project management needs',
		color: '#7b72e9',
		tags: ['referral'],
	},
	'https://balupton.com/keysmart': {
		name: 'KeySmart',
		url:
			'https://www.GetKeySmart.com/products/keysmart-pro-with-tile-smart-location-tracking?rfsn=2321661.0382aa',
		description:
			'Use KeySmart to organise your keys, with builtin flashlight, bluetooth tracker, and bottle opener',
		color: '#d22630',
		tags: ['referral'],
	},
	'https://balupton.com/urban21': {
		name: 'Urban 21 Backpack',
		url:
			'https://www.GetKeySmart.com/pages/urban21-backpack?rfsn=2321661.0382aa',
		description:
			'Use the Urban 21 Backpack for your organised travel and commuter backpack',
		color: '#d22630',
		tags: ['referral'],
	},
	'https://balupton.com/bogui': {
		name: 'Bogui Slip',
		url: 'https://www.GetKeySmart.com/products/bogui-slip?rfsn=2321661.0382aa',
		description: 'Use the Bogui Slip as your minimal wallet',
		color: '#0091ea',
		tags: ['referral'],
	},
	'https://balupton.com/milanote': {
		name: 'Milanote',
		url: 'https://www.milanote.com/refer/rczFuD0XCFHIws2Wir',
		description: 'Use Milanote to organise your thoughts',
		color: '#f4511c',
		tags: ['referral'],
	},
	'https://balupton.com/gunnar': {
		name: 'Gunnar Glasses',
		url: 'http://www.gopjn.com/t/RkFMSURHR0FFTEhLS0ZBTURNTUs',
		description:
			'Use Gunnar Glasses to work on the computer all day without eyestrain',
		color: '#d03238',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/setapp': {
		name: 'Setapp',
		url: 'https://go.setapp.com/invite/npexhyjs',
		description:
			'Use Setapp to gain access to dozens of high quality mac apps for a low monthly price',
		color: '#00024f',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/airtable': {
		name: 'Airtable',
		url: 'https://airtable.com/invite/r/pBIrCHfX',
		description: 'Use Airtable to create powerful data rich spreadsheets',
		color: '#2d7ff9',
		tags: ['referral'],
	},
	'https://balupton.com/safetywing': {
		name: 'SafetyWing',
		url: 'https://www.safetywing.com/a/24733581',
		description: 'Use SafetyWing for worldwide travel insurance',
		color: '#58c5c7',
		tags: [
			'referral',
			'recommendation',
			'best',
			'insurance',
			'travel',
			'health',
			'nomad',
			'family',
		],
	},
	'https://balupton.com/travel-insurance': 'https://balupton.com/safetywing',
	'https://bevry.me/insurance': 'https://balupton.com/safetywing',
	'https://balupton.com/remotehealth': {
		name: 'SafetyWing Remote Health',
		url: 'https://safetywing.com/remote-health/a/24733581',
		description:
			'Use SafetyWing Remote Health for your employer to provide international health care for your remote team',
		color: 'rgb(86, 86, 194)',
		tags: [
			'referral',
			'recommendation',
			'best',
			'insurance',
			'travel',
			'healthcare',
			'health',
			'nomad',
			'team',
		],
	},
	'https://balupton.com/remote-health': 'https://balupton.com/remotehealth',
	'https://balupton.com/travel-healthcare': 'https://balupton.com/remotehealth',
	'https://balupton.com/minds': {
		name: 'Minds',
		url: 'https://www.minds.com/balupton?referrer=balupton',
		description: 'Use Minds as an uncensored Facebook',
		color: '#607d8b',
		tags: ['referral'],
	},
	'https://balupton.com/allplants': {
		name: 'allplants',
		url: 'http://i.refs.cc/QeyDyNyx?u=1530661477060',
		description: 'Use allplants to get vegan meals delivered to your door',
		color: '#000',
		tags: ['referral'],
	},
	'https://balupton.com/quadlock': {
		name: 'Quad Lock',
		url: 'http://quadlock.refr.cc/23DDGN7',
		description:
			'Use Quad Lock cases to protect your phone and mount it to anything',
		color: '#0070bc',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/purse': {
		name: 'Purse',
		url: 'https://purse.io/?_r=nPY6sE',
		description:
			'Use Purse to purchase from Amazon with cryptocurrency at a 15% discount',
		color: '#3b4a54',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/kogan': {
		name: 'Kogan',
		url: 'https://www.kogan.com/au/r/9ZK9QV/',
		description:
			'Use Kogan as your Amazon for Australia, especially for electronics',
		color: '#ed193a',
		tags: ['referral'],
	},
	'https://balupton.com/honey': {
		name: 'Honey',
		url: 'https://joinhoney.com/ref/c1ra4wf',
		description:
			'Use Honey to automatically apply discount coupons when you shop online',
		color: '#ff7e27',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/bookingdotcom': {
		name: 'Booking.com',
		url: 'https://www.booking.com/s/27_8/b0lupt17',
		description: 'Use Booking.com to book accomodation when traveling',
		color: '#07c',
		tags: ['referral'],
	},
	'https://balupton.com/signals': {
		name: 'Signals',
		url: 'https://signals.network/join/122653',
		description: 'Use Signals to share trading strategies',
		color: 'rgb(184, 117, 225)',
		tags: ['referral'],
	},
	'https://balupton.com/gatsby': {
		name: 'Gatsby',
		url: 'https://www.trygatsby.com/?refcode=20cee659527b',
		description: 'Use Gatsby to trade options',
		color: '#F76366',
		tags: ['referral'],
	},
	'https://balupton.com/stake': {
		name: 'Stake',
		url: 'https://stake.com.au?refer=benjaminl259',
		description: 'Use Stake to invest in USA companies (Australia only)',
		color: '#181818',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/cryptoml': {
		name: 'Crypto-ML',
		url: 'https://crypto-ml.com?aff=balupton',
		description:
			'Use Crypto-ML to receive AI-driven trading signals for cryptocurrency',
		color: '#2b709c',
		tags: ['referral'],
	},
	'https://balupton.com/coinstats': {
		name: 'Coinstats',
		url: 'https://coinstats.app.link/M4yHl2vwjO',
		description: 'Use coinstats to track your cryptocurrency portfolio',
		color: '#F56945',
		tags: ['referral'],
	},
	'https://balupton.com/argent/invite': {
		name: 'Argent',
		url: 'https://argent.link/MVICN89IZX',
		description: 'Use Argent to send, receive, and invest in cryptocurrency',
		color: '#f36a3d',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/argent': {
		name: 'Argent',
		url: 'https://balupton.argent.xyz',
		description: 'Support Benjamin Lupton via Argent',
		color: '#f36a3d',
		tags: ['social', 'donate'],
	},
	'https://bevry.me/argent': {
		name: 'Argent',
		url: 'https://bevry.argent.xyz',
		description: 'Support Bevry via Argent',
		color: '#f36a3d',
		tags: ['social', 'donate'],
	},
	'https://balupton.com/coinjar': {
		name: 'CoinJar',
		url: 'https://www.coinjar.com/_ref/@balupton',
		description:
			'Use CoinJar to exchange, send and receive cryptocurrency in Australia',
		color: '#1F4F7F',
		tags: ['referral'],
	},
	'https://balupton.com/strongcoin': {
		name: 'StrongCoin',
		url: 'https://strongcoin.com/?ref=1BtRZY7kfJchkzKxs19MyYiQ3ampuQpHEQ',
		description: 'Use StrongCoin as your cryptocurrency wallet',
		color: '#313840',
		tags: ['referral'],
	},
	'https://balupton.com/changelly': {
		name: 'Changelly',
		url: 'https://changelly.com/?ref_id=51f081f500f5',
		description: 'Use Changelly to convert your cryptocurrencies',
		color: '#10d078',
		tags: ['referral'],
	},
	'https://balupton.com/changenow': {
		name: 'ChangeNOW',
		url: 'https://changenow.io?link_id=4861c40d846b4f',
		description: 'Use ChangeNOW to convert your cryptocurrencies',
		color: '#3bee81',
		tags: ['referral'],
	},
	'https://balupton.com/coinex': {
		name: 'CoinEx',
		url: 'https://www.coinex.com/account/signup?refer_code=eb7ra',
		description: 'Use CoinEx to convert your cryptocurrencies',
		color: '#52cbca',
		tags: ['referral'],
	},
	'https://balupton.com/bestrate': {
		name: 'BestRate',
		url:
			'https://bestrate.org/ico-payment-tools?ref=e112faab88bb14fe4e8e92edcdab3ffa',
		description: 'Use BestRate to convert your cryptocurrencies',
		color: '#f9cc33',
		tags: ['referral'],
	},
	'https://balupton.com/heleum': {
		name: 'Heleum',
		url: 'https://app.heleum.com/r/cbdc906a6e',
		description: 'Use Heleum to autoinvest in cryptocurrencies',
		color: '#333333',
		tags: ['referral'],
	},
	'https://balupton.com/abra': {
		name: 'Abra',
		url: 'https://invite.abra.com/Oh1ujGZYWV',
		description: 'Use Abra to autoinvest in cryptocurrencies',
		color: '#9136b9',
		tags: ['referral'],
	},
	'https://balupton.com/voyager': {
		name: 'Voyager',
		url:
			'https://www.investvoyager.com/?campaignId=nAHw2Rl4_mpooRv_Hs8wNxMBxAU&referralCode=DAKh4E5&code=GETBTC25',
		description: 'Use Voyager to trade cryptocurrency',
		color: '##3831ab',
		tags: ['referral'],
	},
	'https://balupton.com/bitmex': {
		name: 'BitMEX',
		url: 'https://www.bitmex.com/register/1Gn7Rt',
		description: 'Use BitMEX to trade cryptocurrency',
		color: '#575b5c',
		tags: ['referral'],
	},
	'https://balupton.com/exmo': {
		name: 'Exmo',
		url: 'https://exmo.com/?ref=561025',
		description: 'Use Exmo to trade cryptocurrency',
		color: '#347ffb',
		tags: ['referral'],
	},
	'https://balupton.com/coinfalcon': {
		name: 'Coinfalcon',
		url: 'https://coinfalcon.com/?ref=CFJSAHMWFPYV',
		description: 'Use Coinfalcon to trade cryptocurrency',
		color: '#1ab6ff',
		tags: ['referral'],
	},
	'https://balupton.com/cobinhood': {
		name: 'Cobinhood',
		url:
			'https://cobinhood.com?referrerId=b7c14dfb-20cb-4bb0-9398-8e5a89d01755',
		description: 'Use Cobinhood to trade cryptocurrency',
		color: '#13be99',
		tags: ['referral'],
	},
	'https://balupton.com/workfrom': {
		name: 'Workfrom',
		url: 'http://wkfr.co/r/awesome-34501',
		description:
			'Use Workfrom to find places you can work from with your laptop',
		color: '#484848',
		tags: ['referral'],
	},
	'https://balupton.com/digitalocean': {
		name: 'DigitalOcean',
		url: 'https://m.do.co/c/713bd82265f6',
		description: 'Use DigitalOcean to host your apps in the cloud',
		color: '#0069ff',
		tags: ['referral'],
	},
	'https://balupton.com/onedrive': {
		name: 'OneDrive',
		url: 'https://onedrive.live.com?invref=40826b4caaef6e4e&invscr=90',
		description: 'Use OneDrive tosync your local files with the cloud',
		color: '#0078d7',
		tags: ['referral'],
	},
	'https://balupton.com/earn': {
		name: 'Earn.com',
		url: 'https://earn.com/balupton/referral/?a=jj1ifwhour6qsw1d',
		description:
			'Use Earn.com to setup a paid email inbox, where people pay to email you',
		color: '#d6a156',
		tags: ['referral'],
	},
	'https://balupton.com/brave': {
		name: 'Brave',
		url: 'https://brave.com/bal467',
		description:
			'Use Brave Browser as a secure and privacy focused replacement for Google Chrome',
		color: '#ff401e',
		tags: ['referral', 'recommendation'],
	},
	'https://bevry.me/brave/youtube': {
		name: 'Brave',
		url: 'https://brave.com/jor666',
		description:
			'Use Brave Browser as a secure and privacy focused replacement for Google Chrome that rewards content creators',
		color: '#ff401e',
		tags: ['referral', 'recommendation'],
	},
	'https://bevry.me/brave': {
		name: 'Brave',
		url: 'https://brave.com/bev401',
		description:
			'Use Brave Browser as a secure and privacy focused replacement for Google Chrome that rewards content creators',
		color: '#ff401e',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/collideref': {
		name: 'Collide',
		url: 'https://www.collide.com/creator/onboard/signup?os=referral-r4276',
		description: 'Use Collide to earn money from your fanbase',
		color: '#292929',
		tags: ['referral'],
	},
	'https://balupton.com/patreon/invite': {
		name: 'Patreon',
		url: 'https://patreon.com/invite/pbqzz',
		description: 'Use Patreon to earn money from your fanbase',
		color: '#E6461A',
		tags: ['referral'],
	},
	'https://balupton.com/patreonref': 'https://balupton.com/patreon/invite',
	'https://balupton.com/bitchute': {
		name: 'BitChute',
		url: 'https://www.bitchute.com/accounts/referral/balupton/',
		description: 'Use BitChute as a decentralised YouTube alternative',
		color: '#ef4136',
		tags: ['referral'],
	},
	'https://balupton.com/xeroshoes': {
		name: 'Xero Shoes',
		url: 'https://xeroshoes.com/go/balupton',
		description: 'Use Xero Shoes as your minimalist running shoes and sandals',
		color: '#2aace3',
		tags: ['referral'],
	},
	'https://balupton.com/xero': 'https://balupton.com/xeroshoes',
	'https://balupton.com/earthrunners': {
		name: 'Earth Runners',
		url: 'http://earthrunners.com?rfsn=763305.e8694',
		description: 'Use Earth Runners as your minimalist running sandals',
		color: '#6dc21d',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/backblaze': {
		name: 'Backblaze',
		url: 'https://secure.backblaze.com/r/01vlym',
		description:
			'Use Backblaze for unlimited and automated cloud backups of your computer and drives',
		color: '#990000',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/bonsai': {
		name: 'Bonsai',
		url: 'https://app.hellobonsai.com/invite/fd7b3daf',
		description:
			'Use Bonsai for all your invoicing, time tracking, and freelancing needs',
		color: '#00B289',
		tags: ['referral'],
	},
	'https://balupton.com/aftership': {
		name: 'Aftership',
		url: 'https://www.aftership.com/?ref=B-HGKM6H2PW',
		description: 'Use Aftership to track your deliveries',
		color: '#e77f11',
		tags: ['referral'],
	},
	'https://balupton.com/downpour': {
		name: 'Downpour',
		url:
			'https://click.linksynergy.com/fs-bin/click?id=RltaJog6pRs&offerid=316894.4&subid=0&type=4',
		description: 'Use Downpour for your audiobook needs',
		color: '#2c3033',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/freedom': {
		name: 'Freedom',
		url: 'https://freedom.refersion.com/c/a7ed49',
		description: 'Use Freedom to block distractions on your computer and phone',
		color: '#6ec05d',
		tags: ['referral'],
	},
	'https://balupton.com/hired': {
		name: 'Hired',
		url: 'https://hired.com/x/1i4hs',
		description:
			'Use Hired to get offers from the best companies around the world',
		color: '#323241',
		tags: ['referral'],
	},
	'https://balupton.com/ebay': {
		name: 'Ebay',
		url:
			'https://rover.ebay.com/rover/1/705-53470-19255-0/1?icep_ff3=1&pub=5575197898&toolid=10001&campid=5337916977&customid=&ipn=psmain&icep_vectorid=229515&kwid=902099&mtid=824&kw=lg',
		description: 'Use Ebay to buy and sell online',
		color: '#f3ad29',
		tags: ['referral'],
	},
	'https://balupton.com/airbnb': {
		name: 'AirBnB',
		url: 'https://www.airbnb.com.au/c/benjaminl3638',
		description: 'Use AirBnB to book accomodation when traveling',
		color: '#ff5a5f',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/awaytravel': {
		name: 'Away Travel',
		url: 'http://fbuy.me/errs2',
		description: 'Use Away Travel for your luggage',
		color: '#00344B',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/flic': {
		name: 'Flic',
		url: 'https://2.flic.io/invite/msdcxhweir/',
		description: 'Use Flic as your bluetooth button for anything',
		color: '#1ed499',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/raiz': {
		name: 'Raiz',
		url: 'https://app.raizinvest.com.au/invite/83UNQY',
		description: 'Use Raiz to open an Australian investment account',
		color: '#221b34',
		tags: ['referral'],
	},
	'https://balupton.com/acorns': 'https://balupton.com/raiz',
	'https://balupton.com/n26': {
		name: 'N26 Bank',
		url: 'https://n26.com/r/benjamil6310',
		description: 'Use N26 Bank for European and International banking',
		color: '#26afb8',
		tags: ['referral'],
	},
	'https://balupton.com/bigpay': {
		name: 'BigPay',
		url: 'http://bigpay.link/referrals',
		referralCode: 'AZ1SLX85K1',
		description:
			'Use BigPay for Asian banking and fee-free bookings on AirAsia',
		color: '##3884FF',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/revolut': {
		name: 'Revolut',
		url: 'https://revolut.com/r/benjamet8p',
		description:
			'Use Revolut as your international bank account with its own debit card',
		color: '#0aa3df',
		tags: ['referral'],
	},
	'https://balupton.com/transferwise/card': {
		name: 'TransferWise MasterCard',
		url: 'https://prf.hn/l/6bEmMGr',
		description:
			'Use TransferWise MasterCard to transact with your TransferWise Borderless account around the world',
		color: '#223049',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/transferwisecard': {
		url: 'https://balupton.com/transferwise/card',
		redirect: 'permanent',
	},
	'https://balupton.com/transferwise/borderless/au': {
		name: 'TransferWise Borderless',
		url: 'https://prf.hn/l/7ABLz4r',
		description:
			'Use TransferWise Borderless (Australia) to have multicurrency bank accounts all around the world',
		color: '#223049',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/transferwiseborderless-au': {
		url: 'https://balupton.com/transferwise/borderless/au',
		redirect: 'permanent',
	},
	'https://balupton.com/transferwise/borderless': {
		name: 'TransferWise Borderless',
		url: 'https://prf.hn/l/ryVQjn6',
		description:
			'Use TransferWise Borderless to have multicurrency bank accounts all around the world',
		color: '#223049',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/transferwise-borderless': {
		url: 'https://balupton.com/transferwise/borderless',
		redirect: 'permanent',
	},
	'https://balupton.com/transferwiseborderless': {
		url: 'https://balupton.com/transferwise/borderless',
		redirect: 'permanent',
	},
	'https://balupton.com/transferwise': {
		name: 'TransferWise',
		url: 'https://prf.hn/l/704qP87',
		description:
			'Use TransferWise to send money around the world as quickly and cheaply as possible',
		color: '#223049',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/travel-banking': {
		url: 'https://balupton.com/transferwise/borderless',
		redirect: 'permanent',
	},
	'https://balupton.com/international-banking': {
		url: 'https://balupton.com/transferwise/borderless',
		redirect: 'permanent',
	},
	'https://balupton.com/tradingview': {
		name: 'TradingView',
		url: 'https://www.tradingview.com/chart?offer_id=10&aff_id=4529',
		description: 'Use TradingView for all your trading insights',
		color: '#3BB3E4',
		tags: ['referral'],
	},
	'https://balupton.com/drivewealth': {
		name: 'DriveWealth',
		url: 'https://drivewealth.com/refer?r=A74082&name=Benjamin',
		description: 'Use DriveWealth to invest in USA companies (USA only)',
		color: '#FEC108',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/wirex': {
		name: 'Wirex',
		url: 'https://app.wirexapp.com/join/gSPGAXe7_EOtVw3hNfaHtA',
		description: 'Use Wirex for your virtual and physical cryptocurrency cards',
		color: '#3fb1ab',
		tags: ['referral'],
	},
	'https://balupton.com/coinbase': {
		name: 'Coinbase',
		url: 'https://www.coinbase.com/join/516032d5fc3baa863b000010',
		description: 'Use Coinbase to exchange, send and receive cryptocurrency',
		color: '#2B71B1',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/benco': {
		name: 'Ben.co',
		url: 'https://ben.onelink.me/kTE6/9181c018',
		description: 'Use Ben as your cryptocurrency wallet',
		color: '#1f6473',
		tags: ['referral'],
	},
	'https://balupton.com/circlemedia': {
		name: 'Circle Media',
		url: 'http://mbsy.co/dSfLv',
		description:
			'Use Circle to track and limit your internet usage over any device',
		color: '#00b7d9',
		tags: ['referral'],
	},
	'https://balupton.com/circleinternet': 'https://balupton.com/circlemedia',
	'https://balupton.com/circlepay': 'https://balupton.com/circle',
	'https://balupton.com/circlefinance': 'https://balupton.com/circle',
	'https://balupton.com/circle': {
		name: 'Circle Finance',
		url: 'https://www.circle.com/invite/DTIKU0',
		description: 'Use Circle to exchange, send and receive cryptocurrency',
		color: '#aacc38',
		tags: ['referral'],
	},
	'https://balupton.com/coinseed': {
		name: 'Coinseed',
		url: 'https://coinseed.app.link/lnFvVQzVzN',
		description: 'Use Coinseed to diversify your cryptocurrency investments',
		color: '#2a9d31',
		tags: ['referral'],
	},
	'https://balupton.com/luno': {
		name: 'Luno',
		url: 'https://www.luno.com/invite/CM6NT',
		description: 'Use Luno to exchange, send and receive cryptocurrency',
		color: '#0091ff',
		tags: ['referral'],
	},
	'https://balupton.com/bitwala': {
		name: 'Bitwala',
		url: 'https://preregister.bitwala.com/r/H1ZIwz2x3G',
		description: 'Use Bitwala to trade cryptocurrency',
		color: '#5a85d7',
		tags: ['referral'],
	},
	'https://balupton.com/cex': {
		name: 'Luno',
		url: 'https://cex.io/r/0/up107824702/0/',
		description: 'Use CEX to trade cryptocurrency',
		color: '#00bdca',
		tags: ['referral'],
	},
	'https://balupton.com/xs2': {
		name: 'XS2',
		url: 'https://xs2.exchange/r/208',
		description: 'Use XS2 to trade cryptocurrency',
		color: '#3097d1',
		tags: ['referral'],
	},
	'https://balupton.com/liquid': {
		name: 'Liquid',
		url: 'https://accounts.liquid.com/sign-up?affiliate=v6Qki8rH43648',
		description: 'Use Liquid to trade cryptocurrency',
		color: '#2a9ff8',
		tags: ['referral'],
	},
	'https://balupton.com/quoinex': 'https://balupton.com/liquid',
	'https://balupton.com/surfeasy': {
		name: 'SurfEasy',
		url: 'https://srfez.com/NF6AYREKBA',
		description: 'Use SurfEasy as your secure anonymous VPN (used by Opera)',
		color: '#46d186',
		tags: ['referral'],
	},
	'https://balupton.com/windscribe': {
		name: 'Windscribe',
		url: 'https://windscribe.com/?affid=rztkyips',
		description: 'Use Windscribe as your secure anonymous VPN',
		color: '#52a5d8',
		tags: ['referral'],
	},
	'https://balupton.com/namedomains': {
		name: 'Name.com',
		url: 'https://www.name.com/referral/1d41c5',
		description: 'Use Name.com to purchase domain names',
		color: '#90c547',
		tags: ['referral'],
	},
	'https://balupton.com/googleapps': {
		name: 'Google Apps',
		url: 'https://goo.gl/vEb9bM',
		description:
			'Use Google Apps for Work to setup Google Accounts for your own website',
		color: '#5F7D8C',
		tags: ['referral'],
	},
	'https://balupton.com/trello': {
		name: 'Trello',
		url: 'https://trello.com/balupton/recommend',
		description:
			'Use Trello to organise your projects via collaborating via virtual todo notes',
		color: '#026AA7',
		tags: ['referral'],
	},
	'https://balupton.com/iherb': {
		name: 'iHerb',
		url: 'http://www.iherb.com/iherb-brands?rcode=DNF509&pcode=10NEWAU',
		description: 'Use iHerb to buy supplements',
		color: '#458500',
		tags: ['referral'],
	},
	'https://balupton.com/koding': {
		name: 'Koding',
		url: 'https://koding.com/R/balupton',
		description: 'Use Koding to code in the cloud',
		color: '#656565',
		tags: ['referral'],
	},
	'https://balupton.com/updown': {
		name: 'Updown',
		url: 'https://updown.io/r/hl1b0',
		description: 'Use Updown for website status alerts',
		color: '#5c4',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/up': {
		name: 'Up',
		url: 'https://hook.up.me/balupton',
		description: 'Use Up as your Australian bank account',
		color: '#ff7a64',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/vultr': {
		name: 'Vultr',
		url: 'http://www.vultr.com/?ref=7196060',
		description: 'Use Vultr to host your apps on virtual machines in the cloud',
		color: '#1e88e5',
		tags: ['referral'],
	},
	'https://balupton.com/hypersh': {
		name: 'Hyper.sh',
		url:
			'https://console.hyper.sh/register/invite/Eb9g6Ml6mGtNNdeRKe6ztaAkMR42rdc6',
		description: 'Use Hyper.sh to host docker apps in the cloud',
		color: '#172b46',
		tags: ['referral'],
	},
	'https://balupton.com/rescuetime': {
		name: 'Rescue Time',
		url: 'http://rescuetime.com/ref/242226',
		description:
			'Use Rescue Time to track your computer activity to figure out where you time goes',
		color: '#65a86f',
		tags: ['referral'],
	},
	'https://balupton.com/dropbox': {
		name: 'Dropbox',
		url: 'https://db.tt/XFuEv8vB',
		description: 'Use Dropbox to sync your local files with the cloud',
		color: '#007ee5',
		tags: ['referral', 'recommendation'],
	},
	'https://balupton.com/screenflow': {
		name: 'Screenflow',
		url:
			'https://store.telestream.net/affiliate.php?ACCOUNT=TELESTRE&AFFILIATE=45446&PATH=http://www.telestream.net/screenflow/',
		description: 'Use Screenflow to do screencasts',
		color: '#009bdf',
		tags: ['referral'],
	},
	'https://balupton.com/airtasker': {
		name: 'Airtasker',
		url:
			'http://mail.airtasker.com/wf/click?upn=JalSgYCkT0ZI-2Bw45xk4vmrAhDtJvUSrWoM8aOtgnYf-2FjzVj6Pr4xUEHxebs5pQnF420bjJweZagd9p-2FeHbDWuA-3D-3D_xg4Iuf5a2mwDa1KxKgyCbGVAHupcFAbxI8rKgjLgfgN5LbOhe9IqDQ4AORWS7MaJNK4-2FmWOjfLAvOJ0obbOKpVy7UePSfIBv2WsQJD9fPJ-2FybjZfT0gi6vvQ0cPNheFa-2BKhswj67JD4w46eREx1VZ4mxLcxds-2FTEa6IP8wK0Y4xpDADJzR2vH0aGgJ-2BtKiP-2Fb-2BPS-2B8-2FcR7doTWuo9CAv7ZF-2FHQLbUzR2SZ2ZVSLY95Q-3D',
		description: 'Use Airtasker to delegate physical tasks to minions',
		color: '#007fad',
		tags: ['referral'],
	},
	'https://balupton.com/fancyhands': {
		name: 'Fancy Hands',
		url: 'http://www.fancyhands.com/r/8c2e46df0aa7',
		description: 'Use Fancy Hands to delegate information tasks to minions',
		color: '#db5344',
		tags: ['referral'],
	},
	'https://balupton.com/workflowy': {
		name: 'Workflowy',
		url: 'https://workflowy.com/invite/111143f5.lnx',
		description:
			'Use Workflowy to organise your life using nested bullet points',
		color: '#5389af',
		tags: ['referral'],
	},
	'https://balupton.com/zapier': {
		name: 'Zapier',
		url: 'http://zpr.io/AhX',
		description: 'Use Zapier to automate your digital workflows',
		color: '#ff4a00',
		tags: ['referral'],
	},
	'https://balupton.com/ovo': {
		name: 'OVO',
		url: 'http://fanclub.ovo.com.au/mQe3Ahx',
		description: 'Use OVO for your phone plan in Australia (Telstra Network)',
		color: '#6b37ff',
		tags: ['referral'],
	},
	'https://balupton.com/belong': {
		name: 'Belong',
		url: 'https://www.belong.com.au/iaf?promo=IAF6Y56XY',
		description:
			'Use Belong for your phone and broadband plans in Australia (Telstra Network)',
		color: '#41b6e6',
		tags: ['referral'],
	},
	'https://balupton.com/amaysim': {
		name: 'Amaysim',
		url: 'http://amaysi.ms/balupton',
		description: 'Use Amaysim for your phone plan in Australia (Optus Network)',
		color: '#e65014',
		tags: ['referral'],
	},
	'https://balupton.com/yoodo': {
		name: 'Yoodo',
		url:
			'https://app.yoodo.com.my/assets/index.html#friendInvitation?code=xiifp3656 ',
		description: 'Use Yoodo for your phone plan in Malaysia',
		color: '#e73c50',
		tags: ['referral'],
	},
	'https://balupton.com/flexiroam': {
		name: 'Flexiroam',
		url: 'http://roam.my/VKMG4TS8',
		description: 'Use Flexiroam for your global roaming needs',
		color: '#EB1D25',
		tags: ['referral'],
	},
	'https://balupton.com/audiojungle': {
		name: 'Audio Jungle',
		url: 'http://audiojungle.net/?ref=balupton',
		description: 'Use Audio Jungle to purchase audio for videos',
		color: '#82b440',
		tags: ['referral'],
	},
	'https://balupton.com/themeforest': {
		name: 'Theme Forest',
		url: 'http://themeforest.net/?ref=balupton',
		description: 'Use Theme Forest to purchase themes for websites',
		color: '#7bc4c4',
		tags: ['referral'],
	},

	// Links
	'https://balupton.com/peac': {
		name: 'PEAC',
		url: 'http://www.det.wa.edu.au/redirect/?oid=MultiPartArticle-id-11045758',
		description:
			'Primary Extension and Challenge (PEAC) is a part-time program for public school children in Years 5, 6 and 7. Children participate in a range of innovative and challenging programs offered in a variety of ways. Children are withdrawn from regular class to attend PEAC programs.',
	},
	'https://balupton.com/husband': {
		name: 'Husband',
		url: 'http://h.lupton.cc',
		description:
			'Helen Lupton is my amazing wife. Learn about Helen on her blog.',
	},
	'https://balupton.com/opencollaboration': {
		name: 'Open-Collaboration',
		url: 'https://github.com/bevry/goopen',
		description:
			"Open-Collaboration is the notion that we can all work together freely and liberally to accomplish amazing things. It's what I dedicate my life too. Learn about Open-Collaboration via the Go Open Campaign.",
	},
	'https://balupton.com/freeculture': {
		name: 'Free Culture',
		url: 'http://en.wikipedia.org/wiki/Free_culture_movement',
		description:
			'Free Culture is the notion that everything should be free, in terms of free as in no money needed, and free as in people can re-use it liberally. Learn about Free Culture on Wikipedia.',
	},
	'https://balupton.com/bookupdates': {
		name: 'Book Newsletter',
		url: 'https://confirmsubscription.com/h/r/36CE01ACCFE65688',
		description: 'Subscribe for updates when I publish new books',
	},
	'https://balupton.com/books': 'https://balupton.com/bookupdates',
	'https://balupton.com/book': {
		name: 'Intentionally Left Blank',
		url: 'https://gumroad.com/l/vKuF',
		description:
			'Author of the mostly likely not the best non-best selling book in cultural literature right now.',
	},
	'https://balupton.com/author': 'https://balupton.com/book',
	'https://balupton.com/privileged': {
		name: 'privileged',
		url: 'https://www.youtube.com/watch?v=cRsYwu8uD4I',
		description: 'Privileged, yes, no?',
	},
	'https://balupton.com/male': {
		name: 'male',
		url:
			'https://www.youtube.com/watch?v=vp8tToFv-bA&list=PLYVl5EnzwqsRPSBKIn6qMatpxWopxs1eB',
		description: 'Interesting analysis of gender roles and issues',
	},
	'https://balupton.com/ausvsusa': {
		name: 'Australia vs America',
		url: 'https://youtu.be/u--1_WrGpZo',
		description:
			'Comedic sketch comparing the potential for gangsta rappers from Australia and America',
	},
	'https://balupton.com/simpleliving': {
		name: 'Simple Living',
		url: 'https://en.wikipedia.org/wiki/Simple_living',
		description:
			"Simple living encompasses a number of different voluntary practices to simplify one's lifestyle. These may include reducing one's possessions, generally referred to as Minimalism, or increasing self-sufficiency, for example.",
	},
	'https://balupton.com/nomad': {
		name: 'Global Nomad',
		url: 'https://en.wikipedia.org/wiki/Global_nomad',
		description:
			'Global nomad is a term applied to people who are living a mobile and international lifestyle.',
	},
	'https://balupton.com/vegan': {
		name: 'Vegan',
		url: 'http://medium.com/p/c60913a8ca5b',
		description:
			'Veganism is the stance that other lives are not ours to own. Vegans commonly associate this with the practice of reducing their harm to all lives, primarily through a strict-vegetarian diet and lifestyle. Learn about what turned me vegan.',
	},
	'https://balupton.com/vegetarian': 'https://balupton.com/vegan',
	'https://balupton.com/ahimsa': {
		name: 'Ahimsa',
		url: 'https://en.wikipedia.org/wiki/Ahimsa',
		description:
			'Ahimsa is referred to as nonviolence, and it applies to all living beings - including all animals - according to many Indian religions.',
	},
	'https://balupton.com/agnostic': {
		name: 'Agnostic',
		url: 'http://en.wikipedia.org/wiki/Agnostic',
		description:
			'Agnosticism is the understanding that one cannot prove the existance or non-existance of something that is not observable, therefore agnostics do not take a theist or athiest stance. Learn about Agnosticism on Wikipedia.',
	},
	'https://balupton.com/pantheist': {
		name: 'Pantheist',
		url: 'http://en.wikipedia.org/wiki/Pantheism',
		description:
			'Pantheism is a stance that believes the notion of God is synonymous with the notion of the Universe. Learn about Pantheism on Wikipedia.',
	},
	'https://balupton.com/docpad': 'https://docpad.org',
	'https://balupton.com/quora': {
		name: 'Quora',
		url: 'https://www.quora.com/profile/Benjamin-Lupton',
		description: "Quora is the world's largest Q&A website",
	},
	'https://hostel.bevry.me/list': {
		name: 'Setup Hostels around the world',
		url: 'https://hostel.bevry.me/compare',
		description: 'There are now more than 30 Startup Hostels around the world!',
	},
	'https://hostel.bevry.me': {
		name: 'Startup Hostel',
		url: 'https://twitter.com/startuphostel',
		description:
			'Startup Hostel is a co-work and co-live initiative. Learn about Startup Hostel on its website.',
	},
	'https://balupton.com/hostellist': {
		url: 'https://hostel.bevry.me/list',
		redirect: 'permanent',
	},
	'https://balupton.com/hostel': {
		url: 'https://hostel.bevry.me',
		redirect: 'permanent',
	},
	'https://balupton.com/historyjs': {
		name: 'History.js',
		url: 'https://github.com/browserstate/history.js',
		description:
			'History.js became one of the most game changing and popular utilities for web developers. Freelancers all the way to enterprise used it to lead the way into stateful web applications. It was huge.',
	},
	'https://balupton.com/taskgroup': {
		name: 'TaskGroup',
		url: 'https://taskgroup.bevry.me',
		description:
			'Group together synchronous and asynchronous tasks and execute them with support for concurrency, naming, and nesting.',
	},
	'https://balupton.com/bevry': {
		name: 'Bevry',
		url: 'https://bevry.me',
		description:
			"Bevry is the open-company and community that I founded in 2011, it's a great thing. Learn about Bevry on its website.",
	},
	'https://balupton.com/lossleader': {
		name: 'Loss-Leader',
		url: 'https://en.wikipedia.org/wiki/Loss_leader',
		description:
			'A loss leader is a pricing strategy where a product is sold at a price below its market cost to stimulate other sales of more profitable goods or services.',
	},
	'https://balupton.com/webwrite': {
		name: 'Web Write',
		url: 'https://github.com/webwrite',
		description:
			'Web Write is an open-source initiative to create a series of admin interfaces that work with any backend. Learn more about Web Write on its website.',
	},
	'https://balupton.com/kasper': {
		name: 'Kasper Tidemann',
		url: 'http://www.kaspertidemann.com',
		description:
			'CEO at Tidemann&Co. Lover of life, the universe, and everything in between. I speak web, JavaScript, Go, NoSQL, and more. Dreams burn but in ashes are gold.',
	},
	'https://balupton.com/lightbox': {
		name: 'jQuery Lightbox Plugin',
		url: 'https://github.com/balupton/jquery-lightbox',
		description:
			'Lightboxes are a way to display an image on the same web page simply and elegantly.',
	},
	'https://balupton.com/services': {
		name: 'Services',
		url: 'https://bevry.me/services',
		description: "View my company's services",
	},
	'https://balupton.com/opensource': {
		name: 'Open-Source',
		url: 'http://en.wikipedia.org/wiki/Open-source_software',
		description:
			'Open-Source is the releasing of the original format of something so that others can improve on it freely. Learn about Open-Source on Wikipedia.',
	},
	'https://balupton.com/stackoverflow': {
		name: 'Stackoverflow',
		url: 'https://stackoverflow.com/users/130638/balupton?tab=profile',
		description: 'View my profile on Stackoverflow',
	},
	'https://balupton.com/html': {
		name: 'HTML',
		url: 'http://en.wikipedia.org/wiki/HTML',
		description:
			'HTML is the langauge that the content of websites are written in. Learn about HTML on Wikipedia.',
	},
	'https://balupton.com/coffeescript': {
		name: 'CoffeeScript',
		url: 'http://coffeescript.org',
		description:
			'CoffeeScript is a high-level language that compiles to JavaScript. Learn about CoffeeScript on its website.',
	},
	'https://balupton.com/javascript': {
		name: 'JavaScript',
		url: 'http://en.wikipedia.org/wiki/JavaScript',
		description:
			'JavaScript is the language that makes website interactive. It powers the web. Learn about JavaScript on Wikipedia.',
	},
	'https://balupton.com/zeit': {
		name: 'ZEIT',
		url: 'https://zeit.co',
		description:
			'ZEIT is cloud hosting company blending the barriers between static and dynamic websites.',
	},
	'https://balupton.com/nextjs': {
		name: 'Next.js',
		url: 'https://nextjs.org',
		description:
			"Zeit's Next.js is a React.js Framework that blends the barriers between static and dynamic websites.",
	},
	'https://balupton.com/ecmascript': {
		name: 'ECMAScript',
		url: 'https://en.wikipedia.org/wiki/ECMAScript',
		description:
			'ECMAScript is the scripting-language specification behind languages such as JavaScript, JScript and ActionScript that have come into wide use for client-side scripting on the Web.',
	},
	'https://balupton.com/flash': {
		name: 'Flash',
		url: 'https://en.wikipedia.org/wiki/Adobe_Flash_Player',
		description:
			'Adobe Flash is used for viewing multimedia, executing rich Internet applications, and streaming video and audio.',
	},
	'https://balupton.com/actionscript': {
		name: 'ActionScript',
		url: 'https://en.wikipedia.org/wiki/ActionScript',
		description:
			'ActionScript is used primarily for the development of websites and software targeting the Adobe Flash Player platform.',
	},
	'https://balupton.com/swift': {
		name: 'Swift',
		url: 'https://en.wikipedia.org/wiki/Swift_(programming_language)',
		description:
			'Swift is a high-level programming language used to create powerful applications.',
	},
	'https://balupton.com/csharp': {
		name: 'C#',
		url: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
		description:
			'C# is a high-level programming language used to create powerful applications.',
	},
	'https://balupton.com/pascal': {
		name: 'Pascal',
		url: 'https://en.wikipedia.org/wiki/Pascal_(programming_language)',
		description:
			'Pascal is a historically influential imperative and procedural programming language as a small and efficient language intended to encourage good programming practices using structured programming and data structuring.',
	},
	'https://balupton.com/cobol': {
		name: 'COBOL',
		url: 'https://en.wikipedia.org/wiki/COBOL',
		description:
			'COBOL is a compiled English-like computer programming language designed for business use.',
	},
	'https://balupton.com/asp': {
		name: 'ASP',
		url: 'https://en.wikipedia.org/wiki/Active_Server_Pages',
		description:
			'Active Server Pages and ASP.net are server-side script engines used to create dynamically generated web pages.',
	},
	'https://balupton.com/perl': {
		name: 'Perl',
		url: 'https://en.wikipedia.org/wiki/Perl',
		description:
			'Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages. ',
	},
	'https://balupton.com/php': {
		name: 'PHP',
		url: 'https://en.wikipedia.org/wiki/PHP',
		description:
			'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.',
	},
	'https://balupton.com/itunes': {
		name: 'iTunes',
		url: 'https://itunes.apple.com',
		description:
			'iTunes is a media player, media library, online radio broadcaster, and mobile device management application developed by Apple Inc.',
	},
	'https://balupton.com/dll': {
		name: 'DLL',
		url: 'https://en.wikipedia.org/wiki/Dynamic-link_library',
		description:
			'Dynamic-Link Library files are used to expose Application Programming Interfaces that different applications can use to expose functionality to each other.',
	},
	'https://balupton.com/nodejs': {
		name: 'Node.js',
		url: 'http://nodejs.org/',
		description:
			'Node.js is JavaScript on the backend, it lets frontend web developers code web servers and desktop applications. Its really cool. Learn about Node.js on its website.',
	},
	'https://balupton.com/permissive-license': {
		name: 'Permissive Software License',
		url: 'http://en.wikipedia.org/wiki/Permissive_free_software_licence',
	},
	'https://balupton.com/mit-license': {
		name: 'MIT License',
		url: 'http://spdx.org/licenses/MIT.html',
	},
	'https://balupton.com/cca-license': {
		name: 'Creative Commons Attribution 4.0 Unported License',
		url: 'http://spdx.org/licenses/CC-BY-4.0.html',
	},
	'https://balupton.com/trich': {
		name: 'Trichotillomania',
		url: 'http://www.trich.org/about/hair-faqs.html',
		description:
			"Along with up to 10% of the population by some estimates, I happen to have trichotillomania (obsessive compulsive hair pulling) that for me, occurs in times of emotional despair, once every few years. It's time the mental illness stigma goes away. Learn about Trichotillomania on the TLC Learning Centre.",
	},
	'https://balupton.com/poly': {
		name: 'Polyamorous',
		url: 'https://en.wikipedia.org/wiki/Polyamory',
		description:
			'Polyamory is the practice, desire, or acceptance of intimate relationships that are not exclusive with respect to other sexual or intimate relationships, with knowledge and consent of everyone involved.',
	},
	'https://balupton.com/openrel': {
		name: 'Open Relationships',
		url: 'https://en.wikipedia.org/wiki/Open_relationship',
		description:
			'An open relationship is an interpersonal relationship in which the parties want to be together but agree to a form of a non-monogamous relationship.',
	},
	'https://balupton.com/closedrel': {
		name: 'Closed Relationship',
		url: 'https://en.wikipedia.org/wiki/Monogamy',
		description:
			'Monogamy is a form of relationship in which an individual has only one partner during his or her lifetime or at any one time.',
	},
	'https://balupton.com/sexpos': {
		name: 'Sexual Positivity',
		url: 'https://en.wikipedia.org/wiki/Sex-positive_movement',
		description:
			'The sex-positive movement is a social movement which promotes and embraces sexuality with few limits beyond an emphasis on safe sex and the importance of consent. Sex positivity is "an attitude towards human sexuality that regards all consensual sexual activities as fundamentally healthy and pleasurable, and encourages sexual pleasure and experimentation.',
	},
	'https://balupton.com/bachelorpad': {
		name: 'Bachelor Pad',
		url: 'https://en.wikipedia.org/wiki/Bachelor_pad',
		description:
			'A bachelor pad is a slang term for a house (pad) in which a bachelor or bachelors (single men) live.',
	},
	'https://balupton.com/pua': {
		name: 'Pickup Artistry',
		url: 'https://en.wikipedia.org/wiki/Seduction_community',
		description:
			'Pickup Artistry focuses around communities of men and women whose goal is to improve their inter-gender social skills, of which seduction is a primary aspect. It is essentially women magazines for men.',
	},
	'https://balupton.com/personaldev': {
		name: 'Personal Devleopment',
		url: 'https://en.wikipedia.org/wiki/Personal_development',
		description:
			'Personal development covers activities that improve awareness and identity, develop talents and potential, build human capital and facilitate employability, enhance quality of life and contribute to the realization of dreams and aspirations.',
	},
	'https://balupton.com/mindful': {
		name: 'Mindfulness',
		url: 'https://en.wikipedia.org/wiki/Mindfulness',
		description:
			'The practice of mindfulness involves being aware moment-to-moment, of one’s subjective conscious experience from a first-person perspective.',
	},
	'https://balupton.com/tolle': {
		name: 'Eckhart Tolle',
		url: 'https://en.wikipedia.org/wiki/Eckhart_Tolle',
		description:
			'Eckhart is a spiritual teacher and author who was born in Germany and educated at the Universities of London and Cambridge.',
	},
	'https://balupton.com/paulo': {
		name: 'Paulo Coelho',
		url: 'https://en.wikipedia.org/wiki/Paulo_Coelho',
		description:
			'Paulo Coelho is a Brazilian lyricist and novelist. He is the recipient of numerous international awards. The Alchemist, his most famous novel, has been translated into 80 languages.',
	},
	'https://balupton.com/nlp': {
		name: 'Neuro-Linguistic Programming',
		url: 'https://en.wikipedia.org/wiki/Neuro-linguistic_programming',
		description:
			'Neuro-linguistic programming (NLP) is an approach to communication, personal development, and psychotherapy created by Richard Bandler and John Grinder in California, United States in the 1970s. Its creators claim a connection between the neurological processes ("neuro"), language ("linguistic") and behavioral patterns learned through experience ("programming") and that these can be changed to achieve specific goals in life.',
	},
	'https://balupton.com/hypno': {
		name: 'Hypnotherapy',
		url: 'https://en.wikipedia.org/wiki/Hypnotherapy',
		description:
			'Hypnotherapy is a form of psychotherapy used to create subconscious change in a patient in the form of new responses, thoughts, attitudes, behaviours or feelings.',
	},
	'https://balupton.com/extremelife': {
		name: 'Extreme Lifestyle Experiments',
		url: 'https://www.youtube.com/watch?v=W6cAR2eQHUU',
		description:
			'A controlled change in your lifestyle undertaken for a period of time intended to give you new perspective.',
	},
	'https://balupton.com/halo3': {
		name: 'Halo 3',
		url: 'https://en.wikipedia.org/wiki/Halo_3',
		description:
			'Halo 3 is a 2007 first-person shooter video game developed by Bungie for the Xbox 360 console.',
	},
	'https://balupton.com/roadtrips': {
		name: 'Road Trips',
		url: 'https://en.wikipedia.org/wiki/Road_trip',
		description:
			'A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile; especially RVs.',
	},
	'https://balupton.com/pool': {
		name: 'Pool Billiards',
		url: 'https://en.wikipedia.org/wiki/Pool_(cue_sports)',
		description:
			'Pool, also more formally known as pocket billiards (mostly in North America) or pool billiards (mostly in Europe and Australia), is the family of cue sports and games played on a pool table having six receptacles called pockets along the rails, into which balls are deposited as the main goal of play.',
	},
	'https://balupton.com/moneyless': {
		name: 'Moneyless Living',
		url: 'http://www.moneylessmanifesto.org',
		description:
			"Moneyless living is a life abstaining from direct use of money, instead using excess and natural methods of meeting life's demands.",
	},
	'https://balupton.com/lentil': {
		name: 'Lentil as Anything',
		url: 'https://en.wikipedia.org/wiki/Lentil_as_Anything',
		description:
			"Lentil as Anything is a not-for-profit volunteer based pay-what you want restaraunt. It's Sydney location is completely vegan, containing a restaraunt and mocktail bar. It's a great place to hang out.",
	},
	'https://balupton.com/paycan': {
		name: 'Pay What You Can',
		url: 'https://en.wikipedia.org/wiki/Pay_what_you_can',
		description:
			'Pay what you can is a non-profit or revenue driven plan of action which does not rely on upon set costs for its merchandise, but rather requests that clients pay what they feel the item or administration is worth to them.',
	},
	'https://balupton.com/hitch': {
		name: 'Hitchhiking',
		url: 'https://en.wikipedia.org/wiki/Hitchhiking',
		description:
			'Hitchhiking is a means of transportation that is gained by asking people, usually strangers, for a ride in their automobile or other road vehicle. A ride is usually, but not always, free.',
	},
	'https://balupton.com/walk': {
		name: 'Bibbulmum Track',
		url: 'https://www.bibbulmuntrack.org.au',
		description:
			'The Bibbulmun Track is one of the world’s great long distance walk trails, stretching 1000km from Kalamunda in the Perth Hills, to Albany on the south coast, winding through the heart of the scenic South West of Western Australia.',
	},
	'https://balupton.com/bladelyf': {
		name: 'Bladelyf by Frenchy and the Talent',
		url: 'https://www.youtube.com/watch?v=GduphPDJvJQ',
		description: 'Music video about Rollerblading in Australia',
	},
	'https://balupton.com/tafe': {
		name: 'Central TAFE',
		url: 'https://central.wa.edu.au/aboutus/',
		description:
			'Central TAFE provides technical and vocational trainings in Western Australia.',
	},
	'https://balupton.com/comosec': {
		name: 'Como Secondary College',
		url: 'https://en.wikipedia.org/wiki/Como_Secondary_College',
		description:
			'Como Secondary College is a public, co-educational state high school in Western Australia.',
	},
	'https://balupton.com/ssst': {
		name: 'Specialist Studies in Science &amp; Technology',
		url: 'http://www.como.wa.edu.au/EMITS.62.0.html',
		description:
			'The EMITS (formerly SSST) program offers students of above average ability in the mathematics, science and technology fields an exciting and challenging program of learning to build a solid knowledge and skills base for further university studies.',
	},
	'https://balupton.com/hockeyacad': {
		name: 'Hockey Academy',
		url: 'http://www.como.wa.edu.au/Hockey-Academy.59.0.html',
		description:
			'Students at the Hockey Academy receive a diverse hockey experience with the major focus being given to skill development and game strategy.',
	},
	'https://balupton.com/hockey': {
		name: 'Field Hockey',
		url: 'https://en.wikipedia.org/wiki/Field_hockey',
		description:
			'Field hockey is played with a ball on natural grass, or on sand-based or water based artificial turfs with a small hard ball.',
	},
	'https://balupton.com/aoe': {
		name: 'Age of Empires',
		url: 'https://en.wikipedia.org/wiki/Age_of_Empires_II',
		description:
			'Age of Empires II: The Age of Kings is a real-time strategy (RTS) video game developed by Ensemble Studios and published by Microsoft.',
	},
	'https://balupton.com/highschool': {
		name: 'High School',
		url: 'https://en.wikipedia.org/wiki/Secondary_education#Australia',
		description:
			'Australia utilises High Schools to achieve Secondary Education for teenagers. It is the schooling between Primary Education and University.',
	},
	'https://balupton.com/diplomaweb': {
		name: 'Diploma of Website Design & Development',
		url: 'http://www.myskills.gov.au/courses/details?Code=ICT50615',
		description:
			'This qualification provides the skills and knowledge for an individual to design, build and manage websites as an independent web developer or as part of a team.',
	},
	'https://balupton.com/cannabis': {
		name: 'Cannabis',
		url: 'https://en.wikipedia.org/wiki/Cannabis_(drug)',
		description:
			'Cannabis is a psychoactive drug often consumed for its mental and physical effects, such as heightened mood, relaxation, and an increase in appetite.',
	},
	'https://balupton.com/lsd': {
		name: 'LSD',
		url: 'https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide',
		description:
			'LSD (also called acid) is a psychedelic drug well known for its psychological effects—which can include altered thinking processes, closed-and open-eye visuals, synesthesia, an altered sense of time, and spiritual experiences.',
	},
	'https://balupton.com/mdma': {
		name: 'MDMA',
		url: 'https://en.wikipedia.org/wiki/MDMA',
		description:
			'MDMA (also called Ecstacy) is a psychoactive drug that is consumed primarily for its euphoric and empathogenic effects.',
	},
	'https://balupton.com/panic': {
		name: 'Panic Attack',
		url: 'https://en.wikipedia.org/wiki/Panic_attack',
		description:
			'Panic attacks are periods of intense fear or apprehension of sudden onset accompanied by at least four or more bodily or cognitive symptoms (such as heart palpitations, dizziness, shortness of breath, or feelings of unreality) and of variable duration from minutes to hours.',
	},
	'https://balupton.com/anxiety': {
		name: 'Generalised Anxiety Panic Disorder',
		url: 'https://en.wikipedia.org/wiki/Generalized_anxiety_disorder',
		description:
			'Generalized anxiety disorder (GAD) is an anxiety disorder characterized by excessive, uncontrollable and often irrational worry, that is, apprehensive expectation about events or activities.',
	},
	'https://balupton.com/bucket': {
		name: 'Stress Bucket',
		url:
			'https://student.unsw.edu.au/sites/all/files/uploads/CAPS/Stress%20Bucket.pdf',
		description:
			'Too much stress will cause our stress bucket to overflow. By using our coping skills we can keep our stress levels down.',
	},
	'https://balupton.com/depersonalisation': {
		name: 'Depersonalisation Disorder',
		url: 'https://en.wikipedia.org/wiki/Depersonalization_disorder',
		description:
			"Depersonalization is described as feeling disconnected or estranged from one's body, thoughts, or emotions. Individuals experiencing depersonalization may report feeling as if they are in a dream or are watching themselves in a movie.",
	},
	'https://balupton.com/night': {
		name: 'Night Terrors',
		url: 'https://en.wikipedia.org/wiki/Night_terror',
		description:
			'During night terror bouts, patients are usually described as "bolting upright" with their eyes wide open and a look of fear and panic on their faces. They will often scream.',
	},
	'https://balupton.com/gp': {
		name: 'GP',
		url: 'https://en.wikipedia.org/wiki/General_practitioner#Australia',
		description:
			'A doctor based in the community who treats patients with minor or chronic illnesses and refers those with serious conditions to a hospital.',
	},
	'https://balupton.com/psych': {
		name: 'Clinical Psychiatrist',
		url: 'https://en.wikipedia.org/wiki/Clinical_psychology',
		description:
			'Clinical psychology is an integration of the science, theory and clinical knowledge for the purpose of understanding, preventing, and relieving psychologically-based distress or dysfunction and to promote subjective and behavioural well-being and personal development.',
	},
	'https://balupton.com/livemessenger': {
		name: 'Windows Live Messenger',
		url: 'https://en.wikipedia.org/wiki/Windows_Live_Messenger',
		description:
			'Windows Live Messenger was a popular instant messaging client developed for multiple Microsoft platforms.',
	},
	'https://balupton.com/webctexploit': {
		name: 'WebCT Security Advisory',
		url: 'https://gist.github.com/balupton/3cb9a0e066ebb899d2be',
		description:
			'My first security advisory: WebCT 4.x Javascript Session Stealer Exploits',
	},
	'https://balupton.com/webct': {
		name: 'WebCT',
		url: 'https://en.wikipedia.org/wiki/WebCT',
		description:
			'WebCT also called Blackboard Learning System, is an online proprietary virtual learning environment system that is licensed to colleges and other institutions and used in many campuses for e-learning.',
	},
	'https://balupton.com/blogs/dev?description=webct_session_stealer_exploit': {
		url: 'https://balupton.com/webctexploit',
		redirect: 'permanent',
	},
	'https://balupton.com/documents/webct_exploits.txt': {
		url: 'https://balupton.com/webctexploit',
		redirect: 'permanent',
	},
	'https://balupton.com/dsr': {
		name: 'Data-Science Retreat',
		url: 'http://datascienceretreat.com',
		description:
			'Data-Science Retreat is a training company for teaching data-science from the best in the field.',
	},
	'https://balupton.com/nodeschool': {
		name: 'NodeSchool',
		url: 'http://nodeschool.io',
		description:
			'NodeSchool is a decentralised training initiative for teaching Node.js.',
	},
	'https://balupton.com/bcsit': {
		name: 'Bachelor of Computer Science (Information Technology)',
		url:
			'http://archive.handbook.curtin.edu.au/february2006/courses/14/143010.html',
		description:
			'The Bachelor of Science (Information Technology) course focuses on the overall discipline of information technology which covers the more technological and applied aspects of computing, with less emphasis on theory. Some of these areas range from system programming to software design and engineering, networking - including Internet and the web, artificial intelligence for decision support and graphics. Information technology graduates continue to be in demand as computing is one of the biggest growth areas in the world.',
	},
	'https://balupton.com/degree': 'https://balupton.com/bcsit',
	'https://balupton.com/curtin': {
		name: 'Curtin University',
		url: 'https://en.wikipedia.org/wiki/Curtin_University',
		description:
			'Curtin University is an Australian public university based in Bentley, Perth, Western Australia.',
	},
	'https://balupton.com/unimelb': {
		name: 'University of Melbourne',
		url: 'https://en.wikipedia.org/wiki/University_of_Melbourne',
		description:
			'The University of Melbourne is a public research university located in Melbourne, Australia.',
	},
	'https://balupton.com/gdaph': {
		name: 'Graduate Diploma in Arts (Philosophy)',
		url: 'https://handbook.unimelb.edu.au/components/gd-arts-spec-24',
	},
	'https://balupton.com/gentics': {
		name: 'Gentics',
		url: 'http://www.gentics.com/genticscms/index.en.html',
		description:
			'Gentics Software stands for future-oriented design and trustworthy products backed by a curious and enthusiastic team.',
	},
	'https://balupton.com/acidgreen': {
		name: 'Acid Green',
		url: 'http://www.acidgreen.com.au',
		description:
			'Founded in 2000, acidgreen is an award winning full service digital agency offering premium web design, web development, ecommerce and internet marketing services.',
	},
	'https://balupton.com/bugherd': {
		name: 'BugHerd',
		url: 'http://bugherd.com',
		description:
			"BugHerd is the world's easist bug tracker, a way to capture client feedback, resolve issues and manage your projects.",
	},
	'https://balupton.com/spa': {
		name: 'Client-Side Web Application',
		url: 'https://en.wikipedia.org/wiki/Single-page_application',
		description:
			'A single-page application is a web application or web site that fits on a single web page with the goal of providing a more fluent user experience similar to a desktop application.',
	},
	'https://balupton.com/alohadevcon': {
		name: 'Aloha Editor Dev Con',
		url: 'https://www.youtube.com/watch?v=btxLv8MPsJI',
		description:
			'Aloha Editor Dev Con was held in Vienna, Austria in 2011 and went for 2 weeks.',
	},
	'https://balupton.com/aloha': {
		name: 'Aloha Editor',
		url: 'http://www.alohaeditor.org/',
		description:
			'Aloha Editor is an open source WYSIWYG editor that can be used in webpages. Aloha Editor aims to be easy to use and fast in editing, and allows advanced inline editing.',
	},
	'https://balupton.com/metarefresh': {
		name: 'Meta Refresh',
		url: 'https://metarefresh.in/2013/',
		description:
			'Meta Refresh is a conference on the construction of user experience on the web. The 2013 edition is about letting go.',
	},
	'https://balupton.com/bangalore': {
		name: 'Bangalore',
		url: 'https://en.wikipedia.org/wiki/Bangalore',
		description:
			'Bangalore is the silicon-valley of India. A place with awesome tech, awesome people, and awesome food.',
	},
	'https://balupton.com/whysucks': {
		name: 'Why The Next Big Thing Sucks!',
		url: 'https://www.youtube.com/watch?v=nt4Gt6-T8N0',
		description:
			"We're coders, not hipsters. We're here to change the world, not be swept up by change.",
	},
	'https://balupton.com/queryengine': {
		name: 'Query-Engine',
		url: 'https://github.com/bevry/query-engine',
		description:
			"Live collections are collections that when a model is changed, added or removed, the model is automatically tested against the collection's queries, filters, and search string, if the model fails, it is removed from the collection.",
	},
	'https://balupton.com/crossbrowser': {
		name: 'Cross-Browser',
		url: 'https://en.wikipedia.org/wiki/Cross-browser',
		description:
			'Cross-browser refers to the ability of a website, web application, HTML construct or client-side script to function in environments that provide its required features and to bow out or degrade gracefully when features are absent or lacking.',
	},
	'https://balupton.com/screenshot': {
		name: 'Screenshot',
		url: 'https://en.wikipedia.org/wiki/Screenshot',
		description:
			'A screenshot, screen capture (or screen-cap), screen dump or screengrab is an image taken by a person to record the visible items displayed on the monitor, television, or other visual output device in use.',
	},
	'https://balupton.com/extension': {
		name: 'Browser Extension',
		url: 'https://en.wikipedia.org/wiki/Browser_extension',
		description:
			'A browser extension is a computer program that extends the functionality of a web browser in some way.',
	},
	'https://balupton.com/b2evo': {
		name: 'b2evolution',
		url: 'http://b2evolution.net',
		description:
			'b2evolution is a powerful content and community management system written in PHP and backed by a MySQL database.',
	},
	'https://balupton.com/wordpress': {
		name: 'WordPress',
		url: 'https://wordpress.org',
		description:
			'b2evolution is a beautiful content and community management system written in PHP and backed by a MySQL database.',
	},
	'https://balupton.com/perth': {
		name: 'Perth',
		url: 'https://en.wikipedia.org/wiki/Perth',
		description:
			'Perth is my home-town. It is the capital city of Western Australia and the 4th most populous city in Australia, though with a small-town feel.',
	},
	'https://balupton.com/sydney': {
		name: 'Sydney',
		url: 'https://en.wikipedia.org/wiki/Sydney',
		description:
			'I spent 5 years living in Sydney with my partner. It is a place where money, suits, and smokers live.',
	},
	'https://balupton.com/uluru': {
		name: 'Uluru',
		url: 'https://en.wikipedia.org/wiki/Uluru',
		description:
			'Uluru (also called Ayres Rock) is the humongous rock in the center of Australia that tourists come to see.',
	},
	'https://balupton.com/nullabor': {
		name: 'Nullabor',
		url: 'https://en.wikipedia.org/wiki/Nullarbor_Plain',
		description:
			'The Nullabor is a tree-less desert that spans Australia for over 200,000 square kilometres (77,000 sq mi).',
	},
	'https://balupton.com/australia': {
		name: 'Australia',
		url: 'https://en.wikipedia.org/wiki/Australia',
		description:
			'Australia is a big continent and country in the Southern Hemisphere. It is not upside down, however the toilet does flush the other way.',
	},
	'https://balupton.com/bridge': {
		name: 'Sydney Harbour Bridge',
		url: 'https://en.wikipedia.org/wiki/Sydney_Harbour_Bridge',
		description:
			'The popular old and big bridge in Australia where the fireworks go off.',
	},
	'https://balupton.com/switzerland': {
		name: 'Switzerland',
		url: 'https://en.wikipedia.org/wiki/Switzerland',
		description:
			'Switzerland was the home of my first girlfriend. It is a beautiful snowy country that speaks many languages.',
	},
	'https://balupton.com/austria': {
		name: 'Austria',
		url: 'https://en.wikipedia.org/wiki/Austria',
		description:
			'Austria is a country and home to the city Vienna, it is a beautiful place with tall men.',
	},
	'https://balupton.com/bali': {
		name: 'Bali',
		url: 'https://en.wikipedia.org/wiki/Bali',
		description:
			'Bali is an island in Indonesia and is a popular tourist destination, especially for Australians.',
	},
	'https://balupton.com/toronto': {
		name: 'Toronto',
		url: 'https://en.wikipedia.org/wiki/Toronto',
		description:
			"Toronto is a major city on the east-coast of Cananda. It has some of the best vegan food I've ever had!",
	},
	'https://balupton.com/berlin': {
		name: 'Berlin',
		url: 'https://en.wikipedia.org/wiki/Berlin',
		description:
			'Berlin is a major city in Germany. It is filled with vegan brunch cafes, hipsets, party goers, smokers, and immigrants.',
	},
	'https://balupton.com/myplanet': {
		name: 'Myplanet',
		url: 'http://myplanet.io',
		description:
			"Myplanet is the largest digital consultancy in Cananda. They are filled with awesome people and a terrific culture. One of the best places I've ever worked.",
	},
	'https://balupton.com/exhange': {
		name: 'Exchange Student',
		url: 'https://en.wikipedia.org/wiki/Student_exchange_program',
		description:
			'My family has always had exchange students from many different countries stay with us in our home, usually multiple at a time, of which they would stay 1-12 months to travel and to learn English.',
	},
	'https://balupton.com/ocean': {
		name: 'How We Wrecked The Ocean',
		url:
			'http://balupton.tumblr.com/post/76629442596/jeremy-jackson-how-we-wrecked-the-ocean-this',
		description:
			'In this bracing talk, coral reef ecologist Jeremy Jackson lays out the shocking state of the ocean today: overfished, overheated, polluted, with indicators that things will get much worse. Astonishing photos and stats make the case.',
	},
	'https://balupton.com/email': {
		name: 'Email',
		url: 'mailto:b@lupton.cc',
		description: 'Send Benjamin an email',
		redirect: 'page',
	},
	'https://balupton.com/anomie': {
		name: 'Anomie',
		url: 'https://en.wikipedia.org/wiki/Anomie',
		description:
			'Anomie is a "condition in which society provides little moral guidance to individuals".',
	},
	'https://balupton.com/ausconsent': {
		name: 'Australian Age of Consent Laws',
		url: 'https://aifs.gov.au/cfca/publications/age-consent-laws',
		description: '16 is the legal age of consent in Western Australia',
	},
	'https://balupton.com/wwgb': {
		name: 'Wrong Way, Go Back! Podcast',
		url: 'https://soundcloud.com/wwgbtv',
		description:
			'A podcast for the mistakes we make and the learnings from them',
	},
	'https://balupton.com/vdd': {
		name: 'Veronika Decides to Die, Review',
		url: 'https://www.goodreads.com/review/show/1069969061',
		description:
			'My review for the book "Veronika Decides to Die", by Paulo Coelho, with my alternative ending proposal.',
	},
	'https://balupton.com/fountainhead': {
		name: 'The Fountainhead by Ayan Rand',
		url: 'http://www.imdb.com/description/tt0041386/',
		description: 'This movie is a great stand for individual liberty',
	},
	'https://balupton.com/webeng': {
		name: 'Web Engineering',
		url: 'https://en.wikipedia.org/wiki/Web_engineering',
		description:
			'Web engineering focuses on the methodologies, techniques, and tools that are the foundation of Web application development and which support their design, development, evolution, and evaluation.',
	},
	'https://balupton.com/quantitativepsychology': {
		name: 'Quantitative Psychology',
		url: 'https://en.wikipedia.org/wiki/Quantitative_psychology',
		description:
			'Quantitative psychology interests me as a frontier that if combined carefully with ethics and technology, will have global business and humanitarian potential - one could improve societal and individual outcomes, using technology to gracefully measure wellbeing, promoting success and inhibiting neurosis, or even to screen for early biological and social markers of psychopathy in children for early treatment, promoting socialisation and inhibiting tragedies',
	},
	'https://balupton.com/philosophy': {
		name: 'Philosophy',
		url: 'https://en.wikipedia.org/wiki/Philosophy',
		description:
			'Philosophy interests me, as it not just important to be a ship that stays afloat in the ocean, but also to be a ship that has a dependable compass, as otherwise, one can easily become a pirate with misguided intentions',
	},
	'https://balupton.com/trading': {
		name: 'Trading',
		url: 'https://github.com/balupton/automated-trading',
		description:
			'Trading interests me, as it is an unlimited supply of money, that with some wit and grace, can be tapped into, consenually and anytime, freeing one up for other things, without waiting for clients',
	},
	'https://balupton.com/trader': 'https://balupton.com/trading',
	'https://balupton.com/ipvmen': {
		name: 'Intimate Partner Violence against Men',
		url:
			'https://www.researchgate.net/publication/51571741_Symptoms_of_Posttraumatic_Stress_Disorder_in_Men_Who_Sustain_Intimate_Partner_Violence_A_Study_of_Helpseeking_and_Community_Samples',
		description:
			'25-50% of intimate partner violence victims are men, and men are more likely to develop PTSD from such encounters',
	},
	// Posts
	'https://balupton.com/2017ssgs': {
		name: "2017's Generation of Static Site Generators",
		url:
			'https://medium.com/@balupton/2017s-generation-of-static-site-generators-164c3b7b9f97',
		description:
			'In 2017 I anticipate we will see a new generation of static site generator (SSG), with importing and rendering decoupled from one another.',
	},
	// Talks
	'https://balupton.com/burnouttalk': {
		name: 'Benjamin Lupton on Burnout',
		url: 'https://www.youtube.com/watch?v=Lt_oKuaFgrg',
		description: 'A talk of mine on burnout in web development',
	},
	'https://balupton.com/burnout': {
		name: 'Burnout',
		url: 'http://burnout.io',
		description:
			'Burnout is a state of emotional, mental, and physical exhaustion caused by excessive and prolonged stress.',
	},
	'https://balupton.com/elegant': {
		name: 'Elegantly Produce & Consume Compiled Packages',
		url: 'https://github.com/elegant-talk/elegant',
		description:
			'A talk of mine about elegantly producing and consuming compiled packages',
	},
	'https://balupton.com/nodeconfeu16': {
		name: 'Node.js Interactive Europe 2016',
		url: 'http://events.linuxfoundation.org/events/node-interactive-europe',
		description:
			'The official Node.js Foundation Conference for Europe, held in Amsterdam',
	},
	// Social
	'https://balupton.com/feedly': {
		name: 'Feedly',
		url:
			'http://www.feedly.com/home#subscription/feed/http://feeds.feedburner.com/balupton.atom',
		description: 'Follow me on Feedly',
		color: '#6cc655',
		tags: ['social'],
	},
	'https://balupton.com/twitter': {
		name: 'Twitter',
		url: 'https://twitter.com/balupton',
		description: 'Follow me on Twitter',
		color: '#248DCD',
		tags: ['social'],
	},
	'https://balupton.com/medium': {
		name: 'Medium',
		url: 'https://medium.com/@balupton',
		description: 'Read my posts on Medium',
		color: '#333332',
		tags: ['social'],
	},
	'https://balupton.com/youtube': {
		name: 'YouTube',
		url: 'http://www.youtube.com/user/balupton',
		description: 'View my videos on YouTube',
		color: '#df3333',
		tags: ['social'],
	},
	'https://balupton.com/github': {
		name: 'GitHub',
		url: 'https://github.com/balupton',
		description: 'View my code on GitHub',
		color: 'black',
		tags: ['social'],
	},
	'https://balupton.com/gists': {
		name: 'GitHub Gists',
		url: 'http://gist.github.com/balupton',
		description: 'View my gists on GitHub',
		color: 'black',
	},
	'https://balupton.com/instagram': {
		name: 'Instagram',
		url: 'https://www.instagram.com/balupton/',
		description: 'View my photos on Instagram',
		color: 'rgb(148, 125, 98)',
		tags: ['social'],
	},
	'https://balupton.com/linkedin': {
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/balupton',
		description: 'View my profile on LinkedIn',
		color: '#0083B3',
		tags: ['social'],
	},
	'https://balupton.com/skype': {
		name: 'Skype',
		url: 'https://join.skype.com/invite/aAGjXSSne9OO',
		description: 'View my profile on Skype',
		color: 'rgb(0, 120, 212)',
		tags: ['social'],
	},
	'https://balupton.com/goodreads': {
		name: 'Goodreads',
		url: 'https://goodreads.com/balupton',
		description: 'Discover the books I read on Goodreads',
		color: '#382110',
		tags: ['social'],
	},
	'https://balupton.com/keybase': {
		name: 'Keybase',
		url: 'https://keybase.io/balupton',
		description: 'View my identity on Keybase',
		color: '#ff6f21',
		tags: ['social'],
	},
	'https://balupton.com/alternativeto': {
		name: 'AlternativeTo',
		url: 'http://alternativeto.net/user/balupton/',
		description: 'Discover the Apps and Services I use on AlternativeTo.net',
		color: '#5581A6',
		tags: ['social'],
	},
	'https://balupton.com/spotify': {
		name: 'Spotify',
		url: 'https://open.spotify.com/user/balupton',
		description: 'Listen to the music I like on Spotify',
		color: '#1DB954',
		tags: ['social'],
	},
	'https://balupton.com/soundcloud': {
		name: 'SoundCloud',
		url: 'https://soundcloud.com/balupton',
		description: 'Listen to the music I like and make on SoundCloud;',
		color: '#f50',
		tags: ['social'],
	},
	'https://balupton.com/couchsurfer': {
		url: 'https://balupton.com/couchsurfing',
		redirect: 'temporary',
	},
	'https://balupton.com/couchsurfing': {
		name: 'Couchsurfing',
		url: 'http://couchsurfing.com/people/balupton',
		description: 'View my profile on Couchsurfing',
		color: '#ed6542',
		tags: ['social'],
	},
	'https://balupton.com/couch': {
		url: 'https://balupton.com/couchsurfing',
		redirect: 'permanent',
	},
	'https://balupton.com/tumblr': {
		name: 'Tumblr',
		url: 'http://tumblr.balupton.com',
		description: 'Read my posts on Tumblr',
		color: '#2c4762',
		tags: ['social'],
	},
	'https://balupton.com/runkeeper': {
		name: 'Runkeeper',
		url: 'https://runkeeper.com/user/balupton',
		description: 'Encourage me on Runkeeper',
		color: '#31a4d9',
		tags: ['social'],
	},
	'https://balupton.com/vimeo': {
		name: 'Vimeo',
		url: 'https://vimeo.com/balupton',
		description: 'View my videos on Vimeo',
		color: '#27a6d1',
		tags: ['social'],
	},
	'https://balupton.com/angellist': {
		name: 'Angel List',
		url: 'http://angel.co/balupton',
		description: 'View my profile on Angel List',
		color: '#333',
		tags: ['social'],
	},
	'https://balupton.com/snapchat': {
		name: 'Snapchat',
		url: 'https://www.snapchat.com/add/balupton',
		description: "See what I'm up to via SnapChat",
		color: 'gold',
		tags: ['social'],
	},
	// Misc
	'https://balupton.com/sustainability': {
		name: 'Sustainability',
		url: 'http://balupton.tumblr.com/post/79542013417/sustainability',
		description: 'Read my thoughts on Sustainability',
	},
	'https://balupton.com/meet': {
		name: 'Schedule a Meeting',
		url: 'https://calendly.com/balupton/meet/',
		description: 'Schedule a meeting with me',
	},
	'https://balupton.com/calendar': 'https://balupton.com/meet',
	'https://balupton.com/call-me-instead': 'https://balupton.com/meet',
	'https://balupton.com/call': 'https://balupton.com/meet',
	teach: {
		name: 'Teaching by Donation: Web Development',
		url:
			'https://www.eventbrite.com.au/e/teaching-by-donation-web-development-tickets-20723428332',
		description: 'Attend one of my teaching events',
	},
	'https://balupton.com/source': {
		name: 'Website Source Code',
		url: 'https://github.com/balupton/website',
		description: 'View the source code of this website',
	},
	'https://balupton.com/donate': {
		name: 'Donate',
		url: 'https://bevry.me/donate',
		description: 'Donate to my company and open-community',
	},
	'https://balupton.com/cv': {
		name: 'Curriculum Vitae',
		url:
			'https://www.dropbox.com/s/jch9h79iclcl2qw/LUPTON%20-%20Resume.pdf?dl=0',
		description: 'View my hand-crafted resume',
	},
	'https://balupton.com/resume/linkedin': {
		name: 'LinkedIn Resume',
		url: 'https://www.linkedin.com/in/balupton/',
		description: 'View my resume on LinkedIn',
	},
	'https://balupton.com/resume/stackoverflow': {
		name: 'Stackoverflow Careers',
		url: 'https://careers.stackoverflow.com/balupton',
		description: 'View my resume on Stackoverflow Careers',
	},
	'https://balupton.com/resume/angel': {
		name: 'Angel List Resume',
		url: 'https://angel.co/balupton',
		description: 'View my resume on Angel List',
	},
	'https://balupton.com/resume': 'https://balupton.com/cv',
	'https://balupton.com/atlas-shrugged': {
		name: 'Atlas Shrugged',
		description: 'Ayn Rand — Atlas Shrugged',
		url: '/amazon/0451191145',
		tags: ['recommendation', 'book'],
	},
	'https://balupton.com/steppenwolf': {
		name: 'Steppenwolf',
		description: 'Hermann Hesse — Steppenwolf',
		url: '/amazon/0875867839',
		tags: ['recommendation', 'book'],
	},
	'https://balupton.com/walden': {
		name: 'Walden',
		description: 'Henry David Thoreau — Walden',
		url: '/amazon/1494812509',
		tags: ['recommendation', 'book'],
	},
	'https://balupton.com/speakerrate': {
		name: 'SpeakerRate',
		description: "View the trainings I've given on SpeakerRate",
		url: 'http://speakerrate.com/speakers/11963-benjamin-lupton',
	},
	'https://balupton.com/trainings': 'https://balupton.com/speakerrate',
	'https://balupton.com/talks': {
		name: 'Talks',
		description: "View the talks I've given via YouTube",
		url:
			'https://www.youtube.com/playlist?list=PLYVl5EnzwqsQs0tBLO6ug6WbqAbrpVbNf',
	},
	'https://balupton.com/porn-generation': {
		name: 'Porn Generation',
		description:
			'Ben Shapiro — Porn Generation: How Social Liberalism Is Corrupting Our Future',
		url: '/amazon/0895260166',
		tags: ['recommendation', 'book'],
	},
	'https://balupton.com/wright-relationships': {
		name: 'Some Thoughts About Relationships',
		description:
			'Colin Wright, Joshua Fields — Some Thoughts About Relationships',
		url: '/amazon/B00XCSPJ5S',
		tags: ['recommendation', 'book'],
	},

	// redirects
	'https://bevry.me/contracts': {
		name: 'Contracts',
		url: 'https://drive.google.com/drive/folders/0B6MqiLy7C3PhZ196SHVSQ2MxU00',
		description:
			'The contract templates Benjamin has used successfully with Bevry',
	},
	'https://balupton.com/contracts': {
		url: 'https://bevry.me/contracts',
		redirect: 'permanent',
	},
	'https://balupton.com/contract': {
		url: 'https://bevry.me/contracts',
		redirect: 'permanent',
	},
	'https://bevry.me/contract': {
		url: 'https://bevry.me/contracts',
		redirect: 'permanent',
	},

	// balupton.com
	'https://balupton.com/zoom': {
		name: "Benjamin's Zoom Meeting Room",
		url: 'https://zoom.us/j/9855647764?pwd=Mll2RWc0M3M4NzhnOTdIck5oVHNYZz09',
	},
	'https://balupton.com/wire': {
		name: 'Wire',
		url: 'https://wire.com/en/products/personal-secure-messenger/',
		description: 'Use Wire to securely communicate with your peers',
	},

	// meet.bevry.me
	// 'https://meet.bevry.me': 'https://discuss.bevry.me/t/about-the-meetings/92/1',
	'https://meet.bevry.me/join': {
		url: 'https://bevry.me/discord/meetings',
		redirect: 'temporary',
	},
	'https://meet.bevry.me/watch': {
		url: 'https://bevry.me/youtube',
		redirect: 'temporary',
	},
	'https://meet.bevry.me/schedule': {
		url: 'https://coda.io/d/Meetings_dPmAOiJ2kHE/_sukmJ',
		redirect: 'temporary',
	},

	// bevry.me
	'https://bevry.me/projects/jbp-community': {
		name: 'Jordan B Peterson Community',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Jordan-B-Peterson-Community_su4d_#_luFd1',
		description: 'Learn about Jordan B Peterson Community, a Bevry project',
	},
	'https://bevry.me/projects/jbpcommunity':
		'https://bevry.me/projects/jbp-community',
	'https://bevry.me/jbp-community': 'https://bevry.me/projects/jbp-community',
	'https://bevry.me/projects/mood-journal': {
		name: 'Mood Journal',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Mood-Journal-for-Apple-Watch_suUZM#_luOH1',
		description: 'Learn about Mood Journal, a Bevry project',
	},
	'https://bevry.me/projects/docpad': {
		name: 'DocPad',
		url: 'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/DocPad_suu46#_lulmP',
		description: 'Learn about DocPad, a Bevry project',
	},
	'https://bevry.me/projects/startup-hostel': {
		name: 'Startup Hostel',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Startup-Hostel_suoqH#_luqNG',
		description: 'Learn about Startup Hostel, a Bevry project',
	},
	'https://bevry.me/projects/automated-trading': {
		name: 'Automated Trading',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Automated-Trading_suv4o#_luYQ9',
		description: 'Learn about Automated Trading, a Bevry project',
	},
	'https://bevry.me/projects/hashistack': {
		name: 'Hashistack',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Hashistack_suGLp#_lu-xc',
		description: 'Learn about Hashistack, a Bevry project',
	},
	'https://bevry.me/projects/interconnect': {
		name: 'Interconnect',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Interconnect_sursg#_lufDp',
		description: 'Learn about Interconnect, a Bevry project',
	},
	'https://bevry.me/projects/fountain': {
		name: 'Fountain',
		url: 'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Fountain_su58a#_lu5wr',
		description: 'Learn about Fountain, a Bevry project',
	},
	'https://bevry.me/projects/tithe': {
		name: 'Tithe',
		url: 'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Tithe_sug5-#_luLCx',
		description: 'Learn about Tithe, a Bevry project',
	},
	'https://bevry.me/projects/study': {
		name: 'Bevry Study',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Bevry-Study_supir#_luVKY',
		description: 'Learn about Bevry Study, a Bevry project',
	},
	'https://bevry.me/projects/conversations': {
		name: 'Bevry Conversations',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Bevry-Conversations_suLwS#_lupGw',
		description: 'Learn about Bevry Conversations, a Bevry project',
	},
	'https://bevry.me/projects/landing-kit': {
		name: 'Digital Nomad Landing Kit',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Digital-Nomad-Landing-Kit_subIY#_luVTm',
		description: 'Learn about Digital Nomad Landing Kit, a Bevry project',
	},
	'https://bevry.me/projects/reading-rehab': {
		name: 'Reading Rehab',
		url:
			'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py/Reading-Rehab_suRLq#_luVYE',
		description: 'Learn about Reading Rehab, a Bevry project',
	},
	'https://bevry.me/projects': {
		name: 'Bevry Projects',
		url: 'https://coda.io/d/Bevrys-Projects_dgj0C_T-2Py',
		description: 'Learn about the projects that Bevry is working on',
	},
	'https://bevry.me/v/cm': {
		name: "Bevry's Video Anaylisis on the Christchurch Manifesto",
		url: 'https://youtu.be/uYM42UR0hPU',
	},
	'https://bevry.me/cm': 'https://bevry.me/v/cm',
	'https://bevry.me/youtube': {
		name: 'Bevry Study Group on YouTube',
		url: 'https://www.youtube.com/channel/UCPkobzBsAIjpItonUT7AU9Q',
		description: "Watch Bevry's recorded study group sessions",
	},
	'https://bevry.me/study-group': {
		name: 'Bevry Study Group',
		url: 'https://discuss.bevry.me/t/about-the-meetings/92/1',
		description:
			'Bevry hosts a weekly study group for discussions about philosophy',
	},
	'https://bevry.me/meetings': 'https://bevry.me/study-group',
	'https://bevry.me/meet': 'https://bevry.me/study-group',
	'https://bevry.me/discord/build': {
		url: 'https://discord.gg/AGVSmdg',
		redirect: 'temporary',
	},
	'https://bevry.me/discord/dev': 'https://bevry.me/discord/build',
	'https://bevry.me/discord/study': {
		url: 'https://discord.gg/NSnBk4g',
		redirect: 'temporary',
	},
	'https://bevry.me/discord/meetings': {
		url: 'https://discord.gg/y5PBMar',
		redirect: 'temporary',
	},
	'https://bevry.me/discord': {
		url: 'https://discord.gg/DuBp9Jw',
		redirect: 'temporary',
	},
	'https://bevry.me/livestream': {
		url: 'https://discord.gg/M8ERgNV',
		redirect: 'temporary',
	},
	'https://bevry.me/source': {
		url: 'https://github.com/bevry/website',
		redirect: 'temporary',
	},
	'https://bevry.me/podcaster': {
		url: 'https://bevry.me/podcast',
		redirect: 'permanent',
	},
	'https://bevry.me/podcast': {
		url: 'https://bevry.me/youtube',
		redirect: 'temporary',
	},
	'https://bevry.me/schedule': {
		name: 'Bevry Schedule',
		url:
			'https://paper.dropbox.com/doc/Bevry-Schedule--A50CK797IlE7SsCZdEUlWhQqAQ-JnduDfifkrQ33YyWwUwOQ',
		description:
			'What Bevry has scheduled and what the Bevry Team members are working on',
	},

	//  bevry.me / tos
	'https://bevry.me/tos': {
		url: 'https://discuss.bevry.me/tos',
		redirect: 'temporary',
	},
	'https://bevry.me/terms': 'https://bevry.me/tos',
	'https://bevry.me/privacy': {
		url: 'https://discuss.bevry.me/privacy',
		redirect: 'temporary',
	},

	//  bevry.me / payment
	'https://bevry.me/funding': {
		url: 'https://bevry.me/fund',
		redirect: 'permanent',
	},
	'https://bevry.me/fund': {
		url: 'https://discuss.bevry.me/t/bevrys-funding-services/649/1',
		redirect: 'temporary',
	},
	'https://bevry.me/donate': 'https://bevry.me/fund',
	'https://bevry.me/bounties': 'https://bevry.me/fund',
	'https://bevry.me/payment': 'https://bevry.me/fund',
	'https://bevry.me/coinbase': 'https://bevry.me/payment',
	'https://bevry.me/bitcoin': 'https://bevry.me/payment',
	'https://bevry.me/crypto': 'https://bevry.me/payment',
	'https://bevry.me/cash': 'https://bevry.me/payment',
	'https://bevry.me/goopen': {
		url: 'https://github.com/bevry/goopen',
		redirect: 'permanent',
	},
	'https://bevry.me/paypal': {
		url: 'http://paypal.me/balupton',
		redirect: 'temporary',
	},
	'https://bevry.me/patreon': {
		url: 'https://www.patreon.com/bevry',
		redirect: 'temporary',
	},

	//  bevry.me / social
	'https://bevry.me/google+': {
		url: 'https://plus.google.com/+BevryMe',
		redirect: 'temporary',
	},
	'https://bevry.me/twitter': {
		url: 'https://discuss.bevry.me/t/official-twitter-accounts/86/1',
		redirect: 'temporary',
	},
	'https://bevry.me/trello': {
		url: 'https://trello.com/b/z62c2a6Z/bevry-focus',
		redirect: 'temporary',
	},
	'https://bevry.me/blog': {
		url: 'https://blog.bevry.me',
		redirect: 'permanent',
	},

	//  bevry.me / support
	'https://bevry.me/forum': {
		url: 'https://discuss.bevry.me',
		redirect: 'permanent',
	},
	'https://bevry.me/coding-standards': {
		url: 'https://discuss.bevry.me/t/official-coding-standards/562/1',
		redirect: 'temporary',
	},
	'https://bevry.me/documenation-guidelines': {
		url: 'https://discuss.bevry.me/t/bevrys-documentation-guidelines/582/1',
		redirect: 'temporary',
	},
	'https://bevry.me/support-guidelines': {
		url: 'https://discuss.bevry.me/t/bevrys-support-guidelines/585/1',
		redirect: 'temporary',
	},
	'https://bevry.me/contribute': {
		url: 'https://discuss.bevry.me/t/official-contribution-guide/559/1',
		redirect: 'temporary',
	},
	'https://bevry.me/slack': {
		url: 'https://discuss.bevry.me/t/official-slack-chat-rooms/607/1',
		redirect: 'temporary',
	},
	'https://bevry.me/support': {
		url: 'https://discuss.bevry.me/t/official-bevry-support-channels/606/1',
		redirect: 'temporary',
	},
	'https://bevry.me/contact': 'https://bevry.me/support',
	'https://bevry.me/premium-support': 'https://bevry.me/support',

	// learn.bevry.me
	'https://learn.bevry.me/community/chat-guidelines': {
		url: 'https://bevry.me/support-guidelines',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/community/support-guidelines': {
		url: 'https://bevry.me/support-guidelines',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/support': {
		url: 'https://bevry.me/support',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/community/coding-standards': {
		url: 'https://bevry.me/coding-standards',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/community/contribute': {
		url: 'https://bevry.me/contribute',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/community/documentation-guidelines': {
		url: 'https://bevry.me/documentation-guidelines',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/install-node.js': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/install/node': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},
	'https://learn.bevry.me/node/install': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},

	//  bevry.me / docs / node
	'https://bevry.me/learn/node-install': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},
	'https://bevry.me/install/node': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},
	'https://bevry.me/node/install': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},
	'https://bevry.me/docs/installnode': {
		url: 'https://learn.bevry.me/install-node',
		redirect: 'permanent',
	},

	//  bevry.me / docs
	'https://bevry.me/learn/community-documentation-guidelines': {
		url: 'https://discuss.bevry.me/t/bevrys-contribution-guide/559/1',
		redirect: 'permanent',
	},
	'https://bevry.me/learn/queryengine-guide': {
		url: 'https://github.com/bevry/query-engine/wiki/Using',
		redirect: 'permanent',
	},

	//  bevry.me / training
	'https://bevry.me/nodefailsafe': {
		url: 'https://gist.github.com/balupton/4721905fe5d51c541660',
		redirect: 'temporary',
	},
	'https://bevry.me/talks/handsonnode': {
		url: 'https://node.eventbrite.com/',
		redirect: 'temporary',
	},
	'https://bevry.me/node.zip': {
		url: 'https://www.dropbox.com/s/masz4vl1b4btwfw/hands-on-node-examples.zip',
		redirect: 'temporary',
	},

	//  docpad
	'https://docpad.bevry.me/chat-guidelines': {
		url: 'https://bevry.me/support-guidelines',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/chat-logs': {
		url: 'https://botbot.me/freenode/docpad/',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/chat': {
		url: 'https://discuss.bevry.me/tags/chat',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/support': {
		url: 'https://bevry.me/support',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/bug-report': 'https://docpad.bevry.me/support',
	'https://docpad.bevry.me/bug': 'https://docpad.bevry.me/support',
	'https://docpad.bevry.me/docs/support': 'https://docpad.bevry.me/support',
	'https://docpad.bevry.me/stackoverflow': 'https://docpad.bevry.me/support',
	'https://docpad.bevry.me/issues': {
		url: 'https://github.com/docpad/docpad/issues',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/forum': {
		url: 'https://discuss.bevry.me/tags/docpad',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/tos': {
		url: 'https://bevry.me/tos',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/terms': {
		url: 'https://bevry.me/tos',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/privacy': {
		url: 'https://bevry.me/privacy',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/github': {
		url: 'https://github.com/docpad',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/twitter': {
		url: 'https://twitter.com/docpad',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/praise': {
		url: 'https://twitter.com/DocPad/likes',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/reddit': {
		url: 'https://www.reddit.com/r/docpad',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/trello': {
		url: 'https://bevry.me/trello',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/donate': {
		url: 'https://bevry.me/donate',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/gittip-community': 'https://docpad.bevry.me/donate',
	'https://docpad.bevry.me/gittip': 'https://docpad.bevry.me/donate',
	'https://docpad.bevry.me/gratipay-community':
		'https://docpad.bevry.me/donate',
	'https://docpad.bevry.me/gratipay': 'https://docpad.bevry.me/donate',
	'https://docpad.bevry.me/flattr': 'https://docpad.bevry.me/donate',
	'https://docpad.bevry.me/growl': {
		url: 'http://growl.info/downloads',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/admin': {
		url: 'https://docpad.bevry.me/community/plugins#admin-interfaces',
		redirect: 'temporary',
	},
	'https://docpad.bevry.me/docs/admin': 'https://docpad.bevry.me/admin',
	'https://docpad.bevry.me/plugins': {
		url: 'https://docpad.bevry.me/community/plugins',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/plugins': 'https://docpad.bevry.me/plugins',
	'https://bevry.me/learn/docpad-plugin': 'https://docpad.bevry.me/plugins',
	'https://docpad.bevry.me/partners': {
		url: 'https://docpad.bevry.me/start/support#consulting-partners',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/license': {
		url: 'https://github.com/docpad/docpad/blob/master/LICENSE.md#readme',
		redirect: 'temporary',
	},
	'https://docpad.bevry.me/changelog': {
		url: 'https://github.com/docpad/docpad/blob/master/HISTORY.md#readme',
		redirect: 'temporary',
	},
	'https://docpad.bevry.me/changes': 'https://docpad.bevry.me/changelog',
	'https://docpad.bevry.me/history': 'https://docpad.bevry.me/changelog',
	'https://docpad.bevry.me/id-overwrite': {
		url: 'https://github.com/docpad/docpad/issues/742',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/unstable-node': {
		url: 'https://github.com/docpad/docpad/issues/725',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/render-early-via-include': {
		url: 'https://github.com/docpad/docpad/issues/378',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/extension-not-rendering': {
		url: 'https://github.com/docpad/docpad/issues/192',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/plugin-conventions': {
		url: 'https://github.com/docpad/docpad/issues/313',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/plugin-uncompiled': {
		url: 'https://github.com/docpad/docpad/issues/925',
		redirect: 'permanent',
	},
	'https://bevry.me/learn/docpad-install': 'https://docpad.bevry.me/install',
	'https://docpad.bevry.me/upgrade': {
		url: 'https://docpad.bevry.me/start/upgrade',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/upgrade': 'https://docpad.bevry.me/upgrade',
	'https://docpad.bevry.me/install': {
		url: 'https://docpad.bevry.me/start/install',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/install': 'https://docpad.bevry.me/install',
	'https://docpad.bevry.me/docs/start': 'https://docpad.bevry.me/install',
	'https://docpad.bevry.me/troubleshoot': {
		url: 'https://docpad.bevry.me/start/troubleshoot',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/troubleshoot':
		'https://docpad.bevry.me/troubleshoot',
	'https://docpad.bevry.me/debug': 'https://docpad.bevry.me/troubleshoot',
	'https://docpad.bevry.me/docs/debug': 'https://docpad.bevry.me/troubleshoot',
	'https://docpad.bevry.me/core/debug': 'https://docpad.bevry.me/troubleshoot',
	'https://docpad.bevry.me/overview': {
		url: 'https://docpad.bevry.me/start/overview',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/get-started': 'https://docpad.bevry.me/overview',
	'https://docpad.bevry.me/docs/overview': 'https://docpad.bevry.me/overview',
	'https://docpad.bevry.me/begin': {
		url: 'https://docpad.bevry.me/start/begin',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/begin': 'https://docpad.bevry.me/begin',
	'https://docpad.bevry.me/intro': {
		url: 'https://docpad.bevry.me',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/intro': 'https://docpad.bevry.me/intro',
	'https://docpad.bevry.me/showcase': {
		url: 'https://docpad.bevry.me/community/showcase',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/showcase': 'https://docpad.bevry.me/showcase',
	'https://docpad.bevry.me/projects': {
		url: 'https://github.com/search?q=topic%3Adocpad-project&type=Repositories',
		redirect: 'temporary',
	},
	'https://docpad.bevry.me/skeletons': 'https://docpad.bevry.me/projects',
	'https://docpad.bevry.me/docs/projects': 'https://docpad.bevry.me/projects',
	'https://docpad.bevry.me/docs/skeletons': 'https://docpad.bevry.me/projects',
	'https://docpad.bevry.me/deploy': {
		url: 'https://docpad.bevry.me/start/deploy',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/deploy': 'https://docpad.bevry.me/deploy',
	'https://docpad.bevry.me/faq': {
		url: 'https://docpad.bevry.me/start/faq',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/faq': 'https://docpad.bevry.me/faq',
	'https://docpad.bevry.me/performance': {
		url: 'https://docpad.bevry.me/start/performance',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/performance':
		'https://docpad.bevry.me/performance',
	'https://docpad.bevry.me/contribute': {
		url: 'https://docpad.bevry.me/community/contribute',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/start/contribute':
		'https://docpad.bevry.me/contribute',
	'https://docpad.bevry.me/docs/contribute':
		'https://docpad.bevry.me/contribute',
	'https://docpad.bevry.me/participate': {
		url: 'https://docpad.bevry.me/community/participate',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/participate':
		'https://docpad.bevry.me/participate',
	'https://docpad.bevry.me/roadmap': {
		url: 'https://docpad.bevry.me/community/roadmap',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/roadmap': 'https://docpad.bevry.me/roadmap',
	'https://docpad.bevry.me/api': {
		url: 'https://docpad.bevry.me/core/api',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/api': 'https://docpad.bevry.me/api',
	'https://docpad.bevry.me/cli': {
		url: 'https://docpad.bevry.me/core/cli',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/cli': 'https://docpad.bevry.me/cli',
	'https://docpad.bevry.me/config': {
		url: 'https://docpad.bevry.me/core/config',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/config': 'https://docpad.bevry.me/config',
	'https://docpad.bevry.me/events': {
		url: 'https://docpad.bevry.me/core/events',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/events': 'https://docpad.bevry.me/events',
	'https://docpad.bevry.me/meta-data': {
		url: 'https://docpad.bevry.me/core/meta-data',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/meta-data': 'https://docpad.bevry.me/meta-data',
	'https://docpad.bevry.me/sequence': {
		url: 'https://docpad.bevry.me/core/sequence',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/sequence': 'https://docpad.bevry.me/sequence',
	'https://docpad.bevry.me/template-data': {
		url: 'https://docpad.bevry.me/core/template-data',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/template-data':
		'https://docpad.bevry.me/template-data',
	'https://docpad.bevry.me/extend': {
		url: 'https://docpad.bevry.me/extend/extend',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/extend': 'https://docpad.bevry.me/extend',
	'https://docpad.bevry.me/plugin-write': {
		url: 'https://docpad.bevry.me/extend/plugin-write',
		redirect: 'permanent',
	},
	'https://docpad.bevry.me/docs/plugin-write':
		'https://docpad.bevry.me/plugin-write',
	'https://docpad.bevry.me/plugin/write':
		'https://docpad.bevry.me/plugin-write',

	// forum
	'https://discuss.bevry.me/c/study/film-tv': {
		url: 'https://discuss.bevry.me/c/study/tv',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/reading-group': {
		url: 'https://discuss.bevry.me/c/study/books',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/philosophy/bookworms': {
		url: 'https://discuss.bevry.me/c/study/books',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/site-feedback': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/feedback': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/engineering': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/issues': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/administration/recommendations': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/administration/suggestions': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/administration/software': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/administration/feedback/30': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/administration/feedback': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-feedback-category/614': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-projects-category/2': {
		url: 'https://discuss.bevry.me/c/build',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/uncategorized': {
		url: 'https://discuss.bevry.me/c/discuss',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/general': {
		url: 'https://discuss.bevry.me/c/discuss',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/personal-development': {
		url: 'https://discuss.bevry.me/tag/praxis',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/praxis1': {
		url: 'https://discuss.bevry.me/tag/praxis',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/praxis/8': {
		url: 'https://discuss.bevry.me/tag/praxis',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/praxis': {
		url: 'https://discuss.bevry.me/tag/praxis',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-praxis-category/15': {
		url: 'https://discuss.bevry.me/tag/praxis',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/3': {
		url: 'https://bevry.me/projects',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/invest-10': {
		url: 'https://bevry.me/projects/tithe',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/tithe/38': {
		url: 'https://bevry.me/projects/tithe',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/tithe': {
		url: 'https://bevry.me/projects/tithe',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-tithe/674': {
		url: 'https://bevry.me/projects/tithe',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/interconnect/39': {
		url: 'https://bevry.me/projects/interconnect',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/interconnect': {
		url: 'https://bevry.me/projects/interconnect',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-interconnect/675': {
		url: 'https://bevry.me/projects/interconnect',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/fountain/32': {
		url: 'https://bevry.me/projects/fountain',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/fountain': {
		url: 'https://bevry.me/projects/fountain',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-fountain/651': {
		url: 'https://bevry.me/projects/fountain',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/mood-journal-for-apple-watch/41': {
		url: 'https://bevry.me/projects/mood-journal',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/mood-journal-for-apple-watch': {
		url: 'https://bevry.me/projects/mood-journal',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-mood-journal-for-apple-watch/677': {
		url: 'https://bevry.me/projects/mood-journal',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/philosophy/jordanbpeterson/18': {
		url: 'https://bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/philosophy/jordanbpeterson': {
		url: 'https://bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-jordan-b-peterson-community/178': {
		url: 'https://bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/digital-nomad-landing-kit/40': {
		url: 'https://bevry.me/projects/landing-kit',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects/digital-nomad-landing-kit': {
		url: 'https://bevry.me/projects/landing-kit',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-digital-nomad-landing-kit/676': {
		url: 'https://bevry.me/projects/landing-kit',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/projects': {
		url: 'https://bevry.me/projects',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/sorters-club': {
		url: 'https://bevry.me/study-group',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/vips': {
		url: 'https://discuss.bevry.me',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/peterson-materials': {
		url: 'https://discuss.bevry.me/tag/jbp',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/peterson-content': {
		url: 'https://discuss.bevry.me/tag/jbp',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/maps-of-meaning': {
		url: 'https://discuss.bevry.me/tag/jbp-meaning',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/bible-series': {
		url: 'https://discuss.bevry.me/tag/jbp-bible',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/personality-series': {
		url: 'https://discuss.bevry.me/tag/jbp-personality',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/jbp-recommended': {
		url: 'https://discuss.bevry.me/tag/jbp-reading',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/philosophy/20': {
		url: 'https://bevry.me/tag/philosophy',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/c/philosophy': {
		url: 'https://bevry.me/tag/philosophy',
		redirect: 'permanent',
	},
	'https://discuss.bevry.me/t/about-the-philosophy-category/504': {
		url: 'https://bevry.me/tag/philosophy',
		redirect: 'permanent',
	},
	'https://bevry.me/meaning-crisis/lecture-notes': {
		url:
			'https://discuss.bevry.me/search?q=tags%3Ameaning-crisis%20category%3A44%20order%3Alatest_topic',
		redirect: 'temporary',
	},
	'https://bevry.me/meaning-crisis/meeting-notes': {
		url:
			'https://discuss.bevry.me/search?q=tags%3Ameaning-crisis%20category%3A13%20order%3Alatest_topic',
		redirect: 'temporary',
	},

	// jbp community
	'https://jordanbpeterson.community/newsletter': {
		url: 'https://goo.gl/forms/qgIjkJ8SYEpLCVY83',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/forum': {
		url: 'https://discuss.bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},
	'https://bevry.me/jbp-lecture-notes': {
		url: 'https://discuss.bevry.me/t/about-the-study-category/991/1',
		redirect: 'temporary',
	},
	'https://jordanbpeterson.community/lecture-notes': {
		url: 'https://bevry.me/jbp-lecture-notes',
		redirect: 'permanent',
	},
	'https://bevry.me/jbp-reading-group': {
		url:
			'https://www.goodreads.com/group/show/253798-jordan-b-peterson-reading-group',
		redirect: 'temporary',
	},
	'https://jordanbpeterson.community/reading-group': {
		url: 'https://bevry.me/jbp-reading-group',
		redirect: 'permanent',
	},
	'https://bevry.me/jbp-reading-list': {
		url:
			'https://www.goodreads.com/group/bookshelf/253798-jordan-b-peterson-reading-group?utf8=✓&order=d&sort=date_finished&view=main&per_page=200',
		redirect: 'temporary',
	},
	'https://jordanbpeterson.community/reading-list': {
		url: 'https://bevry.me/jbp-reading-list',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/youtube': {
		url: 'https://bevry.me/youtube',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/twitter': {
		url: 'https://twitter.com/JBPCommunity',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/discord': {
		url: 'https://discord.gg/j2PqA7S',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/reddit': {
		url: 'https://www.reddit.com/r/JordanPeterson',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/meetups': {
		url:
			'https://www.meetup.com/find/?allMeetups=false&keywords=jordan+peterson&radius=Infinity',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/facebook-liberal-group': {
		url: 'https://www.facebook.com/groups/1408546319260687/',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/facebook-study-group': {
		url: 'https://www.facebook.com/groups/198567587146349/',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/source': {
		url: 'https://bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/feedback': {
		url: 'https://discuss.bevry.me/c/feedback',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/home': {
		url: 'https://jordanbpeterson.community',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/podcast-join': {
		url: 'https://jordanbpeterson.community',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/podcast': {
		url: 'https://jordanbpeterson.community/youtube',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/study-group-recordings': {
		url: 'https://jordanbpeterson.community/youtube',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/study-group-hangout': {
		url: 'https://jordanbpeterson.community/study-group',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/study-group-calendar': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/study-group': {
		url: 'https://bevry.me/study-group',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/calendar.ics': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/macos-calendar-support': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/ios-calendar-support': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/outlook-calendar-support': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/google-calendar-support': {
		url: 'https://jordanbpeterson.community/calendar',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community/calendar': {
		url:
			'https://discuss.bevry.me/t/please-unsubscribe-from-the-calendar-subscription/474',
		redirect: 'permanent',
	},
	'https://jordanbpeterson.community': {
		url: 'https://bevry.me/projects/jbp-community',
		redirect: 'permanent',
	},

	// global aliases
	collide: {
		name: 'Collide',
		url: 'https://www.collide.com/creator/balupton',
		description: 'Support me on Collide',
		color: '#292929',
		tags: ['social', 'donate'],
	},
	bitpatron: {
		name: 'BitPatron',
		url: 'https://vrlps.co/py79b8w/cp',
		description: 'Support me on BitPatron',
		color: '#ff4828',
		tags: ['social', 'donate'],
	},
	bitbacker: {
		name: 'BitBacker',
		url: 'https://bitbacker.io/user/balupton/',
		description: 'Support me on BitBacker',
		color: '#258ac1',
		tags: ['social', 'donate'],
	},
	flattr: {
		name: 'Flattr',
		url: 'https://flattr.com/profile/balupton',
		description: 'Support me on Flattr',
		color: '#66b115',
		tags: ['social', 'donate'],
	},
	'https://balupton.com/liberapay': {
		name: 'Liberapay',
		url: 'https://liberapay.com/balupton',
		description: 'Support me on Liberapay',
		color: '#f6c915',
		tags: ['social', 'donate'],
	},
	'https://balupton.com/gittip': 'https://balupton.com/liberapay',
	'https://balupton.com/gatipay': 'https://balupton.com/liberapay',
	'https://bevry.me/liberapay': {
		name: 'Liberapay',
		url: 'https://liberapay.com/bevry',
		description: 'Support Bevry on Liberapay',
		color: '#f6c915',
		tags: ['social', 'donate'],
	},
	'https://bevry.me/gittip': 'https://bevry.me/liberapay',
	'https://bevry.me/gatipay': 'https://bevry.me/liberapay',
	opencollective: {
		name: 'Open Collective',
		url: 'https://opencollective.com/balupton',
		description: 'View my profile on Open Collective',
		color: 'rgb(51, 133, 255)',
		tags: ['social', 'donate'],
	},
	'https://bevry.me/opencollective': {
		url: 'https://opencollective.com/bevry',
		redirect: 'temporary',
	},
	patreon: {
		name: 'Patreon',
		url: 'https://patreon.com/balupton',
		description: 'Support me on Patreon',
		color: '#E6461A',
		tags: ['social', 'donate'],
	},
	buymeacoffee: {
		name: 'Buy Me A Coffee',
		url: 'https://www.buymeacoffee.com/balupton',
		description: 'Support me on Buy Me A Coffee',
		color: '#FF813F',
		tags: ['social', 'donate'],
	},
	thanksapp: {
		name: 'GiveThanks',
		url: 'https://givethanks.app/u/balupton',
		description: 'Support me on GiveThanks',
		color: '#3c3c3c',
		tags: ['social', 'donate'],
	},
	paypal: {
		name: 'Paypal',
		url: 'https://paypal.me/balupton',
		description: 'Support me on Paypal',
		color: '#009cde',
		tags: ['social', 'donate'],
	},
	wishlist: {
		name: 'Wishlist',
		url: 'http://amazon.bevry.workers.dev/hz/wishlist/ls/1SW8QS8G5KU8A',
		description: 'Buy me something on my Amazon Wishlist',
		color: 'rgb(228, 121, 17)',
		tags: ['social', 'donate'],
	},

	// if this becomes domain specific, ensure bevry.me and balupton.com both link to them
	jbpcommunity: 'https://bevry.me/jbp-community',
	jbpstudygroup: 'https://bevry.me/study-group',
	jbpsg: 'https://bevry.me/study-group',
	jbpyoutube: 'https://bevry.me/youtube',
	jbpvids: 'https://bevry.me/youtube',

	// other
	'https://balupton.com/lg-faulty': {
		url:
			'https://www.dropbox.com/sh/4wi0bxvqlfc1k5k/AACm20RPDu7xHJ4nMlscuyfza?dl=0',
		redirect: 'temporary',
	},

	// have these last
	'https://balupton.com/gh': {
		url: 'https://balupton.com/github',
		redirect: 'permanent',
	},
	'https://balupton.com/g': {
		url: 'https://balupton.com/github',
		redirect: 'permanent',
	},
	'https://balupton.com/t': {
		url: 'https://balupton.com/twitter',
		redirect: 'permanent',
	},
	'https://balupton.com/s': {
		url: 'https://balupton.com/sustainability',
		redirect: 'permanent',
	},
	'https://balupton.com/v': {
		name: 'Vegan',
		url:
			'https://github.com/balupton/plant-vs-animal-products/blob/master/README.md#readme',
		description:
			'Veganism is the stance that other lives are not ours to own. Vegans commonly associate this with the practice of reducing their harm to all lives, primarily through a strict-vegetarian diet and lifestyle. Learn about what turned me vegan.',
	},
	'https://balupton.com/c': {
		name: 'C',
		url: 'https://en.wikipedia.org/wiki/C_%28programming_language%29',
		description:
			'C is a low-level programming language used to create powerful applications.',
	},
	'https://docpad.org': {
		name: 'DocPad',
		url: 'https://docpad.bevry.me',
		description:
			'DocPad rethought web development and was the first big static site generator for Node.js gaining over 2000 stars, hundreds of daily users, 200 plugins, and 100 contributors.',
		redirect: 'permanent',
	},
	'https://bevry.me': {
		name: 'Bevry',
		url: 'https://discuss.bevry.me/t/welcome-to-bevry/8/1',
		description:
			'Bevry is a cooperative aimed to see everyone do what they love, share it with the world, and live well',
	},
}

export default links

type Resolution = { url: string; redirection: Redirection }

export function traverse(url: string): Resolution[] {
	const resolutions: Resolution[] = []
	while (true) {
		const link = links[url]
		if (!link) {
			break
		} else if (typeof link === 'string') {
			resolutions.push({ url: link, redirection: 'alias' })
			url = link
		} else {
			resolutions.push({
				url: link.url,
				redirection: link.redirect || 'temporary',
			})
			url = link.url
		}
	}
	return resolutions
}

// resolve is used for replacing link hrefs
// it should only resolve permanent redirects
// as a link href should only be replaced, if a permanent replacement occured
export function resolve(url: string): Resolution {
	const resolutions = traverse(url)
	let redirection: Redirection = 'none'
	for (const resolution of resolutions) {
		if (resolution.redirection !== 'permanent') {
			break
		} else if (resolution.redirection === 'permanent') {
			url = resolution.url
			redirection = 'permanent'
		}
	}
	return { url, redirection }
}

// follow is used for redirecting http requests
// it should follow down the rabit hole, and if any non-permanent redirects were found, mark redirection as temporary
export function follow(url: string): Resolution {
	const resolutions = traverse(url)
	let redirection: Redirection = 'none'
	for (const resolution of resolutions) {
		url = resolution.url
		if (resolution.redirection !== 'permanent') {
			redirection = 'temporary'
		} else if (
			resolution.redirection === 'permanent' &&
			redirection === 'none'
		) {
			redirection = 'permanent'
		}
	}
	return { url, redirection }
}

/*
console.log(
	resolve('https://jordanbpeterson.community/reading-group'),
	resolve(resolve('https://jordanbpeterson.community/reading-group').url)
)
console.log(
	resolve('https://jordanbpeterson.community/reading-list'),
	resolve(resolve('https://jordanbpeterson.community/reading-list').url)
)
console.log(follow('https://jordanbpeterson.community/reading-list'))
console.log(
	resolve('https://bevry.me/gittip'),
	resolve(resolve('https://bevry.me/gittip').url)
)
console.log(follow('https://bevry.me/gittip'))

should result in
{ url: 'https://bevry.me/jbp-reading-group', redirection: 'permanent' } { url: 'https://bevry.me/jbp-reading-group', redirection: 'none' }
{ url: 'https://bevry.me/jbp-reading-list', redirection: 'permanent' } { url: 'https://bevry.me/jbp-reading-list', redirection: 'none' }
{
  url: 'https://www.goodreads.com/group/bookshelf/253798-jordan-b-peterson-reading-group?utf8=✓&order=d&sort=date_finished&view=main&per_page=200',
  redirection: 'temporary'
}
{ url: 'https://bevry.me/gittip', redirection: 'none' } { url: 'https://bevry.me/gittip', redirection: 'none' }
{ url: 'https://liberapay.com/bevry', redirection: 'temporary' }
*/

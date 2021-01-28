const dataExample = [
	{
		short_name: 'Hab Std Jardín',
		room_code: '106',
		bookings: {
			60: {
				id: '60',
				url: '/bookings/view?id=60',
				title: 'Laura Euán',
				color: '#af9ff6',
				check_in: '2021-01-31',
				check_out: '2021-01-31',
				typeOfDate: 2,
			},
			48: {
				id: '48',
				url: '/bookings/view?id=48',
				title: 'Laura Euán',
				color: '#0bab29',
				check_in: '2021-01-16',
				check_out: '2021-01-17',
				typeOfDate: 0,
			},
			65: {
				id: '65',
				url: '/bookings/view?id=65',
				title: 'Laura Euán',
				color: '#bd14df',
				check_in: '2021-01-30',
				check_out: '2021-01-31',
				typeOfDate: 2,
			},
			67: {
				id: '67',
				url: '/bookings/view?id=67',
				title: 'Arturo Ramos',
				color: '#1863e5',
				check_in: '2021-01-30',
				check_out: '2021-01-31',
				typeOfDate: 0,
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '107',
		bookings: {
			61: {
				id: '61',
				url: '/bookings/view?id=61',
				title: 'Laura Euán',
				color: '#9cc29c',
				check_in: '2021-01-31',
				check_out: '2021-01-31',
				typeOfDate: 2,
			},
			68: {
				id: '68',
				url: '/bookings/view?id=68',
				title: 'Laura Euán',
				color: '#cc7ef7',
				check_in: '2021-01-29',
				check_out: '2021-01-31',
				typeOfDate: 0,
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '108',
		bookings: {
			62: {
				id: '62',
				url: '/bookings/view?id=62',
				title: 'Laura Euán',
				color: '#f54725',
				check_in: '2021-01-31',
				check_out: '2021-01-31',
				typeOfDate: 2,
			},
		},
	},
	{ short_name: 'Hab Std Jardín', room_code: '109' },
	{ short_name: 'Hab Std Jardín', room_code: '110' },
	{ short_name: 'Hab Std Jardín', room_code: '111' },
	{ short_name: 'Hab Std Jardín', room_code: '208' },
	{ short_name: 'Hab Std Jardín', room_code: '209' },
	{ short_name: 'Hab Std Jardín', room_code: '210' },
	{ short_name: 'Hab Std Jardín', room_code: '211' },
	{
		short_name: 'Hab std vista calle',
		room_code: '101',
		bookings: {
			67: {
				id: '67',
				url: '/bookings/view?id=67',
				title: 'Arturo Ramos',
				color: '#1863e5',
				check_in: '2021-01-30',
				check_out: '2021-01-31',
				typeOfDate: 0,
			},
		},
	},
	{ short_name: 'Hab std vista calle', room_code: '102' },
	{ short_name: 'Hab std vista calle', room_code: '103' },
	{ short_name: 'Hab std vista calle', room_code: '104' },
	{ short_name: 'Hab std vista calle', room_code: '201' },
	{ short_name: 'Hab std vista calle', room_code: '202' },
	{ short_name: 'Hab std vista calle', room_code: '203' },
	{ short_name: 'Hab std vista calle', room_code: '204' },
	{ short_name: 'Hab std vista calle', room_code: '206' },
	{
		short_name: 'Hab deluxe vista cal',
		room_code: '205',
		bookings: {
			64: {
				id: '64',
				url: '/bookings/view?id=64',
				title: 'Carlos Sanchez',
				color: '#226860',
				check_in: '2021-01-25',
				check_out: '2021-01-26',
				typeOfDate: 0,
			},
		},
	},
	{ short_name: 'Hab Deluxe vista jar', room_code: '207' },
	{ short_name: 'Hab Deluxe vista jar', room_code: '212' },
	{ short_name: 'Hab Eco', room_code: '123' },
	{ short_name: 'Hab Eco', room_code: '223' },
	{ short_name: 'Hab Eco', room_code: '220' },
	{ short_name: 'Hab Eco', room_code: '122' },
	{ short_name: 'Hab Eco', room_code: '219' },
	{ short_name: 'Hab Eco', room_code: '213' },
	{ short_name: 'Hab Eco', room_code: '215' },
	{ short_name: 'Hab Eco', room_code: '221' },
	{ short_name: 'Hab Eco', room_code: '121' },
	{ short_name: 'Hab Eco', room_code: '119' },
	{ short_name: 'Hab Eco', room_code: '116' },
	{ short_name: 'Hab Eco', room_code: '216' },
	{ short_name: 'Hab Eco', room_code: '214' },
	{ short_name: 'Hab Eco', room_code: '118' },
	{ short_name: 'Hab Eco', room_code: '222' },
	{ short_name: 'Hab Eco', room_code: '115' },
	{ short_name: 'Hab Eco', room_code: '217' },
	{ short_name: 'Hab Eco', room_code: '120' },
	{ short_name: 'Hab Eco', room_code: '218' },
	{ short_name: 'Hab Eco', room_code: '117' },
	{ short_name: 'Hab Eco', room_code: '112' },
	{ short_name: 'Hab Eco', room_code: '113' },
	{ short_name: 'Hab Eco', room_code: '114' },
];
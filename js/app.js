let data = [
	{
		short_name: 'Hab Std Jardín',
		room_code: '108',
		bookings: {
			7: {
				id: '7',
				title: 'Niger Andrey Poot May',
				color: '#cbcdd1',
				check_in: '2021-01-14',
				check_out: '2021-01-20',
			},
			12: {
				id: '12',
				title: 'Mitch Castro',
				color: '#ba2cec',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '106',
		bookings: {
			9: {
				id: '9',
				title: 'Daniel El Travieso',
				color: '#aaa0c4',
				check_in: '2021-01-22',
				check_out: '2021-01-27',
			},
			4: {
				id: '4',
				title: 'John Revol Doe',
				color: '#6d4ef5',
				check_in: '2021-04-03',
				check_out: '2021-04-11',
			},
			8: {
				id: '8',
				title: 'Dinosaurio Anacleto',
				color: '#4bbc81',
				check_in: '2021-01-28',
				check_out: '2021-01-30',
			},
			10: {
				id: '10',
				title: 'Daniel El barbaro',
				color: '#489909',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '107',
		bookings: {
			11: {
				id: '11',
				title: 'Mark Zucaritas',
				color: '#acfcc8',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
			1: {
				id: '1',
				title: 'YUCA-20',
				color: '#d754bd',
				check_in: '2021-01-08',
				check_out: '2021-01-09',
			},
			6: {
				id: '6',
				title: 'Niger Andrey Poot May',
				color: '#05e308',
				check_in: '2021-01-14',
				check_out: '2021-01-20',
			},
		},
	},
	{ short_name: 'Hab Std Jardín', room_code: '109', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '111', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '209', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '211', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '110', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '208', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '210', bookings: [] },
	{
		short_name: 'Hab std vista calle',
		room_code: '203',
		bookings: {
			2: {
				id: '2',
				title: 'CAN-23',
				color: '#732408',
				check_in: '2021-01-09',
				check_out: '2021-01-13',
			},
		},
	},
	{ short_name: 'Hab std vista calle', room_code: '102', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '104', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '202', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '101', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '103', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '201', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '204', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '206', bookings: [] },
	{ short_name: 'Hab deluxe vista cal', room_code: '205', bookings: [] },
	{ short_name: 'Hab Deluxe vista jar', room_code: '207', bookings: [] },
	{ short_name: 'Hab Deluxe vista jar', room_code: '212', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '112', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '114', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '116', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '118', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '120', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '122', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '213', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '215', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '217', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '219', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '221', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '223', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '113', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '115', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '117', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '119', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '121', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '123', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '214', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '216', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '218', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '220', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '222', bookings: [] },
];
let bookings = data;

// TODO: Adaptar
async function getData() {
	try {
		const res = await fetch(`http://localhost/avanto_hoteles/admin/rooms/room-calendar-data`);
		res.json();
		console.log(res);
	} catch (error) {
		console.error(error);
	}
}

// getData();

const eSelect = document.querySelector('#filter');

eSelect.addEventListener('change', (e) => {
	const val = e.target.value;

	val !== 'all' ? (bookings = data.filter((b) => b.short_name === val)) : (bookings = data);

	printBookings();
	runTooltip();
});

function createOptionsSelect() {
	const eSelect = document.querySelector('#filter');
	let seeder = '';

	bookings.forEach((b) => {
		if (b.short_name !== seeder) {
			const eOption = document.createElement('option');
			eOption.value = b.short_name;
			eOption.innerText = b.short_name;

			eSelect.appendChild(eOption);
		}

		seeder = b.short_name;
	});
}

moment.locale('es');

let cMonth = new Date().getMonth();
const cDay = moment().format('D');
let days = moment().endOf('month').add(cMonth, 'month').format('DD');
const month = new Date().getMonth();

const afterMonth = () => {
	cMonth--;
	days = moment().endOf('month').add(cMonth, 'month').format('DD');

	printDays(cMonth);
};

const nextMonth = () => {
	cMonth++;
	days = moment().endOf('month').add(cMonth, 'month').format('DD');

	printDays();
};

const currentMonth = () => {
	cMonth = new Date().getMonth();
	days = moment().endOf('month').add(month, 'month').format('DD');

	printDays();
};

const printDays = () => {
	runTooltip();

	const eDays = document.querySelector('#calendar__days');

	eDays.innerHTML = '';

	for (let i = 0; i < days; i++) {
		const eSpan = document.createElement('span');
		eSpan.innerHTML = `${i + 1}`;

		if (i + 1 === Number(cDay) && Number(cMonth) === new Date().getMonth()) {
			eSpan.className = 'current-day';
		}

		eDays.appendChild(eSpan);
	}

	printTxtDate();
	printBookings();
};

const printTxtDate = () => {
	const eTextDate = document.getElementById('calendar-text');
	const eMonthTitle = document.getElementById('calendar-monthTitle');
	const txtMonth = moment().add(cMonth, 'month').format('MMMM');
	const txtYear = moment().add(cMonth, 'month').format('YYYY');

	eTextDate.innerText = `1 ${txtMonth} ${txtYear} - ${days} ${txtMonth} ${txtYear}`;
	eMonthTitle.innerText = `${txtMonth.toUpperCase()}`;
};

const printBookings = () => {
	const eCalendar = document.querySelector('.calendar__container-body');
	eCalendar.innerHTML = '';

	bookings.forEach((b) => {
		const eRoomType = document.createElement('div');
		eRoomType.className = 'calendar__container-item-1';
		const eTypeSpan = document.createElement('span');
		eTypeSpan.innerText = b.short_name;
		eRoomType.appendChild(eTypeSpan);

		const eNumberRoom = document.createElement('div');
		eNumberRoom.className = 'calendar__container-item-2';
		const eTypeSpan2 = document.createElement('span');
		eTypeSpan2.innerText = b.room_code;
		eNumberRoom.appendChild(eTypeSpan2);

		const eBookings = document.createElement('div');
		eBookings.className = 'calendar__bookings-items';
		const eBookingItems = document.createElement('div');
		eBookingItems.className = 'calendar__date-dates booking-days';

		for (let i = 0; i < days; i++) {
			const eBookingItem = document.createElement('div');

			if (i + 1 === Number(cDay) && new Date().getMonth() === cMonth) {
				eBookingItem.className = 'current-day';
			}

			for (const key in b.bookings) {
				const bDayCheckI = moment(b.bookings[key].check_in).format('D');
				const bDayCheckO = moment(b.bookings[key].check_out).format('D');
				const bMonthI = moment(b.bookings[key].check_in).format('M');
				const bMonthO = moment(b.bookings[key].check_out).format('M ');
				const eBooking = document.createElement('a');

				if (Number(bMonthI) === cMonth + 1 && Number(bMonthO) === cMonth + 1) {
					if (i + 1 >= Number(bDayCheckI) && i + 1 <= Number(bDayCheckO)) {
						eBookingItem.style.border = 'none';
						eBooking.href = `${window.location.origin}/${b.bookings[key].url}`;
						eBooking.style.background = b.bookings[key].color;
						eBooking.setAttribute('data-toggle', 'tooltip');
						eBooking.setAttribute('data-placement', 'top');
						eBooking.setAttribute('title', b.bookings[key].title);

						eBookingItem.appendChild(eBooking);
					}
				}

				if (i + 1 === Number(bDayCheckI)) {
					eBooking.className = 'booking clip-2';
					eBooking.style.left = '.5px';
					eBookingItem.style.borderLeft = '1px solid #e0e0e0';
				} else if (i + 1 === Number(bDayCheckO)) {
					eBooking.className = 'booking clip-1';
					eBooking.style.left = '-.5px';
				} else {
					eBooking.className = 'booking';
				}
			}

			eBookingItems.appendChild(eBookingItem);
		}

		eBookings.append(eBookingItems);

		eCalendar.append(eRoomType);
		eCalendar.appendChild(eNumberRoom);
		eCalendar.appendChild(eBookings);
	});

	setStyGridTempCol();
};

const setStyGridTempCol = () => {
	const eGrid = document.querySelectorAll('.calendar__date-dates');

	eGrid.forEach((e) => {
		e.style.gridTemplateColumns = 'repeat(' + days + ', 1fr)';
	});
};

const runTooltip = () => {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
};

createOptionsSelect();
printDays();
runTooltip();

const btnRight = document.querySelector('#btnRight');
const btnLeft = document.querySelector('#btnLeft');
const btnCurrent = document.querySelector('#btnCurrent');

btnRight.addEventListener('click', nextMonth);
btnLeft.addEventListener('click', afterMonth);
btnCurrent.addEventListener('click', currentMonth);

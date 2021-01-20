const bookings = [
	{
		short_name: 'Hab Std Jardín',
		room_code: '106',
		bookings: {
			4: {
				id: '4',
				title: 'John Revol Doe',
				color: '',
				check_in: '2021-04-03',
				check_out: '2021-04-11',
			},
			8: {
				id: '8',
				title: 'Dinosaurio Anacleto',
				color: '',
				check_in: '2021-01-28',
				check_out: '2021-01-30',
			},
			10: {
				id: '10',
				title: 'Daniel El barbaro',
				color: '',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
			5: {
				id: '5',
				title: 'Niger Andrey Poot May',
				color: '',
				check_in: '2021-01-14',
				check_out: '2021-01-20',
			},
			9: {
				id: '9',
				title: 'Daniel El Travieso',
				color: '',
				check_in: '2021-01-22',
				check_out: '2021-01-27',
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '107',
		bookings: {
			6: {
				id: '6',
				title: 'Niger Andrey Poot May',
				color: '',
				check_in: '2021-01-14',
				check_out: '2021-01-20',
			},
			11: {
				id: '11',
				title: 'Mark Zucaritas',
				color: '',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
		},
	},
	{
		short_name: 'Hab Std Jardín',
		room_code: '108',
		bookings: {
			12: {
				id: '12',
				title: 'Mitch Castro',
				color: '#adf406',
				check_in: '2021-01-20',
				check_out: '2021-01-22',
			},
			7: {
				id: '7',
				title: 'Niger Andrey Poot May',
				color: '',
				check_in: '2021-01-14',
				check_out: '2021-01-20',
			},
		},
	},
	{ short_name: 'Hab Std Jardín', room_code: '110', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '208', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '210', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '109', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '111', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '209', bookings: [] },
	{ short_name: 'Hab Std Jardín', room_code: '211', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '101', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '103', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '201', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '204', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '206', bookings: [] },
	{
		short_name: 'Hab std vista calle',
		room_code: '203',
		bookings: {
			2: {
				id: '2',
				title: 'CAN-23',
				color: '',
				check_in: '2021-01-09',
				check_out: '2021-01-13',
			},
		},
	},
	{ short_name: 'Hab std vista calle', room_code: '102', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '104', bookings: [] },
	{ short_name: 'Hab std vista calle', room_code: '202', bookings: [] },
	{ short_name: 'Hab deluxe vista cal', room_code: '205', bookings: [] },
	{ short_name: 'Hab Deluxe vista jar', room_code: '212', bookings: [] },
	{ short_name: 'Hab Deluxe vista jar', room_code: '207', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '119', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '121', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '123', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '214', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '216', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '218', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '220', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '222', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '113', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '115', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '117', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '118', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '120', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '122', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '213', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '215', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '217', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '219', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '221', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '223', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '112', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '114', bookings: [] },
	{ short_name: 'Hab Eco', room_code: '116', bookings: [] },
];

moment.locale('es');

let cMonth = new Date().getMonth();
const cDay = moment().format('D');

const afterMonth = () => {
	cMonth--;

	printDays(cMonth);
};

const nextMonth = () => {
	cMonth++;

	printDays(cMonth);
};

const currentMonth = () => {
	cMonth = new Date().getMonth();

	printDays(cMonth);
};

const printDays = (month) => {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	const ttlDays = moment().endOf('month').add(month, 'month').format('DD');
	const eDays = document.querySelector('#calendar__days');
	const cMonth = new Date().getMonth();

	eDays.innerHTML = '';

	for (let i = 0; i < ttlDays; i++) {
		const eSpan = document.createElement('span');
		eSpan.innerHTML = `${i + 1}`;

		if (i + 1 === Number(cDay) && Number(month) === cMonth) {
			eSpan.className = 'current-day';
		}

		eDays.appendChild(eSpan);
	}

	printTxtDate(ttlDays, month);
	printBookings(ttlDays, month);
};

const printTxtDate = (ttlDays, month) => {
	const eTextDate = document.getElementById('calendar-text');
	const eMonthTitle = document.getElementById('calendar-monthTitle');
	const txtMonth = moment().add(month, 'month').format('MMMM');
	const txtYear = moment().add(month, 'month').format('YYYY');

	eTextDate.innerText = `1 ${txtMonth} ${txtYear} - ${ttlDays} ${txtMonth} ${txtYear}`;
	eMonthTitle.innerText = `${txtMonth.toUpperCase()}`;
};

const printBookings = (days, month) => {
	// Required values for fetch (Used in the query)
	const monthNumber = moment().add(month, 'month').format('M');
	const yearNumber = moment().add(month, 'month').format('Y');

	console.table({ month: monthNumber, year: yearNumber });

	const cMonth = new Date().getMonth();
	const eCalendar = document.querySelector('.calendar__container-body');
	eCalendar.innerHTML = '';

	bookings.forEach((b) => {
		/**
		 * Crea 'div', add class 'calendar__container-item-1', add 'span', span add innerText
		 * Crea 'div', add class 'calendar__container-item-2', add 'span', span add innerText
		 * Crea 'div', add class 'calendar__bookings-items', add 'div' add class 'calendar__date-dates booking-days', add 'div'
		 *
		 * if booking ?
		 * create 'span', add class 'booking', add style 'backgroundColor', add data-toggle="tooltip"
		 * data-placement="top" title="Booking 1"
		 */
		/**
		 * <div class="calendar__container-item-1">
				<span>Presidencial</span>
			</div>
			<div class="calendar__container-item-2">
				<span>200</span>
			</div>
			<div class="calendar__bookings-items">
				<div class="calendar__date-dates booking-days">
					<div></div>
					<div>
						<span class="booking" style="background: #A50CA0;" data-toggle="tooltip" data-placement="top" title="Booking 1"></span>
					</div>
					<div>
						<span class="booking" style="background: #A50CA0;" data-toggle="tooltip" data-placement="top" title="Booking 1"></span>
					</div>
					<div></div> ... *nDays
				</div>
			</div>
		*/

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

			if (i + 1 === Number(cDay) && cMonth === month) {
				eBookingItem.className = 'current-day';
			}

			for (const key in b.bookings) {
				const bDayCheckI = moment(b.bookings[key].check_in).format('D');
				const bDayCheckO = moment(b.bookings[key].check_out).format('D');
				const bDateI = moment(b.bookings[key].check_in).format('M');
				const bDateO = moment(b.bookings[key].check_out).format('M ');
				const eBooking = document.createElement('a');

				if (i + 1 === Number(bDayCheckI)) {
					eBooking.className = 'booking clip-2';
				} else if (i + 1 === Number(bDayCheckO)) {
					eBooking.className = 'booking clip-1';
				} else {
					eBooking.className = 'booking';
				}

				if (Number(bDateI) === month + 1 && Number(bDateO) === month + 1) {
					if (i + 1 >= Number(bDayCheckI) && i + 1 <= Number(bDayCheckO)) {
						eBooking.href = `#`;
						// TODO: CAMBIAR EL VALOR POR 'b.bookings[key].color'
						eBooking.style.background = 'red';
						eBooking.setAttribute('data-toggle', 'tooltip');
						eBooking.setAttribute('data-placement', 'top');
						eBooking.setAttribute('title', b.bookings[key].title);

						eBookingItem.appendChild(eBooking);
					}
				}
			}

			eBookingItems.appendChild(eBookingItem);
		}

		eBookings.append(eBookingItems);

		eCalendar.append(eRoomType);
		eCalendar.appendChild(eNumberRoom);
		eCalendar.appendChild(eBookings);
	});

	setStyGridTempCol(days);
};

const setStyGridTempCol = (days) => {
	const eGrid = document.querySelectorAll('.calendar__date-dates');

	eGrid.forEach((e) => {
		e.style.gridTemplateColumns = 'repeat(' + days + ', 1fr)';
	});
};

printDays(cMonth);

const btnRight = document.querySelector('#btnRight');
const btnLeft = document.querySelector('#btnLeft');
const btnCurrent = document.querySelector('#btnCurrent');

btnRight.addEventListener('click', nextMonth);
btnLeft.addEventListener('click', afterMonth);
btnCurrent.addEventListener('click', currentMonth);

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

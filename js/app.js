const data = [
	{
		type: 'Presidencial',
		code: 200,
		group: 'YUCA-200',
		bookings: [
			{
				folio: '0001',
				checkIn: '2020-01-29',
				checkOut: '2020-01-30',
				color: '#FF3B3B',
			},
			{
				folio: '0002',
				checkIn: '2020-01-30',
				checkOut: '2020-01-31',
				color: '#3BB0FF',
			},
		],
	},
	{
		type: 'Presidencial',
		code: 201,
		group: 'YUCA-200',
		bookings: [
			{
				folio: '0003',
				checkIn: '2020-01-15',
				checkOut: '2020-01-20',
				color: '#5281FF',
			},
			{
				folio: '0004',
				checkIn: '2020-01-25',
				checkOut: '2020-01-27',
				color: '#DC52FF',
			},
		],
	},
	{
		type: 'Presidencial',
		code: 202,
		group: 'YUCA-200',
		bookings: [
			{
				folio: '0003',
				checkIn: '2020-02-15',
				checkOut: '2020-02-20',
				color: '#5281FF',
			},
			{
				folio: '0004',
				checkIn: '2020-02-25',
				checkOut: '2020-02-27',
				color: '#DC52FF',
			},
		],
	},
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

	data.forEach((d) => {
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
		eTypeSpan.innerText = d.type;
		eRoomType.appendChild(eTypeSpan);

		const eNumberRoom = document.createElement('div');
		eNumberRoom.className = 'calendar__container-item-2';
		const eTypeSpan2 = document.createElement('span');
		eTypeSpan2.innerText = d.code;
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

			d.bookings.forEach((b, j) => {
				const bDayCheckI = moment(b.checkIn).format('D');
				const bDayCheckO = moment(b.checkOut).format('D');
				const bDateI = moment(b.checkIn).format('M');
				const bDateO = moment(b.checkOut).format('M ');
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
						eBooking.style.background = b.color;
						eBooking.setAttribute('data-toggle', 'tooltip');
						eBooking.setAttribute('data-placement', 'top');
						eBooking.setAttribute('title', b.folio);

						eBookingItem.appendChild(eBooking);
					}
				}
			});

			eBookingItems.appendChild(eBookingItem);
		}

		eBookings.append(eBookingItems);

		// eCalendar simula el div super padre
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

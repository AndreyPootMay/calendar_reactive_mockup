let cMonth = new Date().getMonth();
let days = moment().endOf('month').add(cMonth, 'month').format('DD');
let year = new Date().getFullYear();

const cDay = moment().format('D');
const month = new Date().getMonth();
const eCalendar = document.querySelector('.calendar__container-body');
const eCalendarLoading = document.querySelector('.calendar-loading');

let cMonthFormatted = moment().add(cMonth, 'month').format('MM');

let data = [];
let bookings = [];

async function getData() {
	try {
		eCalendar.innerHTML = '';
		eCalendar.style.display = 'none';
		eCalendarLoading.style.display = 'block';

		const res = await fetch(
			`https://admin.puertachichen.com/rooms/room-calendar-data?month=${cMonthFormatted}&year=${year}`
		);
		const dataDB = await res.json();
		data = dataDB;
		bookings = dataDB;
	} catch (error) {
		eCalendarLoading.innerHTML = '<span class="error">OPS! Ah ocurrido un error</span>';
		console.error(error);
	}

	createOptionsSelect();
	printDays();
	runTooltip();
}

function createOptionsSelect() {
	const eSelect = document.querySelector('#filter');
	eSelect.innerHTML = '';

	const eOptionDefault = document.createElement('option');
	eOptionDefault.value = 'all';
	eOptionDefault.innerText = 'Mostrar todos';
	eSelect.append(eOptionDefault);

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

const afterMonth = () => {
	cMonth--;
	days = moment().endOf('month').add(cMonth, 'month').format('DD');
	cMonthFormatted = moment().add(cMonth, 'month').format('MM');
	year = moment().add(cMonth, 'month').format('YYYY');

	getData();
};

const nextMonth = () => {
	cMonth++;
	days = moment().endOf('month').add(cMonth, 'month').format('DD');
	cMonthFormatted = moment().add(cMonth, 'month').format('MM');
	year = moment().add(cMonth, 'month').format('YYYY');

	getData();
};

const currentMonth = () => {
	cMonth = new Date().getMonth();
	days = moment().endOf('month').add(month, 'month').format('DD');
	cMonthFormatted = moment().add(cMonth, 'month').format('MM');
	year = new Date().getFullYear();

	getData();
};

const printDays = () => {
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

				if (Number(bMonthI) >= cMonth + 1) {
					if (i + 1 >= Number(bDayCheckI) && i + 1 <= Number(bDayCheckO)) {
						eBookingItem.style.borderLeft = 'none';
						eBooking.href = `${b.bookings[key].url}`;
						eBooking.style.background = b.bookings[key].color;
						eBooking.setAttribute('data-toggle', 'tooltip');
						eBooking.setAttribute('data-placement', 'auto bottom');
						eBooking.setAttribute('title', b.bookings[key].title);

						eBookingItem.appendChild(eBooking);
					}
				}

				if (i + 1 === Number(bDayCheckI)) {
					eBooking.className = 'booking clip-2';
					if (b.bookings[key].typeOfDate === 1) {
						eBooking.className = 'booking';
					}
					eBooking.style.left = '.5px';
					eBookingItem.style.borderLeft = '1px solid #e0e0e0';
				} else if (i + 1 === Number(bDayCheckO)) {
					eBooking.className = 'booking clip-1';
					if (b.bookings[key].typeOfDate === 2) {
						eBooking.className = 'booking';
					}
					eBooking.style.left = '-.5px';
				} else {
					eBooking.className = 'booking';
				}

				if (Number(bDayCheckI) === Number(bDayCheckO) && b.bookings[key].typeOfDate === 1) {
					eBooking.className = 'booking clip-1';
				}
			}

			eBookingItems.appendChild(eBookingItem);
		}

		eBookings.append(eBookingItems);

		eCalendar.append(eRoomType);
		eCalendar.appendChild(eNumberRoom);
		eCalendar.appendChild(eBookings);

		eCalendar.style.display = 'grid';
		eCalendarLoading.style.display = 'none';
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
	$('[data-toggle="tooltip"]').tooltip();
};

const btnRight = document.querySelector('#btnRight');
const btnLeft = document.querySelector('#btnLeft');
const btnCurrent = document.querySelector('#btnCurrent');

const Calendar = {
	run: function () {
		moment.locale('es');

		getData();

		btnRight.addEventListener('click', nextMonth);
		btnLeft.addEventListener('click', afterMonth);
		btnCurrent.addEventListener('click', currentMonth);

		const eSelect = document.querySelector('#filter');

		eSelect.addEventListener('change', (e) => {
			const val = e.target.value;

			val !== 'all'
				? (bookings = data.filter((b) => b.short_name === val))
				: (bookings = data);

			printBookings();
			runTooltip();
		});
	},
};

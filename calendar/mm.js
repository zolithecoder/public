//local storage törlése:
//for (let i = 0; i < localStorage.length; i++) {
//const key = localStorage.key(i);
//localStorage.removeItem(key);
//}



document.addEventListener("DOMContentLoaded", function () {
	const calendar = document.getElementById("calendar");
	let currentDate = new Date();
	let creatingNote = false; // Az új jegyzet mód tartása

	const createCalendar = () => {
		const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
		const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
		const startingDay = firstDayOfMonth.getDay(); // Hónap első napja

		const title = document.createElement("h2");
		title.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
		calendar.innerHTML = '';
		calendar.appendChild(title);

		const table = document.createElement("table");
		const thead = document.createElement("thead");
		const tr = document.createElement("tr");

		daysOfWeek.forEach(day => {
			const th = document.createElement("th");
			th.innerHTML = day;
			tr.appendChild(th);
		});

		thead.appendChild(tr);
		table.appendChild(thead);

		const tbody = document.createElement("tbody");

		let count = 1;
		let dayOfMonth = 1;

		const today = new Date(); // A mai dátum lekérése

		for (let i = 0; i < 6; i++) {
			const tr = document.createElement("tr");
			for (let j = 0; j < 7; j++) {
				const td = document.createElement("td");
				if (count > lastDayOfMonth.getDate()) {
					// Üres cella a hónap utáni napokra
					td.classList.add("inactive");
					td.innerHTML = dayOfMonth++;
				} else if (i === 0 && j < startingDay) {
					// Üres cella a hónap előtti napokra
					td.classList.add("inactive");
					const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
					td.innerHTML = daysInPrevMonth - (startingDay - 1) + j;
				} else {
					// Aktív napok
					td.innerHTML = count;

					if (count === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
						td.classList.add("current-day");
					}

					const noteKey = `note_${count}_${currentDate.getMonth()}_${currentDate.getFullYear()}`;
					// Ellenőrizzük, hogy van-e jegyzet az adott naphoz a localStorage-ban
					if (localStorage.getItem(noteKey)) {
						td.dataset.note = localStorage.getItem(noteKey);
					}

					td.addEventListener("click", function () {
						if (creatingNote) {
							const note = prompt("Enter your note:");
							if (note !== null && note !== "") {
								td.dataset.note = note;
								localStorage.setItem(noteKey, note); // Jegyzet mentése a localStorage-ban
							}
						} else {
							if (td.dataset.note) {
								alert(`Note: ${td.dataset.note}`);
							} else {
								alert("No note available for this day.");
							}
						}
					});
					count++;
				}
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}

		table.appendChild(tbody);
		calendar.appendChild(table);
	};

	// Segédfüggvény a mai nap ellenőrzéséhez
	const isToday = (day, firstDayOfMonth) => {
		const today = new Date();
		return day === today.getDate() && firstDayOfMonth.getMonth() === today.getMonth() && firstDayOfMonth.getFullYear() === today.getFullYear();
	};

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	document.getElementById("newNote").addEventListener("click", function () {
		creatingNote = true;
	});

	// Eseményfigyelő a jegyzetek megjelenítése mód bekapcsolásához
	document.getElementById("showNote").addEventListener("click", function () {
		creatingNote = false;
	});

	// Naptár létrehozása
	createCalendar();

	// Eseménykezelők a hónap váltásához
	document.getElementById("prevMonth").addEventListener("click", function () {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
		createCalendar();
	});

	document.getElementById("nextMonth").addEventListener("click", function () {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
		createCalendar();
	});

	// Üzenet megjelenítése
	const showMessage = (message) => {
		const messageDiv = document.getElementById("message");
		messageDiv.innerHTML = message;
	};
});

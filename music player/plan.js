const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const skipForwardBtn = document.getElementById('skipForwardBtn');
const seekSlider = document.getElementById('seekSlider');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

function togglePlayPause() {
	if (audio.paused || audio.ended) {
		playPauseBtn.textContent = 'Pause';
		audio.play();
	} else {
		playPauseBtn.textContent = 'Play';
		audio.pause();
	}
}

function updateTime() {
	let currentMinutes = Math.floor(audio.currentTime / 60);
	let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(audio.duration / 60);
	let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

	if (currentSeconds < 10) {
		currentSeconds = `0${currentSeconds}`;
	}
	if (durationSeconds < 10) {
		durationSeconds = `0${durationSeconds}`;
	}

	currentTime.textContent = `${currentMinutes}:${currentSeconds}`;
	duration.textContent = `${durationMinutes}:${durationSeconds}`;

	seekSlider.value = audio.currentTime;
}

function seekTo() {
	audio.currentTime = seekSlider.value;
}

function skipForward() {
	audio.currentTime += 10;
}

audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('loadedmetadata', updateTime);
seekSlider.addEventListener('change', seekTo);
playPauseBtn.addEventListener('click', togglePlayPause);
skipForwardBtn.addEventListener('click', skipForward);


// Existing code...

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function toggleDarkMode() {
	body.classList.toggle('dark-mode');
}

darkModeToggle.addEventListener('click', toggleDarkMode);

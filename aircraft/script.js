const spaceship = document.getElementById('spaceship');
const bullets = [];
const blasterSound = new Audio('Star_Wars_Blaster.mp3');
let gameOver = false;

document.addEventListener('mousemove', (e) => {
	const x = e.clientX - spaceship.clientWidth / 2;
	const y = e.clientY - spaceship.clientHeight / 2;

	spaceship.style.left = `${x}px`;
	spaceship.style.top = `${y}px`;
});

document.addEventListener('click', () => {
	if (!gameOver) {
		fireBullet();
		playBlasterSound();
	}
});

function fireBullet() {
	const spaceshipPosition = spaceship.getBoundingClientRect();

	const bullet = document.createElement('div');
	bullet.className = 'bullet';
	document.body.appendChild(bullet);

	const bulletStartX = spaceshipPosition.left + spaceship.clientWidth / 2 - 2.5;
	const bulletStartY = spaceshipPosition.top;

	bullet.style.left = `${bulletStartX}px`;
	bullet.style.top = `${bulletStartY}px`;

	bullets.push(bullet);

	const bulletMoveInterval = setInterval(() => {
		const bulletPosition = bullet.getBoundingClientRect();

		if (bulletPosition.top < 0) {
			clearInterval(bulletMoveInterval);
			document.body.removeChild(bullet);
			bullets.splice(bullets.indexOf(bullet), 1);
		} else {
			bullet.style.top = `${bulletPosition.top - 10}px`;
		}
	}, 10);
}

function createMeteor() {
	if (!gameOver) {
		const meteor = document.createElement('div');
		meteor.className = 'meteor';
		document.body.appendChild(meteor);

		const meteorStartX = Math.random() * window.innerWidth;
		const meteorStartY = -50;

		meteor.style.left = `${meteorStartX}px`;
		meteor.style.top = `${meteorStartY}px`;

		const meteorMoveInterval = setInterval(() => {
			const meteorPosition = meteor.getBoundingClientRect();

			if (meteorPosition.top > window.innerHeight) {
				clearInterval(meteorMoveInterval);
				document.body.removeChild(meteor);
				checkGameOver();
			} else {
				meteor.style.top = `${meteorPosition.top + 5}px`;
			}
		}, 20);
	}
}


function destroyMeteor(meteor) {
	console.log('Meteor destroyed!'); // Új sor

	const explosion = document.createElement('div');
	explosion.className = 'explosion';
	explosion.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';

	explosion.className = 'explosion';



	// Állítsd be a z-index értékét a legfelső rétegbe
	explosion.style.zIndex = '9999';

	// Állítsd be a position tulajdonságot
	explosion.style.position = 'absolute';

	document.body.appendChild(explosion);

	const meteorPosition = meteor.getBoundingClientRect();

	// Pozícionáljuk az exploziót a meteor helyére
	explosion.style.left = `${meteorPosition.left}px`;
	explosion.style.top = `${meteorPosition.top}px`;

	// Átlátszó háttérrel rendelkező robbanás kép
	explosion.style.backgroundImage = 'url("https://i.imgur.com/NEp6VsD.png")';

	// Várunk egy rövid időt, majd eltávolítjuk az exploziót
	setTimeout(() => {
		document.body.removeChild(explosion);
	}, 500);

	document.body.removeChild(meteor);
}







function checkCollision() {
	bullets.forEach(bullet => {
		const bulletPosition = bullet.getBoundingClientRect();

		const meteors = document.querySelectorAll('.meteor');
		meteors.forEach(meteor => {
			const meteorPosition = meteor.getBoundingClientRect();

			if (
				bulletPosition.left < meteorPosition.right &&
				bulletPosition.right > meteorPosition.left &&
				bulletPosition.top < meteorPosition.bottom &&
				bulletPosition.bottom > meteorPosition.top
			) {
				document.body.removeChild(bullet);
				bullets.splice(bullets.indexOf(bullet), 1);
				document.body.removeChild(meteor);
			}
		});
	});
}

function playBlasterSound() {
	blasterSound.currentTime = 0;
	blasterSound.play();
}

function checkGameOver() {
	gameOver = true;

	const gameOverMessage = document.createElement('div');
	gameOverMessage.textContent = 'GAME OVER';
	gameOverMessage.className = 'game-over';
	document.body.appendChild(gameOverMessage);

	// Teljes kijelzőn való elhelyezés
	gameOverMessage.style.position = 'fixed';
	gameOverMessage.style.left = '0';
	gameOverMessage.style.top = '0';
	gameOverMessage.style.width = '100%';
	gameOverMessage.style.height = '100%';
	gameOverMessage.style.display = 'flex';
	gameOverMessage.style.alignItems = 'center';
	gameOverMessage.style.justifyContent = 'center';
	gameOverMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'; // Átlátszó piros hátteret adunk
	gameOverMessage.style.fontSize = '3em'; // Opcionálisan, beállíthatod a szöveg méretét
}




// Meteorok létrehozása időközönként
setInterval(createMeteor, 3000);

// Ütközések ellenőrzése
setInterval(checkCollision, 50);

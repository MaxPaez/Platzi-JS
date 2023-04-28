let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

	let botonFuego = document.getElementById('boton-fuego');
	botonFuego.addEventListener('click', ataqueFuego);
	let botonAgua = document.getElementById('boton-agua');
	botonAgua.addEventListener('click', ataqueAgua);
	let botonTierra = document.getElementById('boton-tierra');
	botonTierra.addEventListener('click', ataqueTierra);

	let botonReiniciar = document.getElementById('boton-reiniciar');
	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
	let inputHipodoge = document.getElementById('hipodoge');
	let inputCapipepo = document.getElementById('capipepo');
	let inputRatigueya = document.getElementById('ratigueya');
	let spanMascotaJugador = document.getElementById('mascotaJugador');

	if (inputHipodoge.checked) {
		spanMascotaJugador.innerHTML = 'Hipodoge';
	} else if (inputCapipepo.checked) {
		spanMascotaJugador.innerHTML = 'Capipepo';
	} else if (inputRatigueya.checked) {
		spanMascotaJugador.innerHTML = 'Ratigueya';
	} else {
		alert('Selecciona una mascota');
	}

	seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
	let mascotaAleatoria = aleatorio(1, 3);
	let spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

	if (mascotaAleatoria == 1) {
		spanMascotaEnemigo.innerHTML = 'Hipodoge';
	} else if (mascotaAleatoria == 2) {
		spanMascotaEnemigo.innerHTML = 'Capipepo';
	} else {
		spanMascotaEnemigo.innerHTML = 'Ratigueya';
	}
}

function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);

	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO';
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA';
	} else {
		ataqueEnemigo = 'TIERRA';
	}

	combate();
}

function ataqueFuego() {
	ataqueJugador = 'FUEGO';
	ataqueAleatorioEnemigo();
}

function ataqueAgua() {
	ataqueJugador = 'AGUA';
	ataqueAleatorioEnemigo();
}

function ataqueTierra() {
	ataqueJugador = 'TIERRA';
	ataqueAleatorioEnemigo();
}

function combate() {
	let spanVidasJugador = document.getElementById('vidasJugador');
	let spanVidasEnemigo = document.getElementById('vidasEnemigo');

	if (ataqueEnemigo == ataqueJugador) {
		crearMensajes('EMPATE');
	} else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
		crearMensajes('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if ((ataqueJugador = 'AGUA' && ataqueEnemigo == 'FUEGO')) {
		crearMensajes('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if ((ataqueJugador = 'TIERRA' && ataqueEnemigo == 'AGUA')) {
		crearMensajes('GANASTE');
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else {
		crearMensajes('PERDISTE');
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}

	revisarVidas();
}

function revisarVidas() {
	if (vidasJugador == 0) {
		crearMensajeFinal('Has perdido, pero no te rindas');
	} else if (vidasEnemigo == 0) {
		crearMensajeFinal('Has ganado el combate');
	}
}

function crearMensajes(resultadoCombate) {
	let sectionMensajes = document.getElementById('mensajes');

	let parrafo = document.createElement('p');
	parrafo.innerHTML =
		'Tu mascota atacó con ' +
		ataqueJugador +
		', las mascota del enemigo atacó con ' +
		ataqueEnemigo +
		' - ' +
		resultadoCombate;

	sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
	let sectionMensajes = document.getElementById('mensajes');

	let parrafo = document.createElement('p');
	parrafo.innerHTML = resultadoFinal;

	sectionMensajes.appendChild(parrafo);

	let botonFuego = document.getElementById('boton-fuego');
	botonFuego.disabled = true;
	let botonAgua = document.getElementById('boton-agua');
	botonAgua.disabled = true;
	let botonTierra = document.getElementById('boton-tierra');
	botonTierra.disabled = true;
}

function reiniciarJuego() {
	location.reload();
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);

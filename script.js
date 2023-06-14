let time;
let h = 0
let m = 0;
let s = 0;


const fixed = (time) => time < 10 ? `0${time}` : time;

document.querySelector('#play').addEventListener('click', (e) => {
	time = setInterval(timer, 1000)
	});	

document.querySelector('#pause').addEventListener('click', (e) => {
	clearInterval(time)
});

document.querySelector('#reset').addEventListener('click', (e) => {
	h = 0;
	m = 0;
	s = 0;
	timeDisplay.innerHTML = `${fixed(h)}:${fixed(m)}:${fixed(s)}`;
});

function timer() {
	s++;
	if(s == 60) {
		s = 0;
		m++
	}
	
	timeDisplay.innerHTML = `${fixed(h)}:${fixed(m)}:${fixed(s)}`;

	if(m > 59) {
		h++
		m = 0
		s = 0;
		timeDisplay.innerHTML = `${fixed(h)}:${fixed(m)}:${fixed(s)}`;
	}
};



















/*

// Elemento HTML para exibir o cronômetro
var display = document.getElementById("cronometro");

// Variáveis para controlar o cronômetro
var tempoInicial = 0;
var cronometro;

// Função para formatar o tempo em formato hh:mm:ss
function formatarTempo(tempo) {
  var horas = Math.floor(tempo / 3600);
  var minutos = Math.floor((tempo % 3600) / 60);
  var segundos = tempo % 60;
  
  return (
    (horas < 10 ? "0" + horas : horas) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos)
  );
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
  tempoInicial = Math.floor(Date.now() / 1000); // Tempo atual em segundos
  
  cronometro = setInterval(function() {
    var tempoAtual = Math.floor(Date.now() / 1000); // Tempo atual em segundos
    var tempoDecorrido = tempoAtual - tempoInicial;
    display.textContent = formatarTempo(tempoDecorrido);
  }, 1000); // Atualiza o cronômetro a cada segundo
}

// Função para parar o cronômetro
function pararCronometro() {
  clearInterval(cronometro);
}*/
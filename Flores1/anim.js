var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Al igual que una estrella", time: 21 },
  { text: "Te observare por mucho tiempo", time: 26 },
  { text: "Mientras todo cambia", time: 30 },
  { text: "No puedo evitar quedarme", time: 37 },
  { text: "Al igual que una estrella", time: 41 },
  { text: "Ni siquiera noto pasar el tiempo", time: 46 },
  { text: "Es dificil de explicar, quiero escapar", time: 53 },
  { text: "Por ello cuento los dias", time: 59 },
  { text: "Mientras hablemos en este Universo", time: 64, },
  { text: "Sera como crear un nuevo mundo", time: 73},
  { text: "Es hora de encontrar mi camino de vuelta a casa", time: 78 },
  { text: "Poco ha pasado", time: 85 },
  { text: "Y no siento nada", time: 90 },
  { text: "Disfruto hablar contigo", time: 94 },
  { text: "Y llega el momento de despedirnos", time: 100 },
  { text: "Hasta la proxima", time: 105 },
  { text: "Al igual que una estrella", time: 128 },
  { text: "Todos los recuerdos quedaron atrapados", time: 133 },
  { text: "Estamos cansados del pasado", time: 139 },
  { text: "Es dificil de explicar", time: 144 },
  { text: "Si en este universo ries", time: 150 },
  { text: "crearas un nuevo mundo", time: 159 },
  { text: "Donde podras brillar", time: 163 },
  { text: "Poco a pasado", time: 171 },
  { text: "Y no siento temor", time: 175 },
  { text: "Quiero conocerte mejor ", time: 180 },
  { text: "Pero llega el momento de despedirnos", time: 185 },
  {text: "Hasta la proxima", time: 190 },
];


function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}
setTimeout(ocultarTitulo, 216000);
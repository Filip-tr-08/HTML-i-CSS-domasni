var brojki = [];
brojki.length = 3;
for (var i = 0; i < brojki.length; i++) {
  brojki[i] = prompt("Vnesi brojka:"); // za da se vnese nizata
}
for (var i = brojki.length - 1; i >= 0; i--) {
  // so ovoj for ke ja vrtime nizata od krajot kon pocetokot
  document.write(brojki[i] + " "); // gi ispisuvame site brojki po obraten redosled
}

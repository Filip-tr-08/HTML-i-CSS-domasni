brojac50 = 0;
brojac20 = 0;
brojac10 = 0;
brojac5 = 0;
brojac1 = 0;
var n50 = prompt("Vnesi kolku paricki imame so vrednost 50 denari: ");
var n20 = prompt("Vnesi kolku paricki imame so vrednost 20 denari: ");
var n10 = prompt("Vnesi kolku paricki imame so vrednost 10 denari: ");
var n5 = prompt("Vnesi kolku paricki imame so vrednost 5 denari: ");
var n1 = prompt("Vnesi kolku paricki imame so vrednost 1 denar: ");
var dadena_vrednost = prompt(
  "Vnesi vrednost sto sakas da ja dobieme so dadenite paricki: "
);
for (var i = 0; i < n50; i++) {
  if (parseInt(dadena_vrednost - 50) >= 0) {
    dadena_vrednost = dadena_vrednost - 50;
    brojac50++;
  } else if (parseInt(dadena_vrednost - 50) < 0) {
    dadena_vrednost = dadena_vrednost;
    break;
  }
}
for (var i = 0; i < n20; i++) {
  if (parseInt(dadena_vrednost - 20) >= 0) {
    dadena_vrednost = dadena_vrednost - 20;
    brojac20++;
  } else if (parseInt(dadena_vrednost - 20) < 0) {
    dadena_vrednost = dadena_vrednost;
    break;
  }
}
for (var i = 0; i < n10; i++) {
  if (parseInt(dadena_vrednost - 10) >= 0) {
    dadena_vrednost = dadena_vrednost - 10;
    brojac10++;
  } else if (parseInt(dadena_vrednost - 10) < 0) {
    dadena_vrednost = dadena_vrednost;
    break;
  }
}
for (var i = 0; i < n5; i++) {
  if (parseInt(dadena_vrednost - 5) >= 0) {
    dadena_vrednost = dadena_vrednost - 5;
    brojac5++;
  } else if (parseInt(dadena_vrednost - 5) < 0) {
    dadena_vrednost = dadena_vrednost;
    break;
  }
}
for (var i = 0; i < n1; i++) {
  if (parseInt(dadena_vrednost - 1) >= 0) {
    dadena_vrednost = dadena_vrednost - 1;
    brojac1++;
  } else if (parseInt(dadena_vrednost - 1) < 0) {
    dadena_vrednost = dadena_vrednost;
    break;
  }
}
document.write(
  " Iskoristeni se : Pedeset denari :   " +
    brojac50 +
    " Dvaeset denari :  " +
    brojac20 +
    " Deset denari :  " +
    brojac10 +
    " Pet denari :  " +
    brojac5 +
    " Eden denar :  " +
    brojac1
);

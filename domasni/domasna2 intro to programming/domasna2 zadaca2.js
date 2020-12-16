var brojki = [];
brojki.length = 5;
var max = 0;
for (var i = 0; i < brojki.length; i++) {
  brojki[i] = prompt("Vnesi brojka: ");
  if (parseInt(brojki[i] - max) > 0) {
    // ako razlikata megju brojkata koja ja vnesuvame i  maksimumot e pogolema od nula
    // znaci deka brojkata sto sme ja vnele e pogolema
    max = brojki[i];
  }
}
document.write("Maksimalniot broj e: " + max);

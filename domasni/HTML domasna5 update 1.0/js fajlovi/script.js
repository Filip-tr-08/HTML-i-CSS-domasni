$(document).ready(function () {
  $("h2").click(function () {
    $(".list-characters").toggle(1000);
  });
});
const sound1 = new Audio(
  "../auidos/Final Fantasy VII Sound Effects - Equip.mp3"
);
const sound = new Audio(
  "../auidos/Final Fantasy VII Sound Effects - Cursor Move.mp3"
);

document.querySelector("#images").addEventListener("mouseover", cursor);
document.querySelector("#images2").addEventListener("mouseover", cursor);
document.querySelector("#images3").addEventListener("mouseover", cursor);
document.querySelector("#images4").addEventListener("mouseover", cursor);
document.querySelector("#images5").addEventListener("mouseover", cursor);
document.querySelector("#images6").addEventListener("mouseover", cursor);
document.querySelector("#images7").addEventListener("mouseover", cursor);
document.querySelector("#images8").addEventListener("mouseover", cursor);
document.querySelector("#images9").addEventListener("mouseover", cursor);
document.querySelector("#images10").addEventListener("mouseover", cursor);
document.querySelector("#f").addEventListener("click", cursor1);

function cursor() {
  sound.play();
}
function cursor1() {
  sound1.play();
}

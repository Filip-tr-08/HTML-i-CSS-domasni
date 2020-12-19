const sound1 = new Audio(
  "../auidos/Final Fantasy VII Sound Effects - Equip.mp3"
);
document.querySelector("#fi").addEventListener("click", cursor2);
function cursor2() {
  sound1.play();
}

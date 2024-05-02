let increases = document.getElementById("increases");
let saves = document.getElementById("saves");
let count = 0;
function increase() {
  count += 1;
  increases.textContent = count;
}
function save() {
  count = count;
  saves.textContent = count;
}
function rest() {
  count = 0;
  saves.textContent = count;
  increases.textContent = count;
}

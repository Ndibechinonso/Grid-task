let pic = Document.getElementsByClassName(".slides");

let pics = Array.prototype.slice.call(pic);

let random = Math.floor(Math.random() * pics.length + 1);

function picsDisplay() {
for ( let i = 0; i < random.lenght; i++) {
pic.innerHTML = random;
} }
picsDisplay()
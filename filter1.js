let radio = document.getElementsByName('megap');
for (let i=0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}
function testRadio() {
    document.getElementById('nameModel').innerText = this.value;
}

let radio2 = document.getElementsByName('poe');
for (let i=0; i<radio2.length; i++) {
    radio2[i].onchange = testRadio2;
}
function testRadio2(){
    document.getElementById('namePoe').innerText = this.value;
}

let radio3 = document.getElementsByName('ik');
for (let i=0; i<radio3.length; i++) {
    radio3[i].onchange = testRadio3;
}
function testRadio3(){
    document.getElementById('nameIk').innerText = this.value;
}
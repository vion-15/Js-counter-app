const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const reset = document.getElementById("reset");
let defaultValue = 0;

document.getElementById("angka").innerHTML = defaultValue;

tambah.addEventListener('click', () => {
    return document.getElementById("angka").innerHTML = ++defaultValue;
});

kurang.addEventListener('click', () => {
    return document.getElementById("angka").innerHTML = --defaultValue;
});

reset.addEventListener('click', () => {
    return document.getElementById("angka").innerHTML = defaultValue = 0;
})
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function hitungAkarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }
    return `Akar pangkat dua dari ${x} adalah ${Math.sqrt(x)}`;
}


rl.question("Masukkan angka: ", (input) => {
    const angka = Number(input); 
    if (isNaN(angka)) {
        console.log("Input harus berupa angka!");
    } else {
        console.log(hitungAkarPangkatDua(angka));
    }
    rl.close();
});

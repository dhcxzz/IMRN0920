//Soal 1
console.log('LOOPING PERTAMA');

var jumlahLoopPertama = 10;
var jumlahLoopKedua = 10;
var angkaPertama = 2;
var angkaKedua = 20;

while (jumlahLoopPertama > 0){
    console.log(angkaPertama+"- I love coding");
    angkaPertama = angkaPertama+2;
    jumlahLoopPertama--;
}

console.log('LOOPING KEDUA');

while (jumlahLoopKedua > 0){
    console.log(angkaKedua+ "- I will become a mobile developer");
    angkaKedua = angkaKedua-2;
    jumlahLoopKedua--;
}

console.log('\n'); //spasi antar soal

//Soal 2
var angkaLoopFor = 1;

for (let i = 20; i > 0; i--){
    
    if(angkaLoopFor %2==1){
        if (angkaLoopFor %3==0){
            console.log(angkaLoopFor+" - I Love Coding");
        }
        else {
            console.log(angkaLoopFor+" - Santai");
        }
    }
    else if(angkaLoopFor %2==0){
        console.log(angkaLoopFor+" - Berkualitas");
    }
    angkaLoopFor++;
}

console.log('\n'); //spasi antar soal

//Soal 3
var lebar = 8;
var cetak;

for (let i = 1; i <= 4; i++) {
    if (i === 1 || i === lebar) {
        cetak = Array(lebar + 1).join('#');
    }
    console.log(cetak);
}

console.log('\n'); //spasi antar soal

//Soal 4
for (let baris = "#"; baris.length < 8; baris += "#"){
    console.log(baris);
}
console.log('\n'); //spasi antar soal

//Soal 5
var ukuran = 8; 
var papan = '';

for (let i = 0; i < ukuran; i++) {   
  for (let x = 0; x < ukuran; x++) {
    if ((x + i) % 2 == 0)
      papan += ' ';
    else
      papan += '#';
  }
  papan += "\n";
}

console.log(papan);
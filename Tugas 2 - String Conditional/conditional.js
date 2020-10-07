//If-else
var nama = "Subagio"
var peran = "Guard"

console.log("// Output untuk Input nama = '" + nama + "' dan peran = '" + peran + "'");

if (nama) {
    if (peran){
        console.log("Selamat datang di Dunia Werewolf, "+nama);
        if(peran == "Penyihir"){
            console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
        }
        else if(peran == "Guard"){
            console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
        }
        else if(peran == "Werewolf"){
            console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
        }
    }
    else{
        console.log("Halo "+nama+", Pilih peranmu untuk memulai game!");
    }
}
else {
    console.log("Nama harus diisi!");
}

console.log("\n"); //supaya jawaban soal satu dan dua terpisah

//Switch Case
var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var definisiBulan = '' //buat variabel kosong untuk definisi bulan

switch(bulan){
    case 1 : { definisiBulan =' Januari '; break;}
    case 2 : { definisiBulan =' Februari '; break;}
    case 3 : { definisiBulan =' Maret '; break;}
    case 4 : { definisiBulan =' April '; break;}
    case 5 : { definisiBulan =' Mei '; break;}
    case 6 : { definisiBulan =' Juni '; break;}
    case 7 : { definisiBulan =' Juli '; break;}
    case 8 : { definisiBulan =' Agustus '; break;}
    case 9 : { definisiBulan =' September '; break;}
    case 10: { definisiBulan =' Oktober '; break;}
    case 11: { definisiBulan =' November '; break;}
    case 12: { definisiBulan =' Desember '; break;}
}

console.log(tanggal + definisiBulan + tahun);
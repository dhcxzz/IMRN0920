//Soal 1
function range(startNum, finishNum) {
    if (startNum && finishNum){
        let tempAngka=[];
        if(startNum > finishNum){
                for (let i = startNum; i >= finishNum; i--){
                    tempAngka.push(i);
                }
            return tempAngka;
        }
        else {
                for (let i = startNum ; i <= finishNum; i++){
                    tempAngka.push(i);
                }
                return tempAngka;
        }
    }
    else {
        return -1;
    }
}
console.log('SOAL 1'); //nomor soal
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log('\n'); //spasi antar soal

//Soal 2
function rangeWithStep(startNum2, finishNum2, step) {
    let tempAngka=[];
    if(startNum2 > finishNum2){
            for (let i = startNum2; i >= finishNum2; i-=step){
                tempAngka.push(i);
            }
        return tempAngka;
    }
    else {
            for (let i = startNum2 ; i <= finishNum2; i+=step){
                tempAngka.push(i);
            }
        return tempAngka;
        }
}
console.log('SOAL 2'); //nomor soal
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

console.log('\n'); //spasi antar soal

//Soal 3
function sum(x,y,z){
    let tempAngka=[];
    if (x && y){
        if (!z){
            z=1;
        }
        if(x > y){
                for (let i = x; i >= y; i-=z){
                    tempAngka.push(i);
                }
        }
        else {
                for (let i = x ; i <= y; i+=z){
                    tempAngka.push(i);
                }
            }
        return tempAngka.reduce((a, b) => a + b, 0)
    }
    else if(x){
        return x;
    }
    else{
        return 0;
    }
}
console.log('SOAL 3'); //nomor soal
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log('\n'); //spasi antar soal

//Soal 4
console.log('SOAL 4'); //nomer soal
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(data){
    for (let i=0;i<data.length;i++){
        console.log("Nomor ID:  "+data[i][0]);
        console.log("Nama Lengkap:  "+data[i][1]);
        console.log("TTL:  "+data[i][2]+' '+data[i][3]);
        console.log("Hobi:  "+data[i][4]+"\n");
        
    }
}

dataHandling(input);

console.log('\n'); //spasi antar soal

//Soal 5
console.log('SOAL 5'); //nomor soal
function balikKata(kata){
        let temp = kata;
        let hasil = '';
        for (let i = kata.length - 1; i >= 0; i--) {
            hasil = hasil + temp[i];
        }
        return hasil;
}
 
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log('\n'); //spasi antar soal

//Soal 6
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
 
function dataHandling2(data2){
    //proses splice
    data2.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    //proses split
    let waktu = data2[3];
    let waktuSplit = waktu.split('/');
    let bulan = parseInt(waktuSplit[1]); //string ke int agar kalau input bula 05 bisa terbaca 5
    var definisiBulan = '' //buat variabel kosong untuk definisi bulan
    switch(bulan){
        case 1 : { definisiBulan ='Januari'; break;}
        case 2 : { definisiBulan ='Februari'; break;}
        case 3 : { definisiBulan ='Maret'; break;}
        case 4 : { definisiBulan ='April'; break;}
        case 5 : { definisiBulan ='Mei'; break;}
        case 6 : { definisiBulan ='Juni'; break;}
        case 7 : { definisiBulan ='Juli'; break;}
        case 8 : { definisiBulan ='Agustus'; break;}
        case 9 : { definisiBulan ='September'; break;}
        case 10: { definisiBulan ='Oktober'; break;}
        case 11: { definisiBulan ='November'; break;}
        case 12: { definisiBulan ='Desember'; break;}
    }
    //proses sort
    let temp = waktuSplit.slice(); //menggunakan slice untk meng-copy value array
    let sort = temp.sort(function(a,b){return b-a});
    //proses join
    let join = waktuSplit.join('-');
    //proses slice
    let nama = data2[1];
    let slice = nama.split('').slice(0,14).join('');


    //output
    console.log(data2);
    console.log(definisiBulan);
    console.log(sort);
    console.log(join);
    console.log(slice);

}

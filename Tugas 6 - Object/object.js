//Soal 1
function arrayToObject(arr) {
    for (let i = 0; i < arr.length; i++){
        var now = new Date();
        var thisYear = now.getFullYear();
        var orang = {
            namaAwal : arr[i][0],
            namaBelakang : arr[i][1],
            gender : arr[i][2],
        };
        if (arr[i][3] < thisYear){
                orang.tahun = thisYear - arr[i][3];
        }
        else{
                orang.tahun = "Invalid Birth Year";
        }
        const {namaAwal,namaBelakang,gender,tahun}= orang;
        console.log ((i+1)+`. ${namaAwal} ${namaBelakang} {firstname: "${namaAwal}", lastname: "${namaBelakang}", gender: "${gender}", age: "${tahun}"}`);
    }


    
}
 
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""

//Soal 2
console.log()

function shoppingTime(memberId, money) {
    var listPurchased = [];
    var barang =[
        ['Sepatu brand Stacattu', 1500000],
        ['Baju brand Zoro',500000],
        ['Baju brand H&N',250000],
        ['Sweater brand Uniklooh',175000],
        ['Casing Handphone',50000]
    ]
    if (memberId){
        if(money > 50000){
            for(let i = 0; i < barang.length; i++){
                let harga = barang[i][1];
                if(money >= harga){
                    var change = money -= harga;
                    listPurchased.push(barang[i][0]);
                }
            }
            return `{meberId: '${memberId}, money: ${money}, listPurchased: [${listPurchased}], changeMoney: ${change}'}`;
        }
        else{
            return "Mohon maaf, uang tidak cukup";
        }
    }
    else{
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
  }
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  //Soal 3
  console.log();

  function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    for (let i = 0 ; i < arrPenumpang.length; i++){
        var harga = 0;
        var penumpang ={
            nama : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2]
        }
        let a = rute.indexOf(penumpang.naikDari);
        let b = rute.indexOf(penumpang.tujuan);
        while(a<b){
            harga += 2000;
            a++;
        }
            penumpang.bayar = harga;
            hasil[i]=penumpang;
        }
    return hasil;
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]
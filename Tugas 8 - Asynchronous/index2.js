var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let loop = 0
function startRead(){
    readBooksPromise(10000, books[loop])
    .then(resolve=(waktu)=>{
        loop++
        if(loop < books.length){
            readBooksPromise(waktu, books[loop]).then(resolve)
        }
    })
    .catch((waktu)=>{
    })
}

startRead();

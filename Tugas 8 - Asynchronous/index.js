// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
var waktu = 10000;

let loop = 0
callback = (waktu)=>{
    loop++
    if(loop < books.length){
        readBooks(waktu, books[loop], callback)
    }
}
readBooks(10000, books[loop], callback)
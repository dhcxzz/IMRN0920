//Soal 1
class Animal {
    constructor(nama){
        this.name=nama
        this.legs=4
        this.cold_blooded=false
    }
    get nameM(){
        return this.name
    }
    set nameM(data){
        this.name = data
    }

    get legsM(){
        return this.legs
    }
    set legsM(data){
        this.legs = data
    }

    get cold_bloodedM(){
        return this.cold_blooded
    }
    set cold_bloodedM(data){
        this.cold_blooded = data
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal{
    constructor (nama){
        super (nama)
        this.legs = 2
    }
    yell(){
        console.log('Auooo')
    }
}

class Frog extends Animal{
    constructor (nama){
        super (nama)
    }
    jump(){
        console.log('hop hop')
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"

//Soal 2
console.log()

class Clock {
    constructor({ template }){
        this.template = template
        this.timer
    }
    
    render() {
        this.date = new Date()
        this.hours = this.date.getHours()
        if (this.hours < 10) this.hours = '0' + this.hours
  
        this.mins = this.date.getMinutes()
        if (this.mins < 10) this.mins = '0' + this.mins
  
        this.secs = this.date.getSeconds()
        if (this.secs < 10) this.secs = '0' + this.secs
  
        this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);
  
      console.log(this.output)
    }
    
    start() {
        this.render()
        this.timer = setInterval(this.render.bind(this), 1000)
      }

    stop() {
      clearInterval(this.timer)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  

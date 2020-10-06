//Soal 1
const golden = goldenFunction=()=>{
    console.log("this is golden!!")
  }
   
  golden()

//Soal 2
console.log();

const newFunction = literal=(firstName, lastName)=>{
    return {
      firstName, 
      lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()

//Soal 3
console.log();

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

//Soal 4
console.log();

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]
//Driver Code
console.log(combined)

//Soal 5
console.log();

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 

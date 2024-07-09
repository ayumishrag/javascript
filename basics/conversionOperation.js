let score = 420
console.log(typeof score)  //normal rule
console.log(typeof(score))  // written as method by using ()

//let suppose if we get the value of score in string form in that situation we cant change the its value
// so we have to convert it into the number form from string...
// thats why we'll use conversion operation 


let scoRe = "200"  // scoRe value in string form
console.log(typeof scoRe)


// conversion of String into number form 

let valueInNumber = Number(scoRe)
console.log(typeof valueInNumber )

// we can get some alphabets also in an string, ex.

let runs = "234abs"
console.log(typeof runs)

//conversion
let runInNumber = Number(runs)
console.log(typeof runInNumber) // at this place it will show it is a number.

// bute if we print the exact value of the variable we get NaN  
console.log(runInNumber) //NaN means not a number

// same as if we get score = null, we get 0
//                   score = undefined, we get NaN
//                    score = true, we get 1
//                   score = string "ayushi", we get NaN
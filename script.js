// function sayHello(){
//     return "Hello JavaScript"
// }
// console.log(sayHello())


// function add(a,b){
//     return a+b
// }
// console.log(add(2,4))

// function HiName(name = "Guest"){
//     console.log(`Hi ${name}`)
// }
// HiName("Sung")


// function addUnlimited(...nums){
//     let sum = 0 
//     // nums.forEach(val=>{
//     //     sum += val
//     // })
//     let ans = nums.reduce(function(acc,val){
//         return  acc + val;
//     },0)
//     console.log(ans)
//     // console.log(sum)
// }
// addUnlimited(1,2,3,4,5,6,7,8,9,10)


// (function(){
//     console.log("Run Instantly")
// })()

// function parent (){
//     let a = 12 ;
//     function child () {
//         console.log(a)
//     }
//     child()
// }
// parent()

// let arr = ["Apple","Banana","Chikoo","Dragon Fruit","Emblica"]
// console.log(arr)
// arr.push("Mango")
// console.log(arr)
// arr.shift()
// console.log(arr)


// let arr = ["Apple","Banana","Chikoo","Dragon Fruit","Emblica"]
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }

// let person = {
//     name : "aryan",
//     age : 21 , 
//     city : "surat"
// }
// // console.log(person.name)
// // console.log(person.age)
// // console.log(person.city)
// for(let key in person){
//     console.log(person[key])
// }

// setTimeout(() => {
//     console.log("Time 's Up ")
// }, 4000);

// function runTwice(fn){
//     fn()
//     fn()
// }

// runTwice(function(){
//     console.log("HELLO")
// })


// function pure(a,b){
//     console.log(a+b)
// }
// pure(1,2)
// pure(1,2)

// let global = 0
// function impure(a){
//     global++
//     console.log(a+global)
// }
// impure(global)
// impure(global)

// function abcd ({name,age}){
//     console.log(name)
//     console.log(age)
// }
// abcd({name : "Harsh" , age : 27})

//  this ek aisa keyword hai joh dynamic hai iski value badal jati hai baarbaar 
// console.log(this)
// function abcd(){
//     console.log(this)
// }
// abcd()
// let obj = {
//     name : "harsh",
//     fnc : function(){
//         console.log(this)
//     }
// }
// obj.fnc()

// let obj = {
//     name : "harsh",
//     fnc : ()=>{
//         console.log(this)
//     }
// }
// obj.fnc()

// function abd (){
//     console.log(this)
// }
// abd()


// Global this value = window
// inside the simple function = window
// function inside the object this value = object itself
// arrow function inside the object this value = window
// inside the arrow function the value of this = window
// imp note : arrow function takes this value from parent


// let arr = [1,2,3,4,5]
// let newArr = arr.map(function(val){
//     return val*val;
// })
// console.log(newArr)

// let arr = [1,2,3,4,5]
// let newArr = arr.filter(function(val){
//     return val%2==0
// })
// console.log(newArr)

// let arr = [1000,2000,3000]
// let newArr = arr.reduce(function(acc,val){
//     return acc + val;
// },0)
// console.log(newArr)

// let names = ["yuvraj","raj","aryan","anonymous",""]
// let newArr = names.some(function(val){
//     return val.length > 3
// })
// console.log(newArr)

// let user = {
//     name : "Harsh",
//     age : 27,
//     email : "h@h.h"
// }
// Object.freeze(user)
// let user = {
//     name : "Harsh",
//     age : 27,
//     email : "h@h.h"
// }
// Object.freeze(user)
// freeze doesn't allow to change the value and addition of any new key value pair
// seal allow to change the value but it doesn't allow for addition of any new key value pair

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


function addUnlimited(...nums){
    let sum = 0 
    for(let i = 1 ; i <= nums.length; i++){
        sum += i
    }
    console.log(sum)
}

addUnlimited(1,2,3,4,5,6,7,8,9,10)
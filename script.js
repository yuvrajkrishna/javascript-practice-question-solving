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

function parent (){
    let a = 12 ;
    function child () {
        console.log(a)
    }
    child()
}

parent()
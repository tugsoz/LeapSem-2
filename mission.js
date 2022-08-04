// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter numbers: ", (numbers) => {
//     let arr = numbers.split(" ");

//     let mul = 1;
//     let sum = 0;
//     arr.forEach((i) => {
//         if(i % 2 == 1){
//             mul *= i;
//         }
//     })
//     arr.forEach((i) => {
//         if(i % 2 == 0){
//             sum += parseInt(i);
//         }
//     })
//     console.log(`Sondgoi toonuudiin urjver = ${mul}`)
//     console.log(`Tegsh toonuudiin niilber = ${sum}`)
//     rl.close();
// })

// -----------------------------------------------------

// let nemdeg = function sum(a,b){
//         return a+b;
//     }

// console.log(nemdeg(1,3))

// let nemdeg2 = (x,y) => x+y;

// console.log(nemdeg2(2,4));

// let sayMyName = (name) => `Hello, ${name}`;

// console.log(sayMyName("tugs"))

// let double = (x) => 2 * x;

// console.log(double(4))

let getAccess = (allowed) => {
    if(allowed == true)
        return "ok";
    else{
        return "no";
    }
}
console.log(getAccess(false))
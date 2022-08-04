const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Enter a number: ', (num) => {
//     console.log(`input: ${num}`);

//     let sum = 0;
//     for(let i = 0; i <= num; i++){
//         sum += i;
//     }

//     rl.close()

//     console.log(`Sum of numbers from 1 to ${num} = ${sum}`)
// })


// ------------------------------------------------------------------------------------


// rl.question('Enter a number: ', (num) => {
//     console.log(`input: ${num}`);
//     num = parseInt(num);

//     recursive = (num) => {
//         if(num == 0){
//             return 0;
//         }
//         else{
//             return num + recursive(num - 1);
//         }
//     }

//     rl.close()

//     console.log(`Sum of numbers from 1 to ${num} = ${recursive(num)}`)
// })


// --------------------------------------------------------------------------------


// console.log("Factorial")
// rl.question('Enter a number: ', (num) => {
//     console.log(`input: ${num}`);
//     num = parseInt(num);

//     factorial = (num) => {
//         if(num < 0) return 0;
//         if(num == 0) return 1;
//         return num * factorial(num - 1);
//     }

//     rl.close()

//     console.log(`${num}! = ${factorial(num)}`)
// })


// console.log("Fibonacci")
// rl.question('Enter a number: ', (num) => {
//     console.log(`input: ${num}`);
//     num = parseInt(num);

//     fib = (num) => {
//         if(num == 0) return 0;
//         if(num == 1) return 1;
//         return fib(num - 1) + fib(num - 2);
//     }

//     rl.close()

//     console.log(`${num}th number of fibonacci = ${fib(num)}`)
// })


// console.log("Reverse");
// rl.question('Enter text: ', (ans) => {
    
//     reverse = (ans) => {
//         if(ans.length < 1)return ans;
//         return ans.charAt(ans.length - 1) + reverse(ans.substring(0, ans.length - 1));
//     }

//     rl.close()

//     console.log(`Reversed text: ${reverse(ans)}`)
// })


// console.log("Extracting array")
let arr = [1, [2, [3, 4]], [5, 5], 23];

const ans = [];
const flatten = (arr) => {
  arr.forEach((el) => {
    if(!isNaN(el)) ans.push(el);
    else flatten(el);
  });
  return ans;
};

console.log(flatten(arr));
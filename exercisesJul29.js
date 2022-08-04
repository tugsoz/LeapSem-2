// let isNotaNum = (input) => new Promise((resolve, reject) => {
//     if(!isNaN(input)){
//         resolve("number");
//     }
//     else{
//         let error = new Error("error");
//         reject(error);
//     }
// return;
// })

// const isNum = async (input) => {
//     try{
//         const response = await isNotaNum(input);
//         console.log(response)
//         return response;
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }

// // console.log(isNum("msg"))

// let odd = (input) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(input % 2 == 1){
//             resolve("odd");
//         }
//         else{
//             let error = new Error("not an odd number");
//             reject(error);
//         }
//     return;
//     }, 1000);
// })

// const exTwo = async (input) => {
//     try{
//         const response = await odd(input);
//         console.log(response)
//         return response;
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }

// console.log(exTwo(3))

const request = require("request");
const axios = require("axios");

const poem = async () => {
    try{
        let res = await axios.get('https://www.poemist.com/api/v1/randompoems')
        let poem = await axios.get(res.data[0].url); // poem url ruu handna
        console.log(poem.data);

        // let row = poem.data.split("\n"); // array irne
        // let totalRead = []
        // row.forEach(el => {
        //     if(el.includes("total read"))
        //     totalRead.push(el)
        // });
        // console.log(totalRead)
    }
    catch(error){
        console.log(error.message)
    }
}

poem();
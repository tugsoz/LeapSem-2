// const urjver = ((a,b,c) => a * b * c);

// console.log(urjver(2,3,4));

// const multiply = ((a) => {
//     return (b) => {
//         return(c) => {
//             return a * b * c
//         }
//     }
// })

// console.log(multiply(3)(4)(5));

// -------------------------------------------------------


// const discount = ((price) => (discount) => price * discount);

// console.log(discount(5000)(0.1));


// -------------------------------------------------------


const chocolates = [
    {"dark":true, "flavour":"strawberry"},
    {"dark":false, "flavour":"strawberry"},
    {"dark":false, "flavour":"almond"},
    {"dark":true, "flavour":"almond"},
    {"dark":false, "flavour":"lemon"}
]

const checkProperty = (key) => (value) => (obj) => obj[key] == value;

console.log(chocolates.filter(checkProperty("dark")(true)))
console.log(chocolates.filter(checkProperty("flavour")("strawberry")))
// const a = [1,2,3,4];

// const map = a.map(x => x * 2);

// console.log(map)


// --------------------------------------------


// const birthYear = [1994,1997,2003,1993,2001];

// const age = birthYear.map(x => 2022 - x);

// console.log(age);


// --------------------------------------------


let persons = [
    {id: 1, name: "DORJ", age: 19},
    {id: 2, name: "BOLD", age: 13},
    {id: 3, name: "BALDAN", age: 15},
    {id: 4, name: "TSETSGEE", age: 20},
    {id: 5, name: "DULMAA", age: 23},
]

const adults = persons.filter((el) => {
    if(el.age >= 18){
        return el
    }
})

console.log(adults)
console.log("\n =========================== \n")

const arr = [3,-1,8,0,2]

let sum = arr.reduce((a,b) => a+b)

console.log(sum);
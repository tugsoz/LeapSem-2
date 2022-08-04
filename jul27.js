// const makePlusFunction = (basenumber) => ((newArgument) => basenumber + newArgument);

// const plusFive = makePlusFunction(5);
// console.log(plusFive(-8));

// const plusTen = makePlusFunction(10);
// console.log(plusTen(188))
// console.log(plusFive(plusTen(2)))


// ------------------------------------------------------------------------


// let arr = [
//     ["A", "A", "A"],
//     ["A", "A", "A"],
//     ["A", "B", "A"]
// ]

// const whereIsWaldo = (arr) => {
//     // const odd = arr.every(el => {
//     //     if(el !== arr[0]) return arr.indexOf(el);
//     // })
//     // return odd;
//     const waldo = (value, index, self) => {
//         return arr.indexOf(value) === index
//     }
//     return waldo;
// }

// console.log(whereIsWaldo(arr));

// --------------------------------------------------------

// -------------Chinhuslen-----------------
// const whereIsWaldo = (arr) => {
//     if(arr[0][0] != arr[0][2] || arr[0][0] != arr[1][0]) return [1,1]
//     let ans;
//     arr.forEach((el,i) => {
//         el.filter((val,j) => {
//             if(val != arr[0][0]){
//                 ans = [i+1,j+1];
//             }
//             return false;
//         })
//     });
//     return ans
// };
// const cord = [
//   ["A", "A", "A"],
//   ["A", "A", "A"],
//   ["A", "B", "A"],
// ];
// console.log(whereIsWaldo(cord));
// const cord1 = [
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"],
//     ["P", "O", "O", "O"],
//     ["O", "O", "O", "O"]
//     ];
//   console.log(whereIsWaldo(cord1));
//   const cord2 = [
//     ["d", "c", "c", "c"],
//     ["c", "c", "c", "c"],
//   ];
//   console.log(whereIsWaldo(cord2));


// -------------------------------------------------------

const whereIsWaldo = (arr) => {
    const flatten = arr.reduce((a, b) => a.concat(b));
    const count = flatten.reduce((a, b) => {
        if(a[b]){
            a[b]++
        }
        else{
            a[b] = 1
        }
        return a;
    }, {});
    const oddLetter = Object.keys(count).filter((key) => count[key] ==1)[0];
    const rowNum = arr.findIndex((row) => row.includes(oddLetter));
    const colNum = arr[rowNum].findIndex(el => el == oddLetter);
    return [rowNum + 1, colNum +1];
};

console.log(whereIsWaldo(
    [
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["O", "O", "O", "O"],
        ["P", "O", "O", "O"],
        ["O", "O", "O", "O"]
    ]
))
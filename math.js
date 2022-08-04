// ----------------------------7.20-----------------------------

const PI = Math.PI;
const MAX = (arr) => {
    let bigNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (bigNum < arr[i] ) {
            bigNum = arr[i];
        }
    }
    console.log(`Hamgiin ih too = ${bigNum}`);
}

// const MIN = Math.min.apply(null, array);
// const SQRT = Math.sqrt(sqrtNumber);
// const ABS = Math.abs(absNumber);
// const ROUND = Math.round(roundNumber);
// const FLOOR = Math.floor(floorNumber);

exports.PI = PI;
exports.MAX = MAX;
// exports.MIN = MIN;
// exports.SQRT = SQRT;
// exports.ABS = ABS;
// exports.ROUND = ROUND;
// exports.FLOOR = FLOOR;
const math = require("./math");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter circle radius: ', (answer) => {
    let perimeter = 0;
    circumference = 2 * math.PI * answer;
    console.log(`Circumference of the circle with radius of ${answer} = ${circumference}`);
    console.log(`\n--------------------------`);

    rl.close();
});
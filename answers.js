const math = require("./math");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Duriin toonuud: ', (toonuud) => {
    
    let arr = toonuud.split(" ");

    let maxNum = math.MAX(arr);

    rl.close()
});

    
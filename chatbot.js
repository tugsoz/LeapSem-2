const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello ${name}. My name is BOT`);
    rl.question("Date or time? ", (answer) => {
        if(answer == "date" || answer == "Date"){
            let date = new Date();
            console.log("Date: ", date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate(), " , bye")
        }
        if(answer == "time" || answer == "Time"){
            let time = new Date();
            console.log("Time: ", time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(), " , bye");
        }

    rl.close()
    })
})
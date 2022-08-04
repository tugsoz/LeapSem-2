let willIGetNewPhone = new Promise((resolve, reject) => {
    let time = Math.round(Math.random() * 2) * 1000;
    setTimeout(() => {
        let isMomHappy = Math.round(Math.random());
        if (isMomHappy) {
            var phone = {
                brand: "iPhone",
                color: "black",
            };
        resolve(phone); // fulfilled
      } else {
            var reason = new Error("mom is not happy");
            reject(reason); // reject
        }
    }, time);
});
    
// call our promise
//   let askMom = () => {
//     return willIGetNewPhone
//       .then((fulfilled) => {
//         // yay, you got a new phone
//         console.log(fulfilled);
//         // output: { brand: ‘Iphone', color: 'black' }
//       })
//       .catch((error) => {
//         // oops, mom don't buy it
//         console.log(error.message);
//         // output: 'mom is not happy'
//       });
//   };

let willIGetNewPhoneCase = new Promise((resolve, reject) => {
    let time = Math.round(Math.random() * 2 + 2) * 1000;
    setTimeout(() => {
        let isMomHappy = Math.round(Math.random());
        if(isMomHappy){
            let phoneCase = {
                brand: "Casetify",
                color: "purple",
            }
            resolve(phoneCase);
        }
        else{
            let reason = new Error("no case");
            reject(reason);
        }
    }, time); 
})

const askCase = async () =>{
    try{
        const response = await willIGetNewPhoneCase;
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error.message)
    }
    return;
};

const askMom1 = async () => {
    try {
    const response = await willIGetNewPhone;
        console.log(response);
        return askCase();
    }
    catch(error) {
        console.log(error.message);
    }
};


console.log("asking: ", askMom1());
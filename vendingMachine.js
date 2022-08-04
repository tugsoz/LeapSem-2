const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];

const coins = [500, 200, 100, 50, 20, 10];

const vendingMachine = (products, payment, prodNum) => {
    if(prodNum < 1 || prodNum > products.length) return console.log("Enter valid product number");
    if(payment < products[prodNum-1].price) return console.log("Not enough money");

    change = payment - products[prodNum - 1].price;

    const changesAmount = (change) => {
        let arr = [];
        coins.forEach(i => {
            if(change >= i){
                for(let j = 1; j <= parseInt(change/i); j++){
                    arr.push(i)
                }
            }
            change %= i
        })
        return arr;
    }

    return console.log({product: products[prodNum - 1].name, change: changesAmount(change)})
}

vendingMachine(products,400,9)
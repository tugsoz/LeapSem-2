const input = [
    [0,1,0,0],
    [0,0,1,0],
    [0,1,0,1],
    [1,1,0,0],
]

const minesweeper = () => {
    let output = [];
    output.push(input.forEach(el => {
        let field = el.map(a => a * 9)
        console.log(field)
    }))
    console.log(output)
}

minesweeper();
const users =[
    { id: 11, name: "Bat", age: 23, group: "editor"},
    { id: 47, name: "Bold", age: 28, group: "admin"},
    { id: 85, name: "Tulga", age: 34, group: "editor"},
    { id: 97, name: "Suren", age: 28, group: "admin"}
]

const count = () => {
    let ac = 0, ec = 0;
    users.map(a => a.group).forEach(el => {
        if(el == "admin")
            ac++;
            else ec++;
    })
    return console.log({admin: ac, editor: ec})
}

count();
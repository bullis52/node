const fs  = require('fs')
const path = require('path')


// const mkDir = path.join(__dirname,'users')
// fs.mkdir ()
const usersPath = path.join(__dirname,'users')
const users = [
    {name:"vasya", gender:'male',age:20},
    {name:"vanya", gender:'male',age:20},
    {name:"yura", gender:'male',age:20},
    {name:"ihor", gender:'male',age:20},
    {name:"marianna", gender:'female',age:20},
    {name:"kate", gender:'female',age:20},
    {name:"dasha", gender:'female',age:20},
    {name:"valya", gender:'female',age:20},
    {name:"masha", gender:'female',age:20},
    {name:"georgiy", gender:'male',age:20}
]
function createUser(){
    for (user of users){
        if (user.gender === 'male'){
            fs.writeFile(`boys/${user.name}.txt`, `${user.name} ${user.age}` ,(err)=>{
                console.log(err)
            })
        }
        if (user.gender === 'female'){
            fs.writeFile(`girls/${user.name}.txt`, `${user.name} ${user.age}` ,(err)=>{
                console.log(err)
            })
        }
    }
}
createUser()
//write a program that prints all the male people's first name given a complex object

//Using arrays

/*const names = ["som", "khati", "sudep", "kizaru", "shanks", "law"]
const gender = ["male", "female", "male", "male", "male", "female"]
let final = []
for (let i = 0; i<names.length; i++){
    if (gender[i] === "male"){
        final.push(names[i])
    }
}
console.log([final.join(', ')])*/

//----------------------------------------------------------------------------------------//

// Using Objects

const arr = [{
    firstName: "kizaru",
    gender: "male"
}, {
    firstName: "shanks",
    gender: "male"
} , {
    firstName: "Robin Chwan",
    gender: "female"
}]

for (let i=0; i<arr.length; i++){
    if(arr[i]["gender"] === "male"){
        console.log(arr[i]["firstName"])
    }
}


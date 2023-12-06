//write a program that prints all the even numbers in an array

let arr = [12,24,100,33,31,44,21,100,52,67,250]
let arr_two = []
for (let i=0; i<=arr.length; i++){
    if (arr[i]%2===0) {
        arr_two.push(arr[i])
    }
}
console.log("Even numbers are: ",[arr_two.join(', ')]);

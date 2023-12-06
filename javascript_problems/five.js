//write a program to print the biggest number in an arrays

let arr = [12,15,12000,32,5600,45,59,120,500]

let max = arr[6]

for (let i = 0; i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i]
    }
}
    console.log("the greatest number in the array is: ",max)

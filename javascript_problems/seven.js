//write a program that reverses all the elements in an array

let arr = [10,20,30,40,50,60,100]
let arr_two = []
 for(let j = arr.length-1; j>=0; --j){
        arr_two.push(arr[j])
    }

 console.log([arr_two.join(', ')])

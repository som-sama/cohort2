//creating a counter in javascript(counts down from 30 to 0)


//creating the counter
count = 30
function counting(){
    for (let i = count; i >= 0; i--) {
        setTimeout(() => {
            console.log(i);
        }, (count - i) * 1000);
    }
}
counting()

function addNumber(numbers){
    for(let n of numbers){
        if (typeof n !== 'number' || isNaN(n)){
            console.log('Error: All parameters must be valid numbers')
            return;
        }   
    }
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    console.log(`Result: ${sum}`)
}

let numbers = [1, 2, 3, 5]
addNumber(numbers);
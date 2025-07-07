function countChar(){
    let input;
    do {
        input = prompt('Enter a string:');

        if (!isNaN(input)) {
            alert("Please enter a valid string, not just a number.");
        }
    } while (!isNaN(input));

    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'e') {
        count++;
      }
    }
    console.log(`The number of 'e' characters is: ${count}`)
}

//countChar();
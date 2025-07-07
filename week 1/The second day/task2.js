function isPalindrome(){
      let input;
    do {
        input = prompt(`Enter a string to check if it's a palindrome:`);

        if (!isNaN(input)) {
            alert("Please enter a valid string, not a number.");
        }
    } while (!isNaN(input))

    const considerCase = prompt(`Consider case sensitivity? (yes/no)`).toLowerCase() === 'yes';

    let checkInput = considerCase ? input : input.toLowerCase();

    let reversedInput = checkInput.split('').reverse().join('');

    let Result = checkInput === reversedInput ? 'The string is a palindrome.' : 'The string is NOT a palindrome.';
    console.log(Result);
}

//isPalindrome();
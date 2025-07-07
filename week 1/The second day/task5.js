function mathOpration(){
    let numbers = [];

    for (let i = 0; i < 3; i++) {
      let num;
      do {
        num = prompt(`Enter number ${i + 1}:`);
        if (isNaN(num)) {
          alert("Please enter a valid number.");
        }
      } while (isNaN(num));

      numbers.push(parseFloat(num));
    }

    let sum = numbers[0] + numbers[1] + numbers[2];
    let product = numbers[0] * numbers[1] * numbers[2];
    let division = numbers[0] / numbers[1] / numbers[2];

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
      `<p>You entered: ${numbers.join(", ")}</p>` +
      `<p>Addition: ${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum}</p>` +
      `<p>Multiplication: ${numbers[0]} * ${numbers[1]} * ${numbers[2]} = ${product}</p>` +
      `<p>Division: ${numbers[0]} / ${numbers[1]} / ${numbers[2]} = ${division}</p>`;
}

//mathOpration();
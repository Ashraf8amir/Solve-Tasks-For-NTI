const input = document.getElementById('date');
const showbtn = document.getElementById('btn');

showbtn.addEventListener('click', ()=> {
    const txt = input.value.trim();
    const regex = /^\d{2}-\d{2}-\d{4}$/;

    if (!regex.test(txt)) {
      alert("Enter valid Date in format: DD-MM-YYYY");
      return;
    }

    const parts = txt.split('-');
    const dateParts = [];
    parts.forEach(part => {
      dateParts.push(Number(part));
    });
    const [day, month, year] = dateParts;

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000) {
      alert("Enter a valid date range.");
      return;
    }

    const formattedDate = new Date(`${year}-${month}-${day}`);
    if (formattedDate.getDate() !== day || formattedDate.getMonth() + 1 !== month || formattedDate.getFullYear() !== year) {
      alert("Invalid real date!");
      return;
    }

    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const dayName = days[formattedDate.getDay() + 1];

    alert(`The day is: ${dayName}`);
})
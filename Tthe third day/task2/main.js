function createRegisterForm() {
  const container = document.createElement('div');
  container.className = 'container';

  const header = document.createElement('div');
  header.id = 'header';

  const heading = document.createElement('h1');
  heading.textContent = 'Register';

  header.appendChild(heading);
  container.appendChild(header);

  const form = document.createElement('form');
  form.id = 'myForm';

  const nameInput = document.createElement('input');
  nameInput.id = 'name';
  nameInput.placeholder = 'Enter your name';

  const ageInput = document.createElement('input');
  ageInput.id = 'age';
  ageInput.placeholder = 'Enter your age';

  const emailInput = document.createElement('input');
  emailInput.id = 'email';
  emailInput.placeholder = 'Enter your email';

  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitbtn';
  submitBtn.textContent = 'Submit';
  submitBtn.type = 'submit';

  const resetBtn = document.createElement('button');
  resetBtn.id = 'resetBtn';
  resetBtn.textContent = 'Reset';
  resetBtn.type = 'button';

  form.appendChild(nameInput);
  form.appendChild(ageInput);
  form.appendChild(emailInput);
  form.appendChild(submitBtn);
  form.appendChild(resetBtn);

  container.appendChild(form);
  document.body.appendChild(container);
}

function initializeLayout() {
    createRegisterForm();
    const container = document.querySelector('.container');
    const header = document.getElementById('header');
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll("input");
    const buttons = form.querySelectorAll("button");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");
    const submitbtn = document.getElementById("submitbtn");
    const resetBtn = document.getElementById("resetBtn");


    const centerPageContent = ()=> {
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.height = '100vh';
    }
    const positionHeader = ()=> {
        header.style.position = 'absolute';
        header.style.marginTop = "200px";
    }
    const positionForm = ()=> {
        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.gap = '10px';
        form.style.position = 'absolute';
        form.style.width = "500px";
        form.style.marginTop = "280px";
    }
    const editInputs = ()=> {
        inputs.forEach(input => {
        input.style.padding = '10px';
        input.style.border = 'none';
        input.style.borderRadius = '10px';
      }); 
    } 
    const editButtons = ()=> {
        buttons.forEach(button => {
        button.style.padding = '10px';
        button.style.border = 'none';
        button.style.borderRadius = '10px';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '0px 4px 2px rgb(0,0,0.10)';
      }); 
    } 

    centerPageContent();
    positionHeader();
    positionForm();
    editInputs();
    editButtons();

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    submitbtn.addEventListener('click', ()=>{
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value.trim());
        const email = emailInput.value.trim();

        if (name === "" || isNaN(age) || age <= 0 || !validateEmail(email)) {
            alert("Please enter a valid name, age, and email.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    })
    resetBtn.addEventListener("click", ()=> {
        form.reset();
    });    
}

initializeLayout();



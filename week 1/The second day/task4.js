function collectUserInfo() {
    function isValidName(name) {
        return name && /^[a-zA-Z\s]+$/.test(name.trim());
    }

    function isValidPhone(phone) {
        return phone && /^\d{11}$/.test(phone.replace(/[^0-9]/g, ''));
    }

    function isValidEmail(email) {
        return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    let name, phone, email;

    do {
        name = prompt("Please enter your full name:");
        if (!isValidName(name)) {
            alert("Invalid name! Please use letters and spaces only.");
        }
    } while (!isValidName(name));

    do {
        phone = prompt("Please enter your phone number:");
        if (!isValidPhone(phone)) {
            alert("Invalid phone number! Please enter 11 digits.");
        }
    } while (!isValidPhone(phone));

    do {
        email = prompt("Please enter your email address:");
        if (!isValidEmail(email)) {
            alert("Invalid email address! Please enter a valid email.");
        }
    } while (!isValidEmail(email));

    alert(`Welcome, ${name.trim()}!\nYour contact details:\nPhone: ${phone}\nEmail: ${email}`);
}

//collectUserInfo();
const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awesomestartup.com"
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth;
let textNode = document.createTextNode(null);

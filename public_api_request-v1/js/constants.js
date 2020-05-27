const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth;
let textNode = document.createTextNode(null);

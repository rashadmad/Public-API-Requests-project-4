const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth;
const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);

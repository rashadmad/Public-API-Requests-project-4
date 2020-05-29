const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth;
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);

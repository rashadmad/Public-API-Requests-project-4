const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth.replace(/-/g, '/').substring(0, 10);
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);


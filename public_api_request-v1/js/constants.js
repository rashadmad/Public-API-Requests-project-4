const buisnessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const uniqueName = (name) => name.toLowerCase().replace(/^[^A-Z]+/,"");
const birthDate = (dateOfBirth) => "Birthday: " + dateOfBirth;
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);

const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);


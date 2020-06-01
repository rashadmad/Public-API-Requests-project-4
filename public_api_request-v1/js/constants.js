const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const phoneNumberFormating = (num) => num.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
const birthDayFormating = (birthday) => "Birthday: " + birthday.replace(/-/g, '/').substring(0, 10)

const amountOfUsersToDisplay = 12;
let textNode = document.createTextNode(null);


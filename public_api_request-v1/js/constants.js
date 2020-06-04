//want to be able to choose how many users we will pull from the api
const userAmount = 12;
//also add nationality as well
const nationality = "us";
//generates a company email for employee's
const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDayFormatting = (birthday) => "Birthday: " + birthday.replace(/-/g, '/').substring(0, 10)
//addition and subtraction function
const add = (numA,numB) => numA + numB;
const sub = (numA,numB) => numA - numB;
   
let textNode = document.createTextNode(null);

//need to empty out the contents of the modal
const emptyModal = () => {
    $('.modal-name').text("")
    $('.modal .modal-text:nth-child(4)').text("");
    $('.modal .modal-text:nth-child(5)').text("");
    $('.modal .modal-text:nth-child(7)').text("");
    $('.modal .modal-text:nth-child(8)').text("");
    $('.modal .modal-text:nth-child(9)').text("");
}
let currentUser = null;
//want to be able to choose how many users we will pull from the api
const userAmount = 12;
//also add nationality as well
const nationality = "us";
//generates a company email for employee's
const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDayFormatting = (birthday) => "Birthday: " + birthday.replace(/-/g, '/').substring(0, 10)
//addition function
const add = (numA,numB) => numA + numB;
//increase the index upon click if the index is not already at the max if it is send it to zero, turns the number into an integer
const modifier = (num) => {
    //makes sure we are working with a number not a string
    num = parseInt(num, 10);
    //subtract from userAmount to even it out with the array
    num = ( num >= userAmount - 1 ) ? 0 : add(num,1);
    return num
}
       
const amountOfUsersToDisplay = 12;
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
let previouslySelectedUser = null;
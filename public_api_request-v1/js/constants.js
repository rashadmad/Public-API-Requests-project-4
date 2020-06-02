const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const nameToId = (name) => name.toLowerCase().replace(/\s/g, '');
const birthDayFormatting = (birthday) => "Birthday: " + birthday.replace(/-/g, '/').substring(0, 10)

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

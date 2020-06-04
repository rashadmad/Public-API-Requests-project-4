//want to be able to choose how many users we will pull from the api
const userAmount = 12;
//also add nationality as well
const nationality = "us";
//generates a company email for employee's
const businessEmail = (nameOfEmployee) => nameOfEmployee.replace(/\s+/g, '').toLowerCase()  + "@awestart.com"
const birthDayFormatting = (birthday) => "Birthday: " + birthday.replace(/-/g, '/').substring(0, 10)
   
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

const searchUserCards = () => {
    const cards = document.querySelectorAll('.card');
    const inputValue = document.getElementById("search-input");
    const filter = inputValue.value.toLowerCase();
    console.log(filter)
    for (i = 0; i < cards.length; i++) {
        //this handles when a search is empty it shows all elements
        if(filter === ''){
            cards[i].style.display = "";
        } else if(cards[i].getAttribute('name').toLowerCase().indexOf(filter) > -1){
            cards[i].style.display = "";
        } else {
            //when a search does not match
            cards[i].style.display = "none";
        }
    } 
}
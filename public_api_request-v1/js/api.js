//utilizing fetch to work with the random generator api
const fetchData = async (url) => {
  const res = await fetch(url);
  return await res.json();
}
//Get and display 12 random users with usa nationality
fetchData('https://randomuser.me/api/?results=' + userAmount + '&nat=' + nationality)
  .then(userData => {
    // this gets you to the user data and allows you to choose it by index
    const users = userData.results
    //this for loop allows you to create multiple cards 
    users.forEach(user => {
      createCards(users.indexOf(user),user.name.first + " " + user.name.last, user.picture.medium, user.location.city)
    })
    return userData
  })
    //Add event listeners to all card just recently generated
  .then(userData => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      //take in any button click of a card and gather a unique token for the specific card clicked
      card.addEventListener("click", () => {
        //make sure all contents of an element still pass this number
        let idOfButtonPressed = card.id
        createModal(userData.results,idOfButtonPressed,userData.results[idOfButtonPressed].name.first + " " + userData.results[idOfButtonPressed].name.last, userData.results[idOfButtonPressed].picture.thumbnail, userData.results[idOfButtonPressed].location.city, userData.results[idOfButtonPressed].cell, userData.results[idOfButtonPressed].location.street.number + " " + userData.results[idOfButtonPressed].location.street.name + ", " + userData.results[idOfButtonPressed].location.postcode, userData.results[idOfButtonPressed].dob.date)
      })
    })
  })
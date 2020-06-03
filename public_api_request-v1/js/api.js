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
        createCards(users.indexOf(user),user.name.first + " " + user.name.last, user.picture.thumbnail, user.location.city)
      })
      return userData
    })
      //Add eventListners to all card just recently generated
    .then(userData => {
      console.log(userData.results[0])
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        //take in any button click of a card and gather a unique token for the specific card clicked
        card.addEventListener("click", () => {
          let idOfButtonPressed = event.target.id
          //takes in the name of the user - gathers an image for the user - takes in a city - takes in a phone number - takes in an address - takes in a birth date)
          
          createModal(userData.results,idOfButtonPressed,userData.results[idOfButtonPressed].name.first + " " + userData.results[idOfButtonPressed].name.last, userData.results[idOfButtonPressed].picture.thumbnail, userData.results[idOfButtonPressed].location.city, userData.results[idOfButtonPressed].cell, userData.results[idOfButtonPressed].location.street.number + " " + userData.results[idOfButtonPressed].location.street.name + ", " + userData.results[idOfButtonPressed].location.postcode, userData.results[idOfButtonPressed].dob.date)
        })
      })
      return userData
    })
    .then(userData => {
      
    })
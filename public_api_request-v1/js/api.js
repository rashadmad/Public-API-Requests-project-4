//Get and display 12 random users

const fetchData = async (url) => {
  const res = await fetch(url);
  return await res.json();
}

fetchData('https://randomuser.me/api/?results=12')
    .then(userData => {
      const results = userData.results
      results.forEach(user => {
        createCards(results.indexOf(user) ,user.name.first + " " + user.name.last, user.picture.thumbnail, user.location.city)
      })
      //Add eventListners to all card just recently generated
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        //take in any button click of a card and gather a unique token for the specific card clicked
        card.addEventListener("click", () => {
          let idOfButtonPressed = event.target.id
          //takes in the name of the user - gathers an image for the user - takes in a city - takes in a phone number, takes in an address,takes in a birth date)
          createModal(results[idOfButtonPressed].name.first + " " + results[idOfButtonPressed].name.last, results[idOfButtonPressed].picture.thumbnail, results[idOfButtonPressed].phone,results[idOfButtonPressed].location.street + results[idOfButtonPressed].location.city + " ," + results[idOfButtonPressed].location.postcode, results[idOfButtonPressed].dob.date.replace(/-/g, '/').substring(0, 10))
        })
      })
      
      //take in that button click and use it to 
    })
// const generateCards = (userData) => {
//   userData.map( userData => {
  
//   createCards(userData.name.first + " " + userData.results.name.last, userData.results.picture.thumbnail, userData.results.location.city)

//   })
// } 

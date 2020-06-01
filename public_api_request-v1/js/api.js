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
      return results
    })
      //Add eventListners to all card just recently generated
    .then(results => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        //take in any button click of a card and gather a unique token for the specific card clicked
        card.addEventListener("click", () => {
          let idOfButtonPressed = event.target.id
          //takes in the name of the user - gathers an image for the user - takes in a city - takes in a phone number - takes in an address - takes in a birth date)
          createModal(results[idOfButtonPressed].name.first + " " + results[idOfButtonPressed].name.last, results[idOfButtonPressed].picture.thumbnail, results[idOfButtonPressed].location.city, results[idOfButtonPressed].cell, results[idOfButtonPressed].location.street.number + " " + results[idOfButtonPressed].location.street.name + ", " + results[idOfButtonPressed].location.postcode, results[idOfButtonPressed].dob.date)
        })
      })
    })
      // const prevButton = document.getElementById('modal-prev');
      // const nextButton = document.getElementById('modal-next');
      // prevButton.addEventListener("click", () => {
      //   console.log("prevButton")
      // })
      // nextButton.addEventListener("click", () => {
      //   console.log("afterButton")
      // })


// const generateCards = (userData) => {
//   userData.map( userData => {
  
//   createCards(userData.name.first + " " + userData.results.name.last, userData.results.picture.thumbnail, userData.results.location.city)

//   })
// } 

//Get and display 12 random users

const fetchData = async (url) => {
  const res = await fetch(url);
  return await res.json();
}

fetchData('https://randomuser.me/api/?results=12')
    .then(userData => {
      const results = userData.results
      results.forEach(user => {
        createCards(user.name.first + " " + user.name.last, user.picture.thumbnail, user.location.city)
      })
      //take in any button click of a card and gather a unique token for the specific card clicked
      //take that token and filter the results array of anything but that array
      //then take that array and develope a 
    })
// const generateCards = (userData) => {
//   userData.map( userData => {
  
//   createCards(userData.name.first + " " + userData.results.name.last, userData.results.picture.thumbnail, userData.results.location.city)

//   })
// } 

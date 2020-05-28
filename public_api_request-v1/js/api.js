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
    })

// const generateCards = (userData) => {
//   userData.map( userData => {
  
//   createCards(userData.name.first + " " + userData.results.name.last, userData.results.picture.thumbnail, userData.results.location.city)

//   })
// } 

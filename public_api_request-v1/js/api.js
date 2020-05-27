//Get and display 12 random users
  fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => createCard(data.results[0].name.first, data.results[0].picture.thumbnail, data.results[0].location.city))

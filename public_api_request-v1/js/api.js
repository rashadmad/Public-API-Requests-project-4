//testing api connection
  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => createCard(data.results[0].name.first, data.results[0].picture.thumbnail, data.results[0].location.city))

//testing api connection
  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => userData = data.results)

//Get and display 12 random users
  fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => { 
    const numOfEmployees = 12;
    let counter = 0;
    createCard(data.results[0].name.first + " " + data.results[0].name.last, data.results[0].picture.thumbnail, data.results[0].location.city)  
    //createCard(data.results[1].name.first + " " + data.results[1].name.last, data.results[1].picture.thumbnail, data.results[1].location.city)      
    })
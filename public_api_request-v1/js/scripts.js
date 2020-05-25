"use strict";
const createSearch = () => {
    // create a form and add a seach bar and submit button to it
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
}

const createCard = (name,img,location) => {
    //create a card and add a profile picture inside of it
    $('.gallery')
    .append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">')
    
    //add a container for car info with an email, name and city
    $('.gallery')
    //add the card info container
    .append('<div class="card-info-container"></div>')
    //add the name
    .append('<h3 id=' + name + 'class="card-name cap">' + name + '</h3>')
    //add email
    .append('<p class="card-text">' + name + '@awesomestartup.com</p>')
    //add location
    .append('<p class="card-text cap">' + location + '</p>')
}
createCard("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois", )
createSearch()
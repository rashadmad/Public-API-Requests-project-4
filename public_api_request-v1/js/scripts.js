"use strict";
const createSearch = () => {
    // create a form and add a seach bar and submit button to it
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
}

const createCard = (img,name) => {
    //create a card and add a profile picture inside of it
    $('.gallery').append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">')
    //$('img').attr('src',img);
}
createCard("https://randomuser.me/api/portraits/men/8.jpg","Mike Gray")
createSearch()
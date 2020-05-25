"use strict";
const createSearch = () => {
    // create a form and add a seach bar and submit button to it
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
}

createSearch()
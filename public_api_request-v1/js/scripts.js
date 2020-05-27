"use strict";
const createSearch = () => {
    // create a form and add a seach bar and submit button to it
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
}

const createCards = (name,img,local,numberOfCards) => {
    let i = 0;
    let counter = 0;

    while (counter < numberOfCards){
        counter = counter + 1;
        $('.gallery').append('<div class="card"></div>')
    }
    while (i < numberOfCards){
     //create a card and add a profile picture inside of it   
     $( ".card" ).each(function() {
        i = i + 1;
        console.log(this)
        //create a container for the image
        $( this ).append('<div class="card-img-container"></div>') 
        //add the mage to the container
        $( this ).find('.card-img-container').append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">')
        //add a container for car info with an email, name and city
        $( this ).append('<div class="card-info-container"></div>')
        // //add data to the card 
        $( this ).find('.card-info-container')
            //add name
            .append('<h3 id=' + name + 'class="card-name cap">' + name + '</h3>')
            //add the card info container
            .append('<div class="card-info-container"></div>')
            //add email
            .append('<p class="card-text">' + buisnessEmail(name) + '</p>')
            //add location
            .append('<p class="card-text cap">' + local + '</p>')
      });
    }
}

const removeModal = () => {
    $('modal-container').remove();
}

const createModal = (name,img,city,phoneNum,address,birthNum) => {

    let counter = 0

    //create a container for the modal
    $('body').append('<div class="modal-container"></div>');
    //create a modal inside of the modal container
    $('.modal-container')
        .append('<div class="modal"></div>')
    $('.modal')    
        //add close button
        .append('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>')
        //add image to modal
        .append('<img class="modal-img" src=' + img + ' alt="profile picture of ' + name + '">')
        //add image to modal
        .append('<h3 id="name" class="modal-name cap">name</h3>')
    $( "#modal-close-btn" ).click(() => {
        $(".modal-container").remove();
    })
    //the next group of items are some hwat similar sow I will use a for loop
    while (counter < 5) {
        counter = counter + 1;
        $('.modal').append('<p class="modal-text"></p>')
    }
    //add an email to the first modal text
    //add the city
    $('.modal-text:nth-child(2)').append(buisnessEmail(name));
    //add city
    $('.modal-text:nth-child(3)').append(city);
    //add a phone number
    $('.modal-text:nth-child(4)').append(phoneNum);
    //need to add an hr after the second modal-text
    $('.modal-text:nth-child(4)').after('<hr>')
    //add address
    $('.modal-text:nth-child(6)').append(address);
    //add birth
    $('.modal-text:nth-child(7)').append(birthDate(birthNum));

    //add a modal-btn-container
    $('.modal').append('<div class="modal-btn-container"></div>');
    //add two buttons in there
    $('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>');
    $('.modal-btn-container').append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
    
}

// createModal("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois", "(773)320-5797", "123 Portland Ave., Portland, OR 97204", "10/21/2015")
// createCard("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois")
// createSearch()
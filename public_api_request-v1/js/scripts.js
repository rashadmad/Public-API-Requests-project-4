"use strict";

// create a search bar form
const createSearch = () => {
    //create the skeleton 
    $('.search-container').append('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
    $('.search-container').append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');
    //TODO: implement search functionality 
}
//function for creating cards that takes in different user data as parameters - the index of the user - the name of the user - an image of the user - and the location
const createCards = (index,name,img,local) => {
     //create the skeleton of the card
     $('.gallery').append('<div class="card" id="newCard"></div>')
     //I have added an id but plan on removing it as it would end up not being unique 
     $( "#newCard" )
        //create a container for an image
        .append('<div class="card-img-container"></div>') 
        //add the image in to the container
        .find('.card-img-container').append('<img class="card-img" src=' + img + ' alt="profile picture of ' + name + '">');
     $( "#newCard" )   
        //add a container for the card meta data: an email, name and city
        .append('<div class="card-info-container"></div>')
        //add data to the card 
        .find('.card-info-container')
            //Name
            .append('<h3 class="card-name">' + name + '</h3>')
            //add the card info container
            .append('<div class="card-info-container"></div>')
            //add email
            .append('<p class="card-text">' + businessEmail(name) + '</p>')
            //add location
<<<<<<< HEAD
            .append('<p class="card-text cap">' + local + '</p>');
     $( "#newCard" )   
            //add a button to activate a modal
            .append('<div id=' + uniqueName(name) + ' class="button-container><a href="#0" class="learn-more" onclick="onClickOfCard()">Learn More</a></div>');
    $('.card#newCard').removeAttr('id');
=======
            .append('<p class="card-text">' + local + '</p>')
     $('.card#newCard').attr('id', index);
>>>>>>> interactivity
}
//create a modal that takes in user data as parameters
const createModal = (userData,index,name,img,city,phoneNum,address,birthNum) => {
    //this counter
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
        .append('<h3 class="modal-name">' + name + '</h3>')
    $( "#modal-close-btn" ).click(() => {
        $(".modal-container").remove();
    })
    //the next group of items are some what similar so I will use a for loop to generate multiples
    while (counter < 5) {
        counter = counter + 1;
        $('.modal').append('<p class="modal-text"></p>')
    }
    //$('.modal .modal-text:nth-child(5)')
    //add an email to the first modal text
    //add the city
    $('.modal .modal-text:nth-child(4)').append(businessEmail(name));
    //add city
    $('.modal .modal-text:nth-child(5)').append(city);
    // //need to add an hr after the second modal-text
    $('.modal .modal-text:nth-child(5)').after('<hr>')
    //add a phone number
    $('.modal .modal-text:nth-child(7)').append(phoneNum);
    //add address
    $('.modal .modal-text:nth-child(8)').append(address);
    //add birth
    $('.modal .modal-text:nth-child(9)').append(birthDayFormatting(birthNum));
    //add a modal-btn-container
    $('.modal').append('<div class="modal-btn-container"></div>');
    //add two buttons in there
    $('.modal-btn-container').append('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>');
    $('.modal-btn-container').append('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
    const prevButton = document.querySelector('#modal-prev');
    const nextButton = document.querySelector('#modal-next');
    prevButton.addEventListener("click", updateModal(userData,index,false))
    nextButton.addEventListener("click", updateModal(userData,index,true))
}
//create a function to update the modal 
const updateModal = (arrayOfObjs,specificUser,foward) => {
    let selectedUser = 0;

    if(foward){
        selectedUser = selectedUser + 1;
    } else {
       if(selectedUser <= 0){
        selectedUser = 12
       } else {
        selectedUser = selectedUser - 1;
       }
    }
    //empty out the modal
    emptyModal()
    console.log(arrayOfObjs[specificUser])

    //now fill it back up with the selected data
    $('.modal-name').append(arrayOfObjs[specificUser].location.city);
    $('.modal-img').attr('src', arrayOfObjs[specificUser].picture.thumbnail);
    $('.modal .modal-text:nth-child(4)').append(businessEmail(arrayOfObjs[specificUser].name.first + " " + arrayOfObjs[specificUser].name.last))
    $('.modal .modal-text:nth-child(5)').append(arrayOfObjs[specificUser].location.city);
    $('.modal .modal-text:nth-child(7)').append(arrayOfObjs[specificUser].cell);
    $('.modal .modal-text:nth-child(8)').append(arrayOfObjs[specificUser].location.street.number + " " + arrayOfObjs[specificUser].location.street.name + ", " + arrayOfObjs[specificUser].location.postcode);
    $('.modal .modal-text:nth-child(9)').append(birthDayFormatting(arrayOfObjs[specificUser].dob.date));
}



// createModal("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois", "(773)320-5797", "123 Portland Ave., Portland, OR 97204", "10/21/2015")
// createCard("Mike Gray","https://randomuser.me/api/portraits/men/19.jpg", "Chicago, Illinois")
// createSearch()
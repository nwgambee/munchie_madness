//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

var formMain = document.querySelector('.main')
formMain.addEventListener('click', mainEventHandler);
function mainEventHandler(event) {
    var snackName = document.querySelector('.snack-name');
    var snackDesc = document.querySelector('#snack-desc');
    if (event.target.className === 'add-snack') {
        addNewCard(snackName, snackDesc);
        event.preventDefault();
    }
    if (event.target.className === 'delete') {
        event.target.parentNode.remove();
    }
    if (event.target.className === 'card-snack-name') {

    }
  };

function addNewCard(snackNameParam, snackDescParam) {
    var groceryList = document.querySelector('.grocery-list');
    var newCard = document.createElement('DIV');
    newCard.innerHTML = `<ul><li class='card-snack-name'> <input class="card-input" type="text" placeholder="${snackNameParam.value}"><input class="card-input" type="text" placeholder="${snackDescParam.value}"></li></ul><button class="delete">Delete Snack</button>`;
    groceryList.appendChild(newCard);
}

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card

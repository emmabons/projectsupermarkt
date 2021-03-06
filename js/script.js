// WAT ER MOET GEBEUREN STAP VOOR STAP
// Je voert iets in in het input veld

// 1: Deze input moet ergens opgehaald (en opgeslagen) worden

// 2: De eerste keer moet er een h2 worden aangemaakt met de tekst: 'Op je lijstje'. Deze misschien al in html zetten en zichtbaar maken bij button click?

// 3: Iedere button click moet er een p aangemaakt worden met dezelfde class. Later dit evt veranderen in een div waar een p en een a>img (deleteknop) in zitten. Eerst maar even kijken of dit lukt.

// 4: In die p moet de opgeslagen tekst van het input field komen.


// 1: Deze input moet ergens opgehaald (en opgeslagen) worden
// - Functie om de inputvalue op te halen
// - Eventlistener om dit te doen met een klik

var addInputButton = document.querySelector('.add_input');

// function getInputValue () {
//     var inputValue = document.querySelector('input').value;
//     console.log(inputValue);
// }

// addInputButton.addEventListener("click", getInputValue);

// 2: De eerste keer moet er een h2 worden aangemaakt met de tekst: 'Op je lijstje'. Deze misschien al in html zetten en zichtbaar maken bij button click?

// addInputButton.disabled = true;

function checkValue() {
    var input = document.querySelector('input');
    if (input.value == '') {
        addInputButton.disabled = true;
    } else {
        addInputButton.disabled = false;
    }
}

// Deze functie werkt niet?

addInputButton.addEventListener("click", checkValue);

function removeEmptyState() {
    var emptyState = document.querySelector(".empty_state_p");

    var inputValue = document.querySelector('input').value;

    if (inputValue) {

    emptyState.setAttribute("class", "invisible");
    }
}

addInputButton.addEventListener("click", removeEmptyState);


// 3: Iedere button click moet er een p aangemaakt worden met dezelfde class. Later dit evt veranderen in een div waar een p en een button>img (deleteknop) in zitten. Eerst maar even kijken of dit lukt.

// 4: In die p moet de opgeslagen tekst van het input field komen.

// var van de div waar de nieuwe lijst in terecht moet komen.

var listDiv = document.querySelector('.list_div');

function makeList() {
    // input Value Button
    var inputValue = document.querySelector('input').value;

    if (inputValue) {

        // Create new div for p and button>img
        var listItemDiv = document.createElement("ul");
        listItemDiv.setAttribute("class", "list_item_div");
        listDiv.appendChild(listItemDiv);

        var newListP = document.createElement("li");
        newListP.textContent = inputValue;
        newListP.setAttribute("class", "list_item_p");
        listItemDiv.appendChild(newListP);

        var newListDelete = document.createElement("button");
        newListDelete.setAttribute("class", "list_item_delete");
        listItemDiv.appendChild(newListDelete);

        var newListBin = document.createElement("img");
        newListBin.setAttribute("class", "list_item_bin");
        newListBin.setAttribute("src", "./images/bin.svg");
        newListBin.setAttribute("alt", "Prullenbak");
        newListDelete.appendChild(newListBin);

        newListBin.addEventListener("click", () => deleteListItem(listItemDiv));

    }
}

addInputButton.addEventListener("click", makeList);

// 5: Het input field moet weer worden geleegd.

function removeInput() {
    var input = document.querySelector('input');
    input.value = '';
}

addInputButton.addEventListener("click", removeInput);

// 6: Klikken op deleteknop moet de hele newList verwijderen (remove parent?)

// var listDelete = document.querySelector(".list_item_delete");

// function deleteListItem (button) {
//     var parent = button.parentNode;
//     var grandFather = parent.parentNode;
//     grandFather.removeChild(parent);
// }

// listDelete.addEventListener("click", deleteListItem);

// listDelete.addEventListener("click", ??);

// var elements = document.getElementsByClassName("list_item_delete");

// function deleteListItem (button) {
//     document.body.removeChild(this.parentNode);
// }

// for (var i=0; i < elements.length; i++) {
//     elements[i].addEventListener("click", deleteListItem, false);
// }

function deleteListItem(el) {
    el.remove();
}
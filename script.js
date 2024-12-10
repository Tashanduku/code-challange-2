// get shopping list from a local storage
let todo = JSON.parse(localStorage.getItem("shoppinglist")) || [];
const listInput = document.getElementById("listInput"); //fetching the input field
const shopList = document.getElementById("shop-List"); //list section
const addButton = document.querySelector(".btn"); // add button
const deleteButton = document.getElementById("deleteButton"); //delete button
const todoCount = document.getElementById("todoCount"); //counter section

//starting function
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addItem());//add buton
   
    //if enter is pressed in the input part, add item 
    listInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault() //don't refresh the page, 
            addItem();
        }
    })
    // when delete is pressed, delete all items
    deleteButton.addEventListener("click", deleteAllItems)
    
    displayItems() // to show all items on the list
  
});


//rem
function addItem () {

}

function deleteAllItems () {

}
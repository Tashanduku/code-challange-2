// get shopping list from a local storage
let todo = JSON.parse(localStorage.getItem("shoppinglist")) || [];
const listInput = document.getElementById("listInput"); //fetching the input field
const shopList = document.getElementById("shop-List"); //list section
const addButton = document.querySelector(".btn"); // add button
const deleteButton = document.getElementById("deleteButton"); //delete button
const todoCount = document.getElementById("todoCount"); //counter section

//listener for the add button
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addItem);
})


//rem
function addItem () {

}
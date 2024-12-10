// get shopping list from a local storage
let shoppingList = JSON.parse(localStorage.getItem("shoppinglist")) || [];
const listInput = document.getElementById("listInput"); //fetching the input field
const shopList = document.getElementById("shop-list"); //list section
const addButton = document.querySelector(".btn"); // add button
const deleteButton = document.getElementById("deleteButton"); //delete button
const listCount = document.getElementById("listCount"); //counter section

//starting function
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addItem);//add buton
   
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


//creates a new task in the input box and if the new item is not
//equal to an empty string then pushes it
function addItem () {
const newItem = listInput.value;
    if (newItem!== "") {
        shoppingList.push({
           text: newItem, disabled: false, //if a new item is added and not disabled 
        });
        saveToLocalStorage();
        listInput.value=""; //clears the list once it is entered
        displayItems()
    }
}

function deleteAllItems () {

}


//displaying tasks once entered

function displayItems() {
    shopList.innerHTML = ""; // Clear current list display
    shoppingList.forEach((item, index) => {
      const listItem = document.createElement("li");
      

 // Create a checkbox for marking the item as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed; // Reflect the item's completion status
    checkbox.addEventListener("change", function () {
      toggleCompletion(index);
    });

    const itemText = document.createElement("span");
    itemText.textContent = item.text;
    if (item.completed) {
      itemText.style.textDecoration = "line-through"; // Strike-through for completed items
    }
  
      // Add a delete button for individual items
      const deleteItemButton = document.createElement("button");
      deleteItemButton.textContent = "X";
      deleteItemButton.classList.add("delete-item");
      deleteItemButton.addEventListener("click", function () {
        deleteItem(index);
      });
  
    listItem.appendChild(checkbox); // Add checkbox to the list item
    listItem.appendChild(itemText); // Add the item text
    listItem.appendChild(deleteItemButton); // Add the delete button
    shopList.appendChild(listItem);
  });
  
    // Update item count
    listCount.textContent = shoppingList.length;
  }

  // Toggles the completion status of an item
  function toggleCompletion(index) {
    shoppingList[index].completed = !shoppingList[index].completed; // Toggle completion status
    saveToLocalStorage();
    displayItems();
  }


  // Deletes a specific item by index
  function deleteItem(index) {
    shoppingList.splice(index, 1); // Remove the item from the list
    saveToLocalStorage();
    displayItems();
  }
  
  // Deletes all items from the shopping list
  function deleteAllItems() {
    shoppingList = [];
    saveToLocalStorage();
    displayItems();
  }
  
//saves the list to local storage
function saveToLocalStorage() {
    localStorage.setItem("shoppinglist", JSON.stringify(shoppingList));
  }

document.getElementById("list");
const shoppingList = ["Pane", "Latte", "Uova", "Caffè", "Pasta"];
const listContainer = document.getElementById("list");
const lastItem = shoppingList[shoppingList.length - 0];

let done = false;
let i = 0;

while (done != true) {
    console.log(shoppingList[i]);
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
    i++;
    
    if (shoppingList[i] == lastItem) {
        done = true;
    }
}


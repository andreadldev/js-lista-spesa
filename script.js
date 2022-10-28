document.getElementById("list");
const shoppingList = ["Pane", "Latte", "Uova", "Caffè", "Pasta"];
const lastItem = shoppingList[shoppingList.length - 0];

let done = false;
let i = 0;

while (done != true) {
    console.log(shoppingList[i]);
    i++;
    if (shoppingList[i] == lastItem) {
        done = true;
    }
}


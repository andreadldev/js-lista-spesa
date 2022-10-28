document.getElementById("list");
const shoppingList = ["Pane", "Latte", "Uova", "Caffè", "Pasta"];

let done = false;
let i = 0;

while (done != true) {
    console.log(shoppingList[i]);
    i++;
    if (i == 5) {
        done = true;
    }
}


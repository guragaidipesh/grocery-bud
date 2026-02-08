import { groceryItems } from "./data.js";
import { createItems } from "./item.js";
import { createForm } from "./additem.js";

let items = groceryItems;
// Edit Completed Function
export function editCompleted(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, completed: !item.completed } : item
  );
  render();
}
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
export function addItem(itemName, itemPrice) {
  const newItem = {
    name: itemName,
    price: itemPrice,
    completed: false,
    id: generateId(),
  };
  items = [...items, newItem];
  render();
  setTimeout(() => alert("Item Added Successfully!"), 0); // Alert after render
}
// Render App
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const formElement = createForm();
  app.appendChild(formElement);

  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}
render();

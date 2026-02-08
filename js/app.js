import { groceryItems } from "./data.js";
import { createItems } from "./item.js";
import { createForm } from "./additem.js";

let items = groceryItems;
let editId = null;

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
  setTimeout(() => alert("Item Added Successfully!"), 0);
}

export function updateItemName(newName, newPrice) {
  items = items.map((item) => {
    if (item.id === editId) {
      return { ...item, name: newName, price: newPrice };
    }
    return item;
  });
  editId = null;
  render();
  setTimeout(() => alert("Item Updated Successfully!"), 0);
}

export function setEditId(itemId) {
  editId = itemId;
  render();
}

export function deleteItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  render();
  setTimeout(() => alert("Item Deleted Successfully!"), 0);
}
export function toggleFavorite(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, favorite: !item.favorite } : item
  );
  render();
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const itemToEdit = items.find((item) => item.id === editId) || null;
  const formElement = createForm(editId, itemToEdit);
  app.appendChild(formElement);

  const itemsElement = createItems(items);
  app.appendChild(itemsElement);

  const input = app.querySelector(".form-input");
  if (input) input.focus();
}

render();

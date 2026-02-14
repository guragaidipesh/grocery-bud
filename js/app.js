import { groceryItems } from "./data.js";
import { createItems } from "./item.js";
import { createForm } from "./additem.js";

const STORAGE_KEY = "grocery_items";

// Load from localStorage OR fallback to data.js
let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || groceryItems;
let editId = null;

// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Toggle completed
export function editCompleted(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, completed: !item.completed } : item
  );
  saveToLocalStorage();
  render();
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Add item
export function addItem(itemName, itemPrice) {
  const price = parseFloat(itemPrice);
  const newItem = {
    id: generateId(),
    name: itemName,
    price: price,
    completed: false,
    favorite: false,
  };

  items = [...items, newItem];
  saveToLocalStorage();
  render();
  alert("Item Added Successfully!");
}

// Update item
export function updateItemName(newName, newPrice) {
  const price = parseFloat(newPrice);
  items = items.map((item) =>
    item.id === editId ? { ...item, name: newName, price: price } : item
  );

  editId = null;
  saveToLocalStorage();
  render();
  alert("Item Updated Successfully!");
}

// Set edit ID
export function setEditId(itemId) {
  editId = itemId;
  render();
}

// Toggle favorite
export function toggleFavorite(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, favorite: !item.favorite } : item
  );
  saveToLocalStorage();
  render();
}

// Delete item
export function deleteItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  saveToLocalStorage();
  render();
}

// Render app
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const itemToEdit = items.find((item) => item.id === editId) || null;

  const formElement = createForm(editId, itemToEdit);
  const itemsElement = createItems(items);

  app.appendChild(formElement);
  app.appendChild(itemsElement);
}

// Initial render
render();

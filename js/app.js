import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let items = groceryItems;
// Edit Completed Function
export function editCompleted(itemId) {
  items = items.map((item) =>
    item.id === itemId ? { ...item, completed: !item.completed } : item
  );
  render();
}

// Render App
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}

// Initialize App
render();

import { addItem } from "./app.js";

// Create Form Element
export function createForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <h2>Grocery Bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
      />
      <button type="submit" class="btn">Add Item</button>
    </div>
  `;

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("Please provide value"); // show alert if input is empty
      return;
    }

    addItem(value); // add the new item
    input.value = ""; // clear input
  });

  return form;
}

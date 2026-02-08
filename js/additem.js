import { addItem } from "./app.js";

// Create Form Element
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
        <input
          type="number"
          class="form-price"
          placeholder="e.g. 10"
        />
        <button type="submit" class="btn">Add Item</button>
      </div>
    `;

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    const input = form.querySelector(".form-input");
    const priceInput = form.querySelector(".form-price");
    const name = input.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) {
      alert("Please provide both name and price"); // show alert if input is empty
      return;
    }

    addItem(name, price); // add the new item with name and price
    input.value = ""; // clear name input
    priceInput.value = ""; // clear price input
    input.focus(); // focus back on name input
  });

  return form;
}

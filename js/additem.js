import { addItem, updateItemName } from "./app.js";

export function createForm(editId = null, itemToEdit = null) {
  const form = document.createElement("form");

  form.innerHTML = `
    <h2>Grocery Bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <input
        type="number"
        class="form-price"
        placeholder="e.g. 10"
        value="${itemToEdit ? itemToEdit.price : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "Edit Item" : "Add Item"}
      </button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.querySelector(".form-input");
    const priceInput = form.querySelector(".form-price");
    const name = input.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) {
      alert("Please provide both name and price");
      return;
    }

    if (editId) {
      updateItemName(name, price);
    } else {
      addItem(name, price);
    }

    input.value = "";
    priceInput.value = "";
    input.focus();
  });

  return form;
}

import { editCompleted, setEditId, deleteItem } from "./app.js";
import { toggleFavorite } from "./app.js";

export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single-item";

  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <div class="item-details">
      <p style="text-decoration: ${item.completed ? "line-through" : "none"}">
        ${item.name}
      </p>
      <span class="price" style="font-size: smaller; color: #c59d5f;">
        NPR. ${item.price}
      </span>
    </div>
    <button class="btn icon-btn edit-btn" type="button">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="btn icon-btn remove-btn" type="button">
      <i class="fa-regular fa-trash-can"></i>
    </button>
     <button class="btn icon-btn favorite-btn" type="button">
      <i class="${item.favorite ? "fa-solid" : "fa-regular"} fa-star"></i>
    </button>
  `;

  const checkbox = div.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => {
    editCompleted(item.id);
  });

  const editBtn = div.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    setEditId(item.id);
  });

  const deleteBtn = div.querySelector(".remove-btn");
  deleteBtn.addEventListener("click", () => {
    deleteItem(item.id);
  });
  const favoriteBtn = div.querySelector(".favorite-btn");
  favoriteBtn.addEventListener("click", () => {
    toggleFavorite(item.id);
  });

  return div;
}

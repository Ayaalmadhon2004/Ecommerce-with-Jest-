import products from '../data/data.js';

localStorage.setItem("products", JSON.stringify(products));

const productList = document.getElementById("products");
const searchText = document.getElementById("searchText");
const sortPrice = document.getElementById("sort_price");
const categorySelect = document.getElementById("categorySelect");

renderProducts(products);

function renderProducts(products) {
  productList.innerHTML = products.map(product => `
    <div class="product">
      <img src="${product.img}" alt="${product.desc}"/>
      <h3>${product.category}</h3>
      <div>
        <span class="price">${product.price} $</span>
        <i class="fa-solid fa-cart-plus" data-id="${product.id}" role="button"></i>
      </div>
    </div>
  `).join('');
}

import {filterAndRenderProducts} from '../Jest_tests/filterAndRenderProducts.js';

import { handleAddToCart} from "../Jest_tests/AddToCart.js";

searchText.addEventListener("input", filterAndRenderProducts);
categorySelect.addEventListener("change", filterAndRenderProducts);
sortPrice.addEventListener("change", filterAndRenderProducts);

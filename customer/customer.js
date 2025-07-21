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

// تصفية وترتيب
function filterAndRenderProducts() {
  let filtered = [...products];

  const searchValue = searchText.value.toLowerCase();
  if (searchValue) {
    filtered = filtered.filter(product =>
      product.category.toLowerCase().includes(searchValue) ||
      product.desc.toLowerCase().includes(searchValue)
    );
  }

  const selectedCategory = categorySelect.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  const sortValue = sortPrice.value;
  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "hight") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

productList.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-cart-plus")) {
    const productId = event.target.getAttribute("data-id");
    const product = products.find(p => p.id == productId); 
    if (product) {
      const cartItem = JSON.parse(localStorage.getItem("cart")) || [];
      const alreadyInCart = cartItem.some(item=>item.id===product.id);
      if(alreadyInCart){
        alert ( " the Product already exist in the Cart");
        return;
      }
      cartItem.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItem));
      alert("Product added to cart successfully");
    }
  }
});

searchText.addEventListener("input", filterAndRenderProducts);
categorySelect.addEventListener("change", filterAndRenderProducts);
sortPrice.addEventListener("change", filterAndRenderProducts);

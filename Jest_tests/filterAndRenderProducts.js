export function filterProducts(products, searchValue, selectedCategory, sortValue) {
  let filtered = [...products];

  if (searchValue) {
    const lower = searchValue.toLowerCase();
    filtered = filtered.filter(product =>
      product.category.toLowerCase().includes(lower) ||
      product.desc.toLowerCase().includes(lower)
    );
  }

  if (selectedCategory !== "all") {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "hight") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

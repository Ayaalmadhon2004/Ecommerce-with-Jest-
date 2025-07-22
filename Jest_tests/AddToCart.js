export function handleAddToCart(productId, products) {
  const product = products.find(p => p.id == productId);
  if (!product) return { success: false, message: "Product not found" };

  const cartItem = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyInCart = cartItem.some(item => item.id === product.id);
  if (alreadyInCart) {
    alert("The Product already exist in the Cart");
    return { success: false, message: "Already in cart" };
  }

  cartItem.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItem));
  alert("Product added to cart successfully");
  return { success: true };
}

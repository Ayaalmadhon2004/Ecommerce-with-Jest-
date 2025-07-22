import 'jest-localstorage-mock';
import { handleAddToCart } from './AddToCart'; 

describe('handleAddToCart', () => {
  const products = [
    { id: 1, desc: 'Product 1', price: 100 },
    { id: 2, desc: 'Product 2', price: 200 },
  ];

  beforeAll(() => {
    global.alert = jest.fn();
  });

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks(); 
  });

  test('adds product to cart successfully', () => {
    localStorage.setItem("cart", JSON.stringify([]));
    const result = handleAddToCart(1, products);
    expect(result.success).toBe(true);

    const cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart).toHaveLength(1);
    expect(cart[0].id).toBe(1);
    expect(alert).toHaveBeenCalledWith("Product added to cart successfully");
  });

  test('does not add product if already in cart', () => {
    localStorage.setItem("cart", JSON.stringify([products[0]]));
    const result = handleAddToCart(1, products);
    expect(result.success).toBe(false);

    const cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart).toHaveLength(1);
    expect(alert).toHaveBeenCalledWith("The Product already exist in the Cart");
  });

  test('returns error if product not found', () => {
    const result = handleAddToCart(999, products);
    expect(result.success).toBe(false);
    expect(result.message).toBe("Product not found");
  });
});

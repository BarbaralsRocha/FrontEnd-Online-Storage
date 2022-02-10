export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const address = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(address).then((response) => response.json());
}

export async function getProduct(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  return fetch(url).then((response) => response.json());
}

export async function getCategory(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  return fetch(url).then((response) => response.json());
}

export const getCartProducts = () => JSON.parse(localStorage.getItem('cart')) || [];

export function addProductToCart(product) {
  if (!localStorage.cart) {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  localStorage.setItem('cart', JSON.stringify([...getCartProducts(), product]));
}

export function deleteProductToCart(product) {
  const cart = getCartProducts();
  const indexToRemove = cart.findIndex((productFind) => productFind === product);
  cart.splice(indexToRemove, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getProductsGroupedByQuantity() {
  return getCartProducts().reduce((acc, reduceProd, _, array) => {
    if (acc.some(({ id }) => id === reduceProd.id)) return acc;

    const products = array.filter(({ id }) => id === reduceProd.id);

    const prodWithQuantity = products[0];
    prodWithQuantity.quantity = products.length;

    acc.push(prodWithQuantity);

    return acc;
  }, []);
}

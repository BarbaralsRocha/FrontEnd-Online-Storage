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

  cart.reverse();
  // findIndex - quando não encontra o elemento retorna -1
  const indexToRemove = cart.findIndex((productFind) => productFind.id === product.id);
  const fail = -1;
  if (indexToRemove === fail) return false;
  cart.splice(indexToRemove, 1);
  cart.reverse();

  localStorage.setItem('cart', JSON.stringify(cart));
  return true;
}

export function getProductsGroupedByQuantity() {
  const resul = getCartProducts().reduce((acc, reduceProd, _, array) => {
    if (acc.some(({ id }) => id === reduceProd.id)) return acc;

    const products = array.filter(({ id }) => id === reduceProd.id);

    const prodWithQuantity = products[0];
    prodWithQuantity.quantity = products.length;

    acc.push(prodWithQuantity);

    return acc;
  }, []);
  return resul;
}

export const getComents = () => JSON.parse(localStorage.getItem('avaliation')) || [];

export function addComents(coments) {
  if (!localStorage.avaliation) {
    localStorage.setItem('avaliation', JSON.stringify([]));
  }

  localStorage.setItem('avaliation', JSON.stringify([...getComents(), coments]));
}

export const getSize = () => JSON.parse(localStorage.getItem('size')) || 0;

export function addProductsSize(size) {
  localStorage.setItem('size', JSON.stringify(size));
}

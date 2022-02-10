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

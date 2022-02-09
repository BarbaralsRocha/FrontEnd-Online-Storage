export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories').then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery( categoryId, query) {
  const address = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  return fetch(address).then((response) => response.json());
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

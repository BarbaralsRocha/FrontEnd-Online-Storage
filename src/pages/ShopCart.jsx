import React from 'react';

export default class ShopCart extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    if (localStorage.cart) {
      const prod = JSON.parse(localStorage.getItem('cart'));
      this.setState({ products: prod });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          !products.length
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              products.map(({ title, thumbnail, price, id }) => (
                <div key={ id }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>
                    $
                    {price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">1</p>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

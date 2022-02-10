import React from 'react';
import { getProductsGroupedByQuantity } from '../services/api';

export default class ShopCart extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({ products: getProductsGroupedByQuantity() });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          !products.length
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              products.map(({ title, thumbnail, price, id, quantity }) => (
                <div key={ id }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>
                    $
                    {price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

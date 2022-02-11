import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsGroupedByQuantity } from '../services/api';
import * as api from '../services/api';

export default class ShopCart extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({ products: getProductsGroupedByQuantity() });
  }

   increaseQuantity = (product) => {
     api.addProductToCart(product);
     this.setState({ products: getProductsGroupedByQuantity() });
   }

   decreaseQuantity = (product, qtd = 0) => {
     api.deleteProductToCart(product);
     if (qtd === 0) while (api.deleteProductToCart(product));
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
               products.map((product) => (
                 <div key={ product.id }>
                   <button
                     type="button"
                     onClick={ () => this.decreaseQuantity(product) }
                   >
                     X
                   </button>
                   <p data-testid="shopping-cart-product-name">{product.title}</p>
                   <img src={ product.thumbnail } alt={ product.title } />
                   <p>
                     $
                     {product.price}
                   </p>
                   <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
                   <button
                     type="button"
                     data-testid="product-increase-quantity"
                     onClick={ () => this.increaseQuantity(product) }
                   >
                     +
                   </button>
                   <button
                     type="button"
                     data-testid="product-decrease-quantity"
                     onClick={ () => this.decreaseQuantity(product, 1) }
                   >
                     -
                   </button>
                 </div>
               ))
             )
         }
         <div>
           <p>$ 0,00</p>
           <Link
             to="/checkout"
             data-testid="checkout-products"
           >
             Finalizar Compra
           </Link>
         </div>
       </div>
     );
   }
}

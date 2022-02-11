import React from 'react';
import { getCartProducts, getProductsGroupedByQuantity } from '../services/api';
import * as api from '../services/api';

export default class ShopCartRevision extends React.Component {
  state = {
    products: [],
    totalPrice: '',
  }

  componentDidMount() {
    this.updateState();
  }

  increaseQuantity = (product) => {
    api.addProductToCart(product);
    this.updateState();
  }

   decreaseQuantity = (product, qtd = 0) => {
     api.deleteProductToCart(product);
     if (qtd === 0) while (api.deleteProductToCart(product));
     this.updateState();
   }

   stockProducts = (product) => {
     const listProductsCart = getProductsGroupedByQuantity();
     const findProduct = listProductsCart.find((products) => products.id === product.id);
     if (findProduct) {
       if (findProduct.quantity >= product.available_quantity) {
         return true;
       }
       return false;
     }
     return false;
   }

   updateTotalPrice() {
     return getCartProducts().reduce((acc, { price }) => (acc + +price), 0);
   }

   updateState() {
     this.setState({
       products: getProductsGroupedByQuantity(),
       totalPrice: this.updateTotalPrice().toFixed(2),
     });
   }

   render() {
     const { products, totalPrice } = this.state;
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
                     disabled={ this.stockProducts(product) }
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
           <p>
             Total R$
             {totalPrice}
           </p>
         </div>
       </div>
     );
   }
}

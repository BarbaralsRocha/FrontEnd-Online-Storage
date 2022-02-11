import React from 'react';
import { Link } from 'react-router-dom';
import {
  getProductsGroupedByQuantity,
  getCartProducts,
  deleteProductToCart,
  addProductToCart,
  addProductsSize,
} from '../services/api';

export default class ShopCart extends React.Component {
  state = {
    products: [],
    totalPrice: '',
  }

  componentDidMount() {
    this.updateState();
  }

  getSizeCart() {
    const size = getCartProducts();
    addProductsSize(size.length);
  }

  increaseQuantity = (product) => {
    addProductToCart(product);
    this.updateState();
  }

   decreaseQuantity = (product, qtd = 0) => {
     deleteProductToCart(product);
     if (qtd === 0) while (deleteProductToCart(product));
     this.updateState();
   }

   updateTotalPrice() {
     return getCartProducts().reduce((acc, { price }) => (acc + +price), 0);
   }

   updateState() {
     this.setState({
       products: getProductsGroupedByQuantity(),
       totalPrice: this.updateTotalPrice().toFixed(2),
     });
     this.getSizeCart();
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
             Preço Total R$
             {totalPrice}
           </p>
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

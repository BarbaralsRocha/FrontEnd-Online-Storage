import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import {
  getProductsGroupedByQuantity,
  getCartProducts,
  deleteProductToCart,
  addProductToCart,
  addProductsSize,
} from '../services/api';
import '../css/ShopCart.css';

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

   updateState() {
     this.setState({
       products: getProductsGroupedByQuantity(),
       totalPrice: this.updateTotalPrice().toFixed(2),
     });
     this.getSizeCart();
   }

   updateTotalPrice() {
     return getCartProducts().reduce((acc, { price }) => (acc + +price), 0);
   }

   render() {
     const { products, totalPrice } = this.state;
     return (
       <div className="shop-cart-content">
         <div>
           <Link to="/">
             <IoIosArrowBack className="back-button" />
           </Link>
         </div>
         <div className="list-cart-products">
           <div className="cart-product-titles">
             <div className="column-title">
               <span>Produtos</span>
             </div>
             <div className="column-title">
               <span>Quantidade</span>
               <span>Valor</span>
             </div>
           </div>
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
                     <p
                       data-testid="shopping-cart-product-quantity"
                     >
                       {product.quantity}
                     </p>
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
         </div>
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

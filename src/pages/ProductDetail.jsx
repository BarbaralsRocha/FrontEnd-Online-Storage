import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import {
  getProduct,
  addProductToCart,
  addComents,
  getComents,
  getSize,
  getCartProducts,
  addProductsSize,
  getProductsGroupedByQuantity } from '../services/api';
import Avaliation from './Avaliation';
import Coments from './Coments';

export default class ProductDetail extends React.Component {
  state = {
    product: {
      attributes: [],
    },
    filterComents: [],
    size: getSize(),
  }

  componentDidMount() {
    this.updateProduct();
  }

  updateProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProduct(id);
    this.setState({ product });

    this.updateFilterComents(id);
  }

  updateFilterComents = (id) => {
    const filterComents = getComents().filter((coments) => coments.idProduct === id);
    console.log('filterComents', filterComents);
    this.setState({ filterComents });
  }

  handleClick = (email, description, notas) => {
    console.log(email, description, notas);
    const { product: { id: idProduct } } = this.state;
    const avaliation = { idProduct, email, description, notas };
    addComents(avaliation);
    this.updateFilterComents(idProduct);
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

  //  nome do produto, imagem, preço e especificação técnica

  render() {
    const { product, filterComents, size } = this.state;
    const { id: idProduto, title, price, thumbnail, attributes } = product;
    console.log('id product detail', idProduto);
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        {
          product.id
          && product.shipping.free_shipping
          && <p data-testid="free-shipping">FRETE GRÁTIS</p>
        }
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          disabled={ this.stockProducts(product) }
          onClick={ () => {
            addProductToCart(product);
            addProductsSize(getCartProducts().length);
            this.setState({ size: getSize() });
          } }
        >
          Adicionar ao carrinho
        </button>
        <p data-testid="shopping-cart-size">{size}</p>
        <Link to="/cart" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
        </Link>
        <table>
          {
            attributes.map(({ name, value_name: valueName, id }) => (
              <thead key={ id }>
                <tr>
                  <th>{name}</th>
                  <th>{valueName}</th>
                </tr>
              </thead>
            ))
          }
        </table>
        <Avaliation idProduct={ idProduto } handleClick={ this.handleClick } />
        {
          product.id && <Coments id={ idProduto } filterComents={ filterComents } />
        }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

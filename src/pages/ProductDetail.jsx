import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { getProduct,
  addProductToCart,
} from '../services/api';
import Avaliation from './Avaliation';
import Coments from './Coments';

export default class ProductDetail extends React.Component {
  state = {
    product: {
      attributes: [],
    },
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProduct(id);
    this.setState({ product });
  }

  //  nome do produto, imagem, preço e especificação técnica

  render() {
    const { product } = this.state;
    const { id: idProduto, title, price, thumbnail, attributes } = product;
    console.log('id product detail', idProduto);
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addProductToCart(product) }
        >
          Adicionar ao carrinho
        </button>
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
        <Avaliation idProduct={ idProduto } />
        {
          product.id && <Coments id={ idProduto } />
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

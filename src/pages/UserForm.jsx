import React from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends React.Component {
  constructor() {
    super();
    this.UF = [
      { uf: 'AC', nome: 'Acre' },
      { uf: 'AL', nome: 'Alagoas' },
      { uf: 'AP', nome: 'Amapá' },
      { uf: 'AM', nome: 'Amazonas' },
      { uf: 'BA', nome: 'Bahia' },
      { uf: 'CE', nome: 'Ceará' },
      { uf: 'DF', nome: 'Distrito Federal' },
      { uf: 'ES', nome: 'Espirito Santo' },
      { uf: 'GO', nome: 'Goiás' },
      { uf: 'MA', nome: 'Maranhão' },
      { uf: 'MS', nome: 'Mato Grosso do Sul' },
      { uf: 'MT', nome: 'Mato Grosso' },
      { uf: 'MG', nome: 'Minas Gerais' },
      { uf: 'PA', nome: 'Pará' },
      { uf: 'PB', nome: 'Paraíba' },
      { uf: 'PR', nome: 'Paraná' },
      { uf: 'PE', nome: 'Pernambuco' },
      { uf: 'PI', nome: 'Piauí' },
      { uf: 'RJ', nome: 'Rio de Janeiro' },
      { uf: 'RN', nome: 'Rio Grande do Norte' },
      { uf: 'RS', nome: 'Rio Grande do Sul' },
      { uf: 'RO', nome: 'Rondônia' },
      { uf: 'RR', nome: 'Roraima' },
      { uf: 'SC', nome: 'Santa Catarina' },
      { uf: 'SP', nome: 'São Paulo' },
      { uf: 'SE', nome: 'Sergipe' },
      { uf: 'TO', nome: 'Tocantins' },
    ];
  }

  render() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      address,
      complement,
      number,
      city,
      state,
      handleChange,
    } = this.props;
    return (
      <div>
        <input
          type="text"
          name="name"
          className=""
          value={ name }
          placeholder="Nome completo"
          data-testid="checkout-fullname"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="cpf"
          className=""
          value={ cpf }
          placeholder="CPF"
          data-testid="checkout-email"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="email"
          className=""
          value={ email }
          placeholder="E-mail"
          data-testid="checkout-cpf"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="phone"
          className=""
          value={ phone }
          placeholder="Telefone"
          data-testid="checkout-phone"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="cep"
          className=""
          value={ cep }
          placeholder="CEP"
          data-testid="checkout-cep"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="address"
          className=""
          value={ address }
          placeholder="Endereço"
          data-testid="checkout-address"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="complement"
          className=""
          value={ complement }
          placeholder="Complemento"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="number"
          className=""
          value={ number }
          placeholder="Número"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="city"
          className=""
          value={ city }
          placeholder="Cidade"
          onChange={ handleChange }
        />
        <select
          name="state"
          className="select-state"
          value={ state }
          onChange={ handleChange }
        >
          {
            this.UF.map(({ uf, nome }) => (
              <option key={ uf } value={ uf }>
                {nome}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

UserForm.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

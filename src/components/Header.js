import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="trybe-logo-content">
          <span className="trybe">Trybe</span>
          <span className="shopping">Shopping</span>
        </div>
        <div className="header-links-content">
          <Link to="/contact">Contatos</Link>
          <Link to="/information">Informações</Link>
        </div>
      </header>
    );
  }
}

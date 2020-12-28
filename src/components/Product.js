import React from 'react';
import PropTypes from 'prop-types';

function Product({ url, name, price, quantity }) {
  return (
    <div>
      <img src={url} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <p>{quantity < 50 ? 'Few left' : 'In stock'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
  url:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name: 'no name',
  price: 0,
  quantity: 0,
};

Product.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Product;

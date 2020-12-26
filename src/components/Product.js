import React from 'react';
function Product({ url, name, price }) {
  return (
    <div>
      <img src={url} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
  url:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

export default Product;

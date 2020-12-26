import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
// import Product from './components/Product';
// const link = React.createElement('a',{href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',},'Ссылка на reactjs.org', );

// console.log(link);

// const priceIn = 10.99;
// const imageUrl =
//   'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
/**********************/
// const image = React.createElement('img', {
//   src:
//     `${imageUrl}`,
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, `Price: ${priceIn}$`);
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);
/***********************/

// const productInJSX = (
//   <div>
//         <img src={imageUrl} alt="Tacos With Lime"
//             width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {priceIn}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDom.render(productInJSX, document.querySelector('#root'))
/************************* */

// const testFragment = (<>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </>);

//   console.log(testFragment);

/******************************************** */
// function Product(props) {
//   return (
//     <div>
//       <img src={props.src} alt={props.name} width="640" />
//       <h2>{props.name}</h2>
//       <p>Price: {props.price}$</p>
//       <button type="button">Add to cart</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>Best selling products</h1>
//       <Product name="Tacos With Lime" price={priceIn} src={imageUrl} />
//       <Product
//         src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         name="Fries and Burger"
//         price={14.29}
//       />
//     </>
//   );
// }

ReactDom.render(<App />, document.querySelector('#root'));

import React from 'react';
import Product from './Product';
import Section from './Section';
import Counter from './Counter';

export default function App() {
  return (
    <>
      <h1>Welcome!!!</h1>
      <Section title="Prod 1">
        <Product
          name="Tacos With Lime"
          price={10.99}
          url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          quantity={20}
        />
      </Section>
      <Section title="Prod 2">
        <Product
          name="Fries and Burger"
          price={14.29}
          url="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          quantity={75}
        />
        <Product
          name="Tacos With Lime"
          price={10.99}
          // url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          quantity={150}
        />
      </Section>
      <Section>
        <Product></Product>
      </Section>
      <Section>
        <Counter step={3}></Counter>
      </Section>
    </>
  );
}

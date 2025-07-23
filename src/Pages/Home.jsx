import React from 'react';
import Header from '../Components/Header';
import Details from '../Components/Details';
import CardInfo from '../Components/CardInfo';
import Products from '../Components/Products';
import ProductsInfo from '../Components/ProductsInfo';

const Home = () => {
  return (
    <>
      <Header />
      <Details heading={'Explore Nature Like Never Before'} />
      <CardInfo />
      <Products />
      <ProductsInfo />
    </>
  );
};

export default Home;

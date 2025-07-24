import React from 'react'
import Cards from './Cards'
import { productCardData } from './CardData'

const ProductsInfo = () => {
  return (
        <Cards cardData={productCardData}/>
)
}

export default ProductsInfo;
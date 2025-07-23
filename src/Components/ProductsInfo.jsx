import React from 'react'
import Cards from './Cards'
import { productCardData } from './cardData'

const ProductsInfo = () => {
  return (
        <Cards cardData={productCardData}/>
)
}

export default ProductsInfo;
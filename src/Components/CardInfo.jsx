import React from 'react'
import Cards from "./Cards"
import { cardData } from './CardData'

const CardInfo = () => {
  return (
    <Cards cardData={cardData}/>
  )
}

export default CardInfo;
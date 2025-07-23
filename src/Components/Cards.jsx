import React from 'react';

const Cards = ({ cardData }) => {
  return (
    <div className='w-full flex flex-wrap justify-evenly  '>
      {cardData.map((card) => (
        <div key={card.id} className='flex flex-col items-center mb-12'>
          <img className='h-25 w-25 mb-2' src={card.image} alt={card.label} />
          <p className='text-3xl text-white font-bold'>{card.number}</p>
          <p className='text-2xl text-gray-500 font-bold'>{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

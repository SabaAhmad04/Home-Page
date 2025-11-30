import React from 'react'
import { cardData } from './data'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-[100%] flex flex-wrap items-center justify-center mb-4'>
        {cardData.map((item) => (
            <Card 
            key = {item.id} 
            image={item.image} 
            name = {item.name} 
            iconImage = {item.iconImage}
            />
            ))}
    </div>
  )
}

export default Cards
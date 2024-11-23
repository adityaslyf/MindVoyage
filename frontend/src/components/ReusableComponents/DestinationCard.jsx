import React from 'react'
import './DestinationCard.css'

const DestinationCard = ({desName, price, imgURL}) => {
  return (
    <div className='bg-[#1C1F37] min-h-[250px] w-full max-w-[280px] rounded-2xl m-2 flex flex-col card_hover_ui'>
      <img src={imgURL} className='p-2 w-full h-[200px] object-cover rounded-[1.7em]' alt={desName}/>
      <h1 className='text-[#D0D4E7] p-2 text-lg'>
        {desName}
      </h1>
    </div>
  )
}

export default DestinationCard

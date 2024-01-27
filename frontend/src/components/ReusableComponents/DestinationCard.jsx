import React from 'react'
import './DestinationCard.css'

const DestinationCard = ({desName, price, imgURL}) => {
  return (
    <div className='bg-[#1C1F37] h-[30vh] w-[14em] rounded-2xl m-2 flex flex-col card_hover_ui'>
      <img src={imgURL} className='p-2 w-[20vw] h-[25vh] rounded-[1.7em]'/>
        <h1 className='text-[#D0D4E7] p-2'>
            {desName}
        </h1>
    </div>
  )
}

export default DestinationCard

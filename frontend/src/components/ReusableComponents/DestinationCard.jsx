import React from 'react'
import './DestinationCard.css'

const DestinationCard = ({desName, price, imgURL}) => {
  return (
    <div className='bg-[#1C1F37] h-[38vh] w-[15em] rounded-2xl mx-2 flex flex-col card_hover_ui'>
      <img src={imgURL} className='p-2 w-[20vw] h-[25vh] rounded-[1.7em]'/>
        <h1 className='text-[#D0D4E7] p-2'>
            {desName}
        </h1>
        <div className='flex justify-between border-dashed border-t-2 border-t-[#2a2a2a] pricing_ui'>
            <span className='p-2 text-[#626577] pricing_ui_text'>Starting at</span>
            <span className='p-2 text-[#D0D4E7] pricing_ui_price'>{price}</span>
        </div>
    </div>
  )
}

export default DestinationCard

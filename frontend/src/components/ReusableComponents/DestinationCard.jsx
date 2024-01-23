import React from 'react'

const DestinationCard = ({desName, price, imgURL}) => {
  return (
    <div className='bg-[#1C1F37] h-[38vh] w-[15vw] rounded-2xl mx-2 flex flex-col'>
      <img src={imgURL} className='p-2 w-[20vw] h-[25vh] rounded-[1.7em]'/>
        <h1 className='text-[#D0D4E7] p-2'>
            {desName}
        </h1>
        <div className='flex justify-between border-dashed border-t-2 border-t-[#2a2a2a]'>
            <span className='p-2 text-[#626577]'>Startin at</span>
            <span className='p-2 text-[#D0D4E7]'>{price}</span>
        </div>
    </div>
  )
}

export default DestinationCard

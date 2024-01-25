import React from 'react'

const ProfileCard = ({name, imgURL, level}) => {
  return (
    <div>
      <div className="flex flex-row bg-[#1C1F37] rounded-md text-[#D0D4E7] items-left justify-left cursor-pointer mx-1 transition-all hover:shadow-lg hover:translate-y-[-2px]">
            <img
              src={imgURL}
              className="rounded-full w-[5vw] h-[5vw] p-3 m-1"
            />
            <div className="flex flex-col items-left justify-center">
              <h1 className="text-2xl font-bold text-left">{name}</h1>
              <h1 className="text-xl font-bold text-left">
                <span className="text-md font-bold text-left">Traveller &nbsp;&nbsp;</span>
                 <span className='text-sm text-[#D1F366]'>{level}</span>
              </h1>
            </div>
          </div>
    </div>
  )
}

export default ProfileCard

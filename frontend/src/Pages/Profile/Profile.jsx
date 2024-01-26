import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

const Profile = () => {
  return (
    <div className="flex flex-row bg-[#141627]">
      <div>
        <Sidebar />
      </div>
      <div className='border-white border-4 w-[80vw] m-10 rounded-lg'>
        <span className='text-[1.5em] text-[#D0D4E7] p-4'>Welcome User!</span>
        
      </div>
    </div>
  )
}

export default Profile

import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Message = () => {
  return (
    <div className='flex flex-row'>
      <div>
        <Sidebar />
      </div>
      <main className='flex flex-col bg-[#141627] w-full h-[100vh] text-center align-middle justify-center'>
        <h1 className='text-white text-[1.7em] '>
            Coming <span className='text-[#D1F366] font-semibold text-[2.4rem]'>Soon!</span>
        </h1>
        <span className='text-[#626577]'>
            Stay tuned for updates!
        </span>
      </main>
    </div>
  )
}

export default Message

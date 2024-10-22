import React from 'react'

function Banner() {
  return (
    <div className='h-[50vh] md:h-[85vh] bg-cover bg-center relative' style={{backgroundImage : `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='h-12 bg-slate-300 text-gray-100 text-xl bg-opacity-15 justify-center flex items-center absolute bottom-0 w-full'>Avengers EndGame</div>
    </div>
  )
}

export default Banner

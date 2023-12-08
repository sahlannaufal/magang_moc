import React from 'react'

function Card2({name,date}) {
  return (
    <div className='space-y-1'>
        <div className='items-center overflow-visible w-[98px] h-[130px]'>
            <img src={`/asset/card_home.svg`} alt='lintang' className=''/>
        </div>
        <div>
            <p className='font-medium text-xs text-white'>{name}</p>
            <p className='font-normal text-[8px] text-white'>{date}</p>
        </div>
    </div>

  )
}

export default Card2
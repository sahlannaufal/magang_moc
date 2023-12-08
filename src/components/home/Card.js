import React from 'react'

function Card({name,framework}) {
  return (
    <div className='space-y-1'>
        <div className='items-center overflow-visible w-[98px] h-[130px]'>
            <img src={`/asset/card_home.svg`} alt='lintang' className=''/>
        </div>
        <div>
            <p className='font-semibold text-xs'>{name}</p>
        </div>
    </div>

  )
}

export default Card
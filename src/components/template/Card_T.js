import React from 'react'

function Card_T({name,framework}) {
  return (
    <div>
        <div className='items-center overflow-hidden w-80 h-[330px]'>
            <img src={`/asset/layer2.png`} alt='lintang' className=''/>
        </div>
        <div>
            <p className='font-semibold text-xl'>{name}</p>
            <p className='font-normal text-base'>{framework}</p>
        </div>
    </div>

  )
}

export default Card_T
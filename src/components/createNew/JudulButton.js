import React from 'react'

function JudulButton({name}) {
  return (
    <>
        <div>
            <img src={`asset/${name}_icon.svg`} alt={`${name}`} className='h-[24px]' />
        </div>
        <div>
                <p className='text-base font-semibold text-primary'>{name}</p>
        </div>
    </>
  )
}

export default JudulButton
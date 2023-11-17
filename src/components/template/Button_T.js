import React from 'react'
import { Button } from 'flowbite-react';
import Image from 'next/image';
function Button_T({name}) {
  return (
    <div>
      <Button className='bg-gray-800 rounded-full w-16 h-16' >
      <Image src={`/asset/${name}.png`} width={500} height={500} alt={`${name}`}/>
      </Button>
    </div>
  )
}

export default Button_T
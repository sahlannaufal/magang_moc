import React from 'react'
import { Button } from 'flowbite-react';
import Image from 'next/image';
function Button_T({name}) {
  return (
  <Button className='bg-gray-800 rounded-full w-16 h-16' >
  <Image src={`/asset/${name}.png`} width={500} height={500} alt={`${name}`}/>
  </Button>
  )
}

export default Button_T
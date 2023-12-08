import { Button } from 'flowbite-react'
import React from 'react'

function ButtonUploadFoto() {
  return (
    <div>
        <Button className='h-8 w-40 bg-white border-gray-700 text-primary font-medium text-xs' >
                  <img  src='/asset/upload_foto.svg' className='pr-2'/>
                  Upload photo</Button>
    </div>
  )
}

export default ButtonUploadFoto
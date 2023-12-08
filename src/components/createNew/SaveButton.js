import { Button } from 'flowbite-react'
import React from 'react'

function SaveButton() {
  return (
        <div className='flex justify-end'>
            <Button className='h-8 bg-primary text-white font-semibold text-base my-4' >Save</Button>
        </div>
  )
}

export default SaveButton
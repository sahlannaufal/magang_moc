import { Button } from 'flowbite-react'
import React from 'react'
import ButtonUploadFoto from '../ButtonUploadFoto'

function FieldUploadFoto() {
  return (
            <div>
              <div class="flex flex-col py-2">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Self Portrait
                    <p className='text-[8px] font-normal'>*make sure your face shown clearly</p>
                </label>
                <ButtonUploadFoto />
              </div>
            </div>
  )
}

export default FieldUploadFoto
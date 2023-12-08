import React from 'react'
import InputName from '../InputName'
import SaveButton from '../SaveButton'
import ButtonUploadFoto from '../ButtonUploadFoto'
import SaveThisWorkButton from '../SaveThisWorkButton'
import Work from './Work'

function IsiFormLatestWork() {
  return (
    <div className='px-4 rounded-b-[20px] shadow-xl'>
        <div class="flex flex-col py-2">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Insert numbers of work you have done
                </label>
                <div className='flex'>
                    <div className='h-5 w-5 border rounded-full flex items-center justify-center mr-2'>
                    <img src="asset/minus_icon.svg" alt="Biography Icon" className='w-[12px] h-[12px] ' />
                    </div>
                    <p className='text-base font-semibold'>1</p>
                    <div className='h-5 w-5 border rounded-full flex items-center justify-center ml-2'>
                    <img src="asset/plus_icon.svg" alt="Biography Icon" className='w-[12px] h-[12px] ' />
                    </div>
                </div>
        </div>
        <Work name='Work1' />
        <SaveButton />
    </div>
  )
}

export default IsiFormLatestWork
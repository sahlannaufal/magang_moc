import React from 'react'
import Input from '../Input'

function IsiFormSkill() {
  return (
    <div className='px-4 rounded-b-[20px] shadow-xl'>
        <div class="flex flex-col py-2">
                <div>
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Add new skill
                    </label>
                    <Input placeholder='Insert your skills here...'/>
                </div>
                <div className='py-2'>
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Preview
                    </label>
                </div>
        </div>
    </div>
  )
}

export default IsiFormSkill
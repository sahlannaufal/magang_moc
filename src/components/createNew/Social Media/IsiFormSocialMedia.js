import React from 'react'
import InputName from '../InputName'
import SaveButton from '../SaveButton'
import Input from '../Input'

function IsiFormSocialMedia() {
  return (
    <div className='px-4 rounded-b-[20px] shadow-xl'>
        <div class="flex flex-col py-2">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Add new social media link
                    <p className='text-[8px] font-normal'>*you can only add 4 social media</p>
                </label>
        </div>
        <Input placeholder='Type your social media platform...' />
        <form >
            <InputName name="Instagram" placeholder="ex: @lintang Lazuardi"/>
            <InputName name="Linkedin" placeholder="ex: id.linkedin.com/in/lintech.id"/>
            <SaveButton />
        </form>
    </div>
  )
}

export default IsiFormSocialMedia
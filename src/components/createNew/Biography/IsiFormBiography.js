import React from 'react'
import InputName from '../InputName'
import { Button } from 'flowbite-react'
import FieldUploadFoto from './FieldUploadFoto'
import SaveButton from '../SaveButton'

function IsiFormBiography() {
  return (
    <div className='px-4 rounded-b-[20px] shadow-xl'>
        <form >
            <InputName name="Name" placeholder="ex:Lintang Lazuardi"/>
            <InputName name="Field of Expertise" placeholder="ex:Visual Designer"/>
            <FieldUploadFoto />
            <SaveButton />
        </form>
    </div>
  )
}

export default IsiFormBiography
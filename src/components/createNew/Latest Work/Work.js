import React from 'react'
import InputName from '../InputName'
import ButtonUploadFoto from '../ButtonUploadFoto'
import SaveThisWorkButton from '../SaveThisWorkButton'

function Work({name}) {
  return (
    <div>
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Work 1
        </label>
        <form className='px-2 '>
            <InputName name="Tittle" placeholder="ex: Redesign Money Application"/>
            <InputName name="Related Framework" placeholder="ex: Next.Js"/>
            
            <div className='mt-4'>
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Thumbnail
                </label>
                <ButtonUploadFoto />
            </div>
            <SaveThisWorkButton />
        </form>
</div>
  )
}

export default Work
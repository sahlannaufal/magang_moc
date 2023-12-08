import React from 'react'

function InputName({name, placeholder}) {
  return (
    <div class="flex flex-col border-b border-teal-500 py-2">
            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                {name}
            </label>
                <input class="appearance-none bg-transparent border-none w-full italic text-xs text-gray-700 mr-3 py-0 px-2 leading-tight border-none focus:outline-none focus:placeholder-opacity-0 placeholder-gray-400" type="text" placeholder={placeholder} aria-label="Full name" />
    </div>
  )
}

export default InputName
import React from 'react'

function Input({placeholder}) {
  return (
    <div class="flex flex-col border rounded-2xl border-gray-300 py-2">
        <input class="appearance-none bg-transparent border-none w-full italic text-xs text-gray-700 mr-3 py-0 px-2 leading-tight border-none focus:outline-none focus:placeholder-opacity-0 placeholder-gray-400" type="text" placeholder={placeholder} aria-label="Full name" />
    </div>
  )
}

export default Input
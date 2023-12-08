import React, { useState } from 'react'
import InputName from './InputName'
import IsiFormBiography from './Biography/IsiFormBiography'
import JudulButton from './JudulButton'

function ButtonCreateNew({name, onClick}) {
  
  const [iconSrc, setIconSrc] = useState('asset/plus_icon.svg');
  
  const handleButtonClick = () => {
    // Mengubah sumber gambar sesuai kondisi
    if (iconSrc === 'asset/plus_icon.svg') {
      setIconSrc('asset/minus_icon.svg');
    } else {
      setIconSrc('asset/plus_icon.svg');
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
        <div onClick={handleButtonClick} className='flex space-x mx-auto h-16 justify-between items-center px-4 rounded-[20px] shadow-xl'>
            <div className='flex space-x-4'>
                <JudulButton name={name}/>
            </div>
            <div>
                <img src={iconSrc} alt="Icon" className='h-[16px] w-[16px]' />
            </div>
        </div>
    </>
  )
}

export default ButtonCreateNew
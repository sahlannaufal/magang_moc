import React from 'react'
import Image from 'next/image';
import { Button } from 'flowbite-react';

function Footer() {
  return (
    <>
    <div className='bg-primary pt-8'>
        <div className='mx-8 space-y-4 pb-6 border-b-2 border-gray-500 '>
            <div className='space-y-2'>
                <img src={`asset/Portoin_logo.svg`} alt='Portoin' className='h-[30px]' />
                <p className='text-xs font-medium text-white'>Portoin merupakan website aplikasi pembuatan portofolio online otomatis dengan mudah dan cepat. Terdapat berbagai macam template portofolio yang bisa Anda gunakan secara gratis.</p>
            </div>
            <div className='flex justify-between'>
                <div className='space-y-1 w-[164px]'>
                    <p className='text-sm font-bold text-white'>Company</p>
                    <p className='text-xs font-medium text-white'>About Us<br></br>Privacy Policy<br></br>Terms & Condition<br></br>Disclaimer</p>
                </div>
                <div className='space-y-1 w-[164px]'>
                    <p className='text-sm font-bold text-white'>Service</p>
                    <p className='text-xs font-medium text-white'>Help<br></br>Contact Us</p>
                </div>
            </div>
        </div>
        <div className='mx-8 my-8'>
            <div>
                <p className='font-bold text-sm'>Follow Us</p>
            </div>
            <div className='flex justify-between items-end'>
                <div>
                    <div>
                        <Button className='rounded-full h-10 w-10 border-gray-300'>
                        <Image src={`/asset/x.svg`} width={24} height={21.69} alt="X" className=''/>
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={`asset/lintech.svg`} alt='Lintech' className='w-[80px]' />
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <p className='mx-auto text-white font-normal text-[10px]'>Lintech. &copy; 2023</p>
        </div>
    </div>

    </>
  )
}

export default Footer
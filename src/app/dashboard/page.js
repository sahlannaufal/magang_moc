"use client";
import React from 'react'
import Navbar_T from '@/components/template/Navbar_T';
import { Button } from 'flowbite-react';
import Card from '@/components/home/Card';
import Card2 from '@/components/home/Card2';

function dashboard() {
  return (
    <>
    <Navbar_T></Navbar_T>
    <div className='flex flex-col mx-auto justify-center items-center space-y-4 mb-6'>
        <div className=''>
            <p className='font-bold text-[32px] text-center'>START YOUR OWN PORTOFOLIO HERE!</p>
        </div>
        <div className='w-[340px]'>
            <p className='font-medium text-base text-center'>Lorem ipsum dolor sit amet consectetur. Ultrices cursus maecenas metus nunc massa mauris.</p>
        </div>
        <div>
        <button type="button" class="w-[320px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create New Portofolio</button>
        </div>
    </div>
    <div className='space-y-4 pb-4'>
        <div className='mx-8'>
            <p className='font-semibold'>Template Gallery</p>
        </div>
        <div className='flex overflow-x-auto gap-x-4 mx-8 max-w-full'>
                <Card name={'Sans'}/>
                <Card name={'Red Quartz'}/>
                <Card name={'Green Martin'}/>
                <Card name={'Sans'}/>
            </div>
    </div>
    <div className='py-4 space-y-4 bg-[#00384F]'>
        <div className='mx-8 flex justify-between items-center'>
            <div>
                <p className='font-semibold text-white'>Recent Work</p>
            </div>
            <div>
                <p className='text-xs text-white'>See all</p>
            </div>
        </div>
        <div className='flex overflow-x-auto gap-x-4 mx-8 max-w-full'>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
                <Card2 name={'Red Quartz'}date={'21 Oktober 2023'}/>
                <Card2 name={'Green Martin'} date={'21 Oktober 2023'}/>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
        </div>
    </div>
    </>
  )
}

export default dashboard
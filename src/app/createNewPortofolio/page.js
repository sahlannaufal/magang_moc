'use client'
import Card from '@/components/home/Card'
import Navbar_T from '@/components/template/Navbar_T'
import React from 'react'

function createNewPortofolio() {
  return (
    <>
    <Navbar_T />
    <div className='space-y-4 pt-4'>
      <div className=''>
            <div className='py-4'>
                <p className='font-bold text-[32px] text-center'>It's your first step!</p>
            </div>
            <div className='mx-8 flex justify-between items-center'>
                <div>
                <p className='text-sm font-semibold'>Template Gallery</p>
                </div>
                <div>
                <img src="asset/search_icon_black.svg" alt="Search Icon" className='h-[14px]' />
                </div>
            </div>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-4 mx-8 max-w-full'>
                <Card  className='text-white' name={'Sans'}/>
                <Card name={'Red Quartz'}/>
                <Card name={'Green Martin'} />
                <Card name={'Sans'} />
                <Card name={'Red Quartz'}/>
                <Card name={'Green Martin'} />
                <Card name={'Sans'} />
                <Card name={'Red Quartz'}/>
                <Card name={'Green Martin'} />
                <Card name={'Sans'} />
        </div>
      </div>
    </div>
    </>
  )
}

export default createNewPortofolio
'use client'
import Card2 from '@/components/home/Card2'
import Navbar_T from '@/components/template/Navbar_T'
import React from 'react'

function recentWork() {
  return (
    <>
    <Navbar_T />
    <div className='bg-primary space-y-4 py-4'>
      <div className='mx-8 flex justify-between items-center'>
            <div>
              <p className='text-white text-sm'>Recent Work</p>
            </div>
            <div>
              <img src="asset/search_icon.svg" alt="Search Icon" className='h-[14px]' />
            </div>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-4 mx-8 max-w-full'>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
                <Card2 name={'Red Quartz'}date={'21 Oktober 2023'}/>
                <Card2 name={'Green Martin'} date={'21 Oktober 2023'}/>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
                <Card2 name={'Red Quartz'}date={'21 Oktober 2023'}/>
                <Card2 name={'Green Martin'} date={'21 Oktober 2023'}/>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
                <Card2 name={'Red Quartz'}date={'21 Oktober 2023'}/>
                <Card2 name={'Green Martin'} date={'21 Oktober 2023'}/>
                <Card2 name={'Sans'} date={'21 Oktober 2023'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default recentWork
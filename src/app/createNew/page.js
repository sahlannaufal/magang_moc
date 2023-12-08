'use client'
import Navbar_T from '@/components/template/Navbar_T'
import ButtonCreateNew from '@/components/createNew/ButtonCreateNew'
import Footer from '@/components/createNew/Footer'
import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import IsiFormBiography from '@/components/createNew/Biography/IsiFormBiography'
import { Accordion } from 'flowbite-react';
import IsiFormSocialMedia from '@/components/createNew/Social Media/IsiFormSocialMedia'
import IsiFormLatestWork from '@/components/createNew/Latest Work/IsiFormLatestWork'
import IsiFormSkill from '@/components/createNew/Skill/IsiFormSkill'

function createNew() {

  // const [isFormVisible, setIsFormVisible] = useState(false);
  // const handleButtonClick = () => {
  //   setIsFormVisible(!isFormVisible);
  // };

  const [dashboardContent, setdashboardContent] = useState([false, false, false, false]);

    const showContent = (index) => {
    const updatedContent = Array(4).fill(false);
    updatedContent[index] = !dashboardContent[index];
    setdashboardContent(updatedContent);
    };
  
  return (
    <>
    <Navbar_T></Navbar_T>
    <div className='flex flex-col mx-auto justify-center items-center space-y-4 bg-primary py-6'>
        <div className=''>
            <p className='font-bold text-[32px] text-center text-white'>Start Your<br></br>Portofolio Here!</p>
        </div>
        <div className='w-[340px]'>
            <p className='font-medium text-base text-center text-white'>your portofolio is within your grasp</p>
        </div>
    </div>
    <div className='space-y-6  my-6  mx-8'>
        <div>
            <ButtonCreateNew name="Biography" onClick={() => showContent(1)}/>
            {dashboardContent[1] && <IsiFormBiography />}
        </div>
        <div>
          <ButtonCreateNew name="Social Media" onClick={() => showContent(2)}/>
          {dashboardContent[2] && <IsiFormSocialMedia />}
        </div>
        <div>
          <ButtonCreateNew name="Latest Work" onClick={() => showContent(3)}/>
          {dashboardContent[3] && <IsiFormLatestWork />}
        </div>
        <div>
          <ButtonCreateNew name="Skill" onClick={() => showContent(4)}/>
          {dashboardContent[4] && <IsiFormSkill />}
        </div>
        <div className='space-y-4'>
            <div>
                <p className='font-semibold text-sm'>Select project mode:</p>
            </div>
            <div className='flex space-x-4'>
                <Button className='bg-primary text-white' >Draft</Button>
                <Button className='bg-white text-primary border-gray-300' >Publish</Button>
            </div>
        </div>
        <div className=' flex space-y-4 justify-end'>
            <div className='flex space-x-4 items-center'>
                <p className='font-semibold text-base text-primary'>Preview</p>
                <Button className='bg-primary text-white font-semibold text-base' >Generate</Button>
            </div>
        </div>
    </div>
    <Footer></Footer>
    
    </>
  )
}

export default createNew
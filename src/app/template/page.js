'use client';
import React from 'react'
import Navbar_T from '@/components/template/Navbar_T';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Button_T from '@/components/template/Button_T';
import Card_T from '@/components/template/Card_T';
import Button_skill from '@/components/template/Button_skill';

function page() {
  return <>
  <div className='w-[1056px] mx-auto'>
    <Navbar_T />
    <div className='w-[1056px] mx-auto pt-10 flex md:flex-row flex-col justify-center items-center md:gap-x-[280px]'>
        <div className='flex flex-col grip gap-y-12 justify-center'>
            <div className='flex flex-col grip gap-y-6'>
                <div>
                    <p className='text-xl font-semibold'>Lintang Lazuardi | Big Boss </p>
                </div>
                <div>
                    <p className='text-6xl font-semibold'>Visual Designer</p>
                </div>
                <div>
                    <p className='text-base font-normal'>Seorang Programmer dan Founder LinTech.com <br/> Saya terbiasa membuat anak</p>
                </div>
            </div>
            <div className='flex flex-row gap-6'>
                <Button_T name="wa"/>
                <Button_T name="linkedin"/>
                <Button_T name="instagram"/>
            </div>
        </div>
        <div>
        <Image src={`/asset/lintang.png`} width={316} height={360} alt='lintang' className='rounded-3xl'/>
        </div>
    </div>
    <div className='w-[1056px] mx-auto'>
        <div className='mx-auto pt-24'>
        <p className='text-4xl font-semibold text-center'>Lates Work</p>
        </div>
        <div className='flex flex-col items-center py-12'>
            <div>
            <div>
                <p className='font-semibold text-4xl'>Website Judi Online</p>
                <p className='font-semibold text-xl'>React</p>
            </div>
            <div className='items-center overflow-hidden w-full h-96'>
            <img src={`/asset/layer1.png`} alt='lintang' className='w-auto'/>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-3 auto-cols-max gap-12'>
            <Card_T name="To-do List" framework="React"/>
            <Card_T name="Toko Online" framework="MongoDB"/>
            <Card_T name="E-Learning" framework="NextJs"/>
        </div>
    </div>
    <div className='w-[1056px] mx-auto'>
        <div className='pt-24 pb-6'>
             <p className='text-4xl font-semibold'>Skills</p>
        </div>
        <div className='flex flex-row lg:space-x-4 sm:space-x-2 '>
            <Button_skill name="Membuat Anak"/>
            <Button_skill name="Design Thinking"/>
            <Button_skill name="Problem Solving"/>
        </div>
    </div>
    
  </div>
    </>
}

export default page
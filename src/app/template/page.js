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
  <div className='max-w-[1056px] mx-auto px-6'>
    <Navbar_T />
    <div className='w-full mx-auto pt-10 px-4 flex flex-col-reverse items-center md:flex-row md:justify-around'>
        <div className='mb-10 md:mb-0 p-4'>
            <div className='flex flex-col grip gap-y-6'>
                <div className='sm:none md:block'>
                    <p className='text-xl font-semibold'>Lintang Lazuardi | Big Boss </p>
                </div>
                <div>
                    <p className='text-6xl font-semibold'>Visual Designer</p>
                </div>
                <div>
                    <p className='text-base font-normal'>Seorang Programmer dan Founder LinTech.com <br/> Saya terbiasa membuat anak</p>
                </div>
            </div>
            <div className='flex flex-row gap-6 mt-8'>
                <Button_T name="wa"/>
                <Button_T name="linkedin"/>
                <Button_T name="instagram"/>
            </div>
        </div>
        <div className='image-template-portofolio'>
            <Image src={`https://bem.fmipa.unesa.ac.id/storage/profile/MBIgDf6se0lZ2bM6VkNVltw97OEtAESaXq6V5A73.jpg`} width={316} height={360} alt='lintang' className='object-cover rounded-3xl'/>
        </div>
        <div className='mb-5 md:hidden'>
            <p className='text-xl font-semibold'>Lintang Lazuardi | Big Boss </p>
        </div>
    </div>
    <div className='lastest-work'>
        <div className='mx-auto pt-24'>
            <p className='text-4xl font-semibold text-center'>Latest Work</p>
        </div>
        <div className='flex flex-col py-12'>
            <div className='mb-8'>
                <p className='font-semibold text-4xl'>Website Judi Online</p>
                <div className='my-4 flex'>
                    <p className='font-semibold text-stone-400 text-xl mr-2'>React</p>
                    <div> &#8226;</div>
                    <p className='font-semibold text-stone-400 text-xl ml-2'>React</p>
                </div>
            </div>
            <div className='w-full'>
                <Image src='/asset/layer1.png' alt='lintang' height={900} width={500} className='object-cover'/>
            </div>
        </div>
        <div className='flex flex-wrap justify-around'>
            <Card_T name="To-do List" framework="React"/>
            <Card_T name="Toko Online" framework="MongoDB"/>
            <Card_T name="E-Learning" framework="NextJs"/>
        </div>
    </div>

    <div className='w-full mx-auto'>
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
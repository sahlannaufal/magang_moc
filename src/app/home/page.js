"use client";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import NavbarHome_T from "@/components/template/NavbarHome_T";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import { Accordion } from 'flowbite-react';


export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  return (
    <>
  <NavbarHome_T className='' />
  <div className="bg-black h-0.5"></div>
  <div className="flex flex-col items-center p-10">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Buat Portofolio mu dengan mudah!</h2>
    <h1 className="text-s md:text-s lg:text-s mb-4 text-center">Buat dan bagikan portofolio dengan mudah berkat Portoin.</h1>
      <Button
        type="submit"
        style={{ backgroundColor: "#00384F", color: "white", width: "100%" }}
        className="hover:bg-blue-700"
      >
        Daftar Akun
      </Button>
      <div className='w-full mt-10'>
                    <Image src='/asset/homebanner.svg' alt='lintang' height={900} width={500} className='object-cover'/>
      </div>
    
  </div>
  
  <div className="flex flex-col items-center p-10 bg-[#00384F]">
    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-center text-white">Buat Portofolio mu dengan mudah!</h2>
    <h1 className="text-s md:text-s lg:text-s mb-4 text-center text-white">Buat dan bagikan portofolio dengan mudah berkat Portoin.</h1>
      <Button
        type="submit"
        style={{ backgroundColor: "#001E21", color: "white", width: "100%" }}
        className="hover:bg-blue-700"
      >
        Buat Portofolio Gratis
      </Button>
      <div className='w-full mt-10'>
                    <Image src='/asset/homebanner2.svg' alt='lintang' height={900} width={500} className='object-cover'/>
      </div>
    
  </div>

  <div className="flex flex-col items-center p-10">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Miliki website portofolio pribadi</h2>
    <h1 className="text-s md:text-s lg:text-s mb-4 text-center">Setelah membuat portofolio, bagikan portofolio online melalui link yang disediakan.</h1>
      <Button
        type="submit"
        style={{ backgroundColor: "#001E21", color: "white", width: "100%" }}
        className="hover:bg-blue-700"
      >
        Buat Portofolio Gratis
      </Button>
      <div className='w-full mt-10'>
                    <Image src='/asset/homebanner3.svg' alt='lintang' height={900} width={500} className='object-cover'/>
      </div>
    <h2 className="text-xl md:text-xl lg:text-xl font-bold mb-4 mt-7 text-center ">Pertanyaan sering ditanyakan ?</h2>
    {/* {/* <form className="flex flex-col max-w-md gap-4 w-full flex-grow">
      <div className="rounded-md">
        <TextInput id="name" type="name" placeholder="Name" required />
      </div>

      <div className="rounded-md">
        <TextInput id="email1" type="email" placeholder="Email" required />
      </div>
    </form> */}
    <Accordion>
    <Accordion.Panel className="mb-4">
        <Accordion.Title>Apakah semua template yang disediakan gratis?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel className="mb-4">
        <Accordion.Title>Berapa lama link portofolio bisa digunakan?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  </div>

  <div className="flex flex-col md:flex-row p-10 min-h-screen bg-[#00384F]">
  <h2 className="text-white text-4xl font-normal font-['Homenaje'] leading-[30px] mb-4">Portoin.</h2>
  <h1 className="text-s md:text-s lg:text-s mb-4 text-white">Portoin is an automatic easily and quickly online portfolio generator application website. There are various kinds of portfolio templates that you can use for free.</h1>

  <div className="md:flex justify-between items-start gap-2">
    {/* Company Section */}
    <div className="w-[164px] md:flex md:flex-col justify-center items-start gap-1">
      <div className="text-white text-s font-bold font-['Epilogue'] leading-tight tracking-tight">Company</div>
      <div className="text-white text-sm font-medium font-['Epilogue'] leading-normal tracking-tight">About us<br />Privacy Policy<br />Terms & Condition<br />Disclaimer</div>
    </div>

    {/* Service Section */}
    <div className="md:flex md:flex-col justify-between items-start gap-2">
      <div className="text-white text-sm font-bold font-['Epilogue'] leading-tight tracking-tight">Service</div>
      <div className="text-white text-xs font-medium font-['Epilogue'] leading-normal tracking-tight">Help<br />Contact Us</div>
    </div>
  </div>
  <div className="bg-white h-0.5 mt-4"></div>
  <h2 className="mt-8 text-white font-bold">Follow Us</h2>

  {/* Flex container for Twitter images */}
  <div className="flex mt-4">
    <div className="pr-4">
      <Image src='/asset/twitterx.svg' alt='Twitter' height={60} width={60} />
    </div>
    <div className='w-1/2'>
      <Image src='/asset/twitterx.svg' alt='Twitter' height={60} width={60} />
    </div>
  </div>

  {/* Footer */}
<footer className="mt-auto text-center text-white text-sm">
  LinTech. © 2023
</footer>
</div>


  </>
  );
}
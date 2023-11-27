import React from 'react'
import { Navbar, Container } from 'flowbite-react';
function Navbar_T() {
  return (
    <Navbar className='flex max-w-full flex-col py-6'>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portoin.</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" >About</Navbar.Link>
        <Navbar.Link href="#">Work</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_T
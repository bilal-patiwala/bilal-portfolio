import React from 'react'
'use client';
import Logo from '../../public/logo.png'
import { Navbar } from 'flowbite-react';
const Left = ({onLinkClick}) => {
    const links = ['Home', 'About', 'Projects','blogs', 'Socials'];
  return (
    <div className='top-left-container'>
        {/* <div className='left-nav'>
            <Navbar rounded className=' ml-2 mr-2'>
                <Navbar.Brand href="#Home">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#Home">
                    Home
                    </Navbar.Link>
                    <Navbar.Link href="#About">
                    About
                    </Navbar.Link>
                    <Navbar.Link href="#Projects">Projects</Navbar.Link>
                    <Navbar.Link href="Blogs">Blogs</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div> */}
            
        <div className='top-line'>
        </div>
        <div className='middle-container'>
            {/* {links.map((link, index) => (
                <a key={index} href='#'>{link}</a>
            ))} */}
            <a href='#Home'>Home</a>
            <a href='#About'>about</a>
            <a href='#Projects'>projects</a>
            <a href='#Blogs'>Blogs</a>
            <a href='#Socials'>socials</a>
        </div>
        <div className='top-line'>
        </div>
    </div>
  )
}

export default Left
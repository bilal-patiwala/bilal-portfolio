import { useState, useRef} from 'react'
import './App.css'
import './index.css'
import '../src/styles/left.css'
import '../src/styles/right.css'
import Left from './Components/Left'
import Right from './Components/Right'
'use client';
import Logo from '../public/logo.png'
import { Navbar } from 'flowbite-react';
const App = () => {
  const [selectedSection, setSelectedSection] = useState('Home');
  const selectedSectionRef = useRef()
  const handleLinkClick = (link) => {
    console.log(link);
    setSelectedSection(link);
    if (selectedSectionRef.current) {
      selectedSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='main-container'>
        <div className='left'>
          <Left onLinkClick={handleLinkClick}/>
        </div>
        <div className='left-nav shadow' id='navbar-c'>
            {/* <Navbar className='p-0 m-0' id='navbar-c'>
                <Navbar.Brand href="#Home">
                    <img src={Logo} className=" ml-3 mt-2 mr-3 mb-1 h-6 " alt="Flowbite React Logo" />
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
                    <Navbar.Link href="#Blogs">Blogs</Navbar.Link>
                    <Navbar.Link href="#">Socials</Navbar.Link>
                </Navbar.Collapse>
            </Navbar> */}
            <a href='#Home'>Home</a>
            <a href='#About'>about</a>
            <a href='#Projects'>projects</a>
            <a href='#Blogs'>Blogs</a>
            <a href='#Socials'>socials</a>
        </div>
        <div className='right'>
          <Right selectedLink={selectedSectionRef}/>
        </div>
      </div>
    </>
  )
}

export default App

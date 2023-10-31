import React from 'react'

const Left = ({onLinkClick}) => {
    const links = ['Home', 'About', 'Projects','blogs', 'Socials'];
  return (
    <div className='top-left-container'>
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
            <a>socials</a>
        </div>
        <div className='top-line'>
        </div>
    </div>
  )
}

export default Left
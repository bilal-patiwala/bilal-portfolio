import React from 'react'

const Left = ({onLinkClick}) => {
    const links = ['Home', 'About', 'Projects','blogs', 'Socials'];
  return (
    <div className='top-left-container'>
        <div className='top-line'>
        </div>
        <div className='middle-container'>
            {links.map((link, index) => (
                <p key={index} onClick={() => onLinkClick(link)}>{link}</p>
            ))}
            {/* <p>Home</p>
            <p>about</p>
            <p>projects</p>
            <p>Blogs</p>
            <p>socials</p> */}
        </div>
        <div className='top-line'>
        </div>
    </div>
  )
}

export default Left
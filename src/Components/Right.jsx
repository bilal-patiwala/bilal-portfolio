import {React, useRef, useState, useEffect} from 'react'
import Profile from '../assets/profile.jpeg'
import book from '../assets/book.png'
import '../styles/right.css'
import data from '../assets/project.json'
import blogs from "../assets/blogs.json"
import Quotes from '../assets/quotes.json'

const Right = ({selectedSectionRef}) => {

    const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const newIndex = Math.floor(Math.random() * Quotes.length);
    //   setRandomIndex(newIndex);
    // }, 24*60*60*1000); // 24 hours in milliseconds

    // // Clear the interval when the component unmounts to prevent memory leaks
    // return () => clearInterval(interval);

    const newIndex = Math.floor(Math.random() * Quotes.length);
    setRandomIndex(newIndex);
  }, []);


  return (
    <div className='container'>
        <div className='quote-header' id='Home' ref={selectedSectionRef}>
            <p className='quote'>{Quotes[randomIndex].quote}</p>
            <p className='name'> ~ {Quotes[randomIndex].author}</p>
        </div>
        <div className='name-header'>
            <img src={Profile} alt="" className='profile1'/>
            <div className='name-sub-header1'>
                <p id='intro-name1'>Hello 👋, I am Bilal Patiwala</p>
                <p>I Program and Develop Software</p>
                <p>20, He/Him</p>
            </div>
            <img src={Profile} alt="" className='profile'/>
            <div className='name-sub-header'>
                <p id='intro-name'>Hello 👋, I am Bilal Patiwala</p>
                <p>I Program and Develop Software</p>
                <p>20, He/Him</p>
            </div>
        </div>

        <div className='about-sec' id='About' ref={selectedSectionRef}>
            <p className='common-headline'>Who's This Guy?</p>
            <p className='about-me'>I am Software Engineer, Based in India. I am Most focused on Working on a Backend Development. I love contributing to Internet by Developing Secure, Reliable, and Seamless application. </p>
            <div className='skills'>
                <p className='skill-headline' >Programming Languages, Frameworks and Tools</p>
                <div className='skills-img'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python"  />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <img src="https://camo.githubusercontent.com/537f66454b766b0d56da91225206ebf6d28ecff24d84668d52cf9430e02460fd/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f646a616e676f2e737667" alt="Django" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" />
                    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="springBoot" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgresql" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySql" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDb" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Css" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" />
                    <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="Git" />
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                </div>
            </div>

        </div>

        <div className='projects'  id='Projects'>
            <p className='common-headline'>Projects</p>
            
            <div className='project-list'>
                {data.map((project, index) => (
                    <div key={index} class="max-w- p-6 bg-white border border-gray-200 rounded-lg shadow border-gray-700 project-div" >
                        <p>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{project.title}</h5>
                        </p>
                        <ul className='point-list'>
                            <li class="mb-3 font-normal text-gray-400">{project.description}</li>
                            <li class="mb-3 font-normal text-gray-400">{project['tech-stack']}</li>
                        </ul>
                        <a href={project.link} target='blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>

            

        </div>

        <div className='blogs rounded-md flex flex-col gap-4' id='Blogs'>
            <p className='common-headline'>Blogs</p>
            {blogs.map((blog, index) => (
                <div key={index} className='flex flex-row space-between gap-8 pl-1 mt-2 blog'>
                    <img src={blog.image} alt="" className='border basis-1/3 blog-img rounded-md'/>

                    <div className='basis-2/3 flex flex-col gap-2'>
                        <p className='text-[2em] leading-none font-md'>{blog.titel}</p>
                        <div className='flex flex-row gap-5'>
                            <p className='text-gray-800'>{blog.date}</p>
                            <div className='flex gap-1'>
                                <img className="w-6 h-6" src={book} alt="" />
                                <p className='text-gray-800'>{blog.time}</p>
                            </div>
                        </div>
                        <p className='text-gray-800'>{blog.overview}...</p>
                        <a href={blog.link} class="w-32 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Read more</a>
                    </div>

                </div>
            ))}
        </div>
        
        
        <div className="social" id='Socials'>
            <p className='common-headline'>Contact, Socials</p>
            <div>
                <p>Github</p>
                <a href="https://github.com/bilal-patiwala">@bilal-patiwala</a>
            </div>
            <div>
                <p>Linkedin</p> 
                <a href="https://www.linkedin.com/in/bilal-patiwala/">@bilal-patiwala</a>
            </div>
            <div>
                <p>twitter</p>
                <a href="https://twitter.com/patiwala_bilal">@patiwala_bilal</a>
            </div>
            <div>
                <p>Intstagram</p>
                <a href="https://www.instagram.com/patiwala_bilal/">@patiwala_bilal</a>
            </div>
            <div>
                <p>HashNode</p>
                <a href="https://www.instagram.com/patiwala_bilal/">@patiwala_bilal</a>
            </div>
            <div>
                <p>Gmail</p>
                <p>bilalpatiwala04@gmail.com</p>
            </div>
        </div>

    </div>
  )
}

export default Right
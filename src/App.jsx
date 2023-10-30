import { useState, useRef} from 'react'
import './App.css'
import './index.css'
import '../src/styles/left.css'
import '../src/styles/right.css'
import Left from './Components/Left'
import Right from './Components/Right'

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
        <div className='right'>
          <Right selectedLink={selectedSectionRef}/>
        </div>
      </div>
    </>
  )
}

export default App

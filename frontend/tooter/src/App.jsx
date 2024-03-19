import { useState } from 'react'
import './App.css'
import BannerBar from './BannerBar'
import Timeline from './Timeline'
import Sidebar from './Sidebar'
function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <BannerBar />
        <Timeline />
        <Sidebar />
      </div>
    </div>
  )
}

export default App

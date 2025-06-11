import { useEffect, useState } from 'react'
import './App.css'



import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { motion } from "motion/react"
import Header from './components/Header'
import Hotspots from './components/Hotspots'
import BlueMagic from './components/BlueMagic'
import Highlight from './components/Highlight'
import Contact from './components/Contact'
import About from './components/About'
import BlogPostPreview from './components/BlogPostPreview'

import UserRegistration from './components/UserRegistration'
import Login from './components/Login'
import Home from './views/Home';

function App() {
  const [count, setCount] = useState(0)
  const widths = 'min-w-[20rem] sm-w-[20rem] md:w-[48rem] xl:w-[60rem] 2xl-w-[72rem]'
  /*
  */

  return (
    <div className="w-screen h-screen bg-grey-900">

      <div className="flex flex-row flex-wrap items-center justify-center ">

        <Header />
        <Router>
          <Routes>
            <Route path='/login' element={<Login ></Login>} />
            <Route path='/home' element={<Home ></Home>} />
            <Route path='/register' element={<UserRegistration ></UserRegistration>} />
          </Routes>
        </Router>
        <div className='flex flex-col flex-wrap justify-center items-center'>
          
      
          {/* neat stuff

        <div className='w-content h-fit'>
          <a href="https://react.dev" target="_blank">
            <img src={'./images/blob-5626e1c.png'} className="logo react" alt="React logo" />
          </a>
        </div>

          <Highlight widths={widths} color={'bg-cyan-300'} link={'https://readinet.com'}/>
          <motion.div animate={{rotate: 360 }}>
          <BlueMagic widths={widths} />
          </motion.div>
          <Hotspots Width={widths} />
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} />
          <About Width={widths} />


          <Contact widths={widths}/>

          <BlogPostPreview imageSrc={'/images/rs=w_200.3.png'}
          title={"Look! A laptop"}
          previewText={'Proin eu vestibulum nunc, eget sagittis neque. Pellentesque rutrum elit ac nisi luctus, et pretium est dignissim. Mauris purus tellus, imperdiet sit amet ultrices sed, pellentesque pharetra dolor. Integer posuere est nec laoreet convallis. Cras cursus, urna id malesuada rhoncus, magna purus finibus nisl, eu porta quam metus et quam.'}
          />
          */}
        </div>

      </div>
    </div>
  )
}

export default App

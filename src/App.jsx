import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hotspots from './components/Hotspots'
import BlueMagic from './components/BlueMagic'
import Highlight from './components/Highlight'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)
  const widths = 'min-w-[20rem] sm-w-[20rem] md:w-[48rem] xl:w-[60rem] 2xl-w-[72rem]'
  return (
    <div className="w-screen h-screen bg-grey-900">

      <div className="flex flex-row flex-wrap items-center justify-center ">
        <Header />
        <div className='flex flex-col flex-wrap justify-center items-center'>
          <div className='bg-cover bg-[url(/images/bmisp.png)] w-screen h-64'>

          </div>

          {/* neat stuff

        <div className='w-content h-fit'>
          <a href="https://react.dev" target="_blank">
            <img src={'./images/blob-5626e1c.png'} className="logo react" alt="React logo" />
          </a>
        </div>
        */}
          <Highlight widths={widths} color={'bg-cyan-300'} link={'https://readinet.com'}/>
          <BlueMagic widths={widths} />
          <Hotspots Width={widths} />
          <About Width={widths} />
          <Contact widths={widths}/>
        </div>
      </div>
    </div>
  )
}

export default App

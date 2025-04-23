import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hotspots from './components/Hotspots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-black">
      <Header></Header>
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <div className='bg-cover bg-[url(/images/bmisp.png)] w-screen h-64'>
          <h1>BLUEMAGIC ISP</h1>
        </div>
        {/* neat stuff

        <div className='w-content h-fit'>
          <a href="https://react.dev" target="_blank">
            <img src={'./images/blob-5626e1c.png'} className="logo react" alt="React logo" />
          </a>
        </div>
*/}
        <div>

        </div>
          <Hotspots />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App

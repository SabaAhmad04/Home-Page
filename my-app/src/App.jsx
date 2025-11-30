import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
            <div className='bg-black w-full'>
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </div>
  )
}

export default App

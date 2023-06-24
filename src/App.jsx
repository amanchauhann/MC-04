import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DetailedPost from './Pages/DetailedPost'
import Nav from './Components/Nav'
import SideBar from './Components/SideBar'
import { Flex } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Flex>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expand/:post_id" element={<DetailedPost />} />
        </Routes>
      </Flex>

    </>
  )
}

export default App

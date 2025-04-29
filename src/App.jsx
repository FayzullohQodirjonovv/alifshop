import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import Header  from './components/header/index'
 import Navbar  from './components/navbar/index'
import Card from './components/card'
import Model from './components/model/index'
import Mobile from './components/mobile/index'
import Footer from './components/footer/index'
function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Card/>
<Model/>
<Mobile/>
<Footer/>
    </>
  )
}

export default App

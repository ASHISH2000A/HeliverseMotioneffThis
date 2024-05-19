import { useState } from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Block from './component/Block'
import Testimonial from './component/Testimonial'
import Boxes from './component/Boxes'
import WebBrowse from './component/WebBrowse'
import Card from './component/Card'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      {/* this is a testimonial for webpage */}
      <Testimonial/>
         <Block/>
         <Boxes/>
         <WebBrowse/>
         <Card/>



















      <Footer/>
    </>
  )
}

export default App

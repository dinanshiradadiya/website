import React from 'react'
import Banner from '../components/home/Banner'
import Brand from '../components/home/Brand'
import Container1 from '../components/home/Container1'
import Shopby from '../components/home/Shopby'
import Dealof from '../components/home/Dealof'
import Cate from '../components/home/Cate'
import News from '../components/home/News'
import Poster from '../components/home/Poster'
import Trandingproduct from '../components/home/Trandingproduct'
import Viewer from '../components/home/Viewer'
import Header from '../commoncomponents/Header'
import Footer from '../commoncomponents/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Container1 />
      <Shopby />
      <Cate />
      <Trandingproduct />
      <Brand />
      <Banner />
      <Dealof />
      <Viewer />
      <Poster />
      <News/>
      <Footer/>
    </div>
  )
}

export default Home

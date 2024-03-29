import Head from 'next/head'
import Image from 'next/image'
import Bottom from '../components/Bottom'
import Cta from '../components/Cta'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Help from '../components/Help'
import Hero from '../components/Hero'
import RoutePlanner from '../components/RoutePlanner'
import ShowCase from '../components/ShowCase'
import SoftwareFeatures from '../components/SoftwareFeatures'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Solve Logistics</title>
        <meta name="description" content="Customizable Route Planning Software" />
        <link rel="icon" href="/icon3.png" />
      </Head>
      <Hero/>
      <Features/>
      <Help/>
      <RoutePlanner/>
      <SoftwareFeatures/>
      <ShowCase/>
      <Cta/>
      <Bottom/>
      <Footer/>
    </div>
  )
}
//className='2xl:px-0 px-9'
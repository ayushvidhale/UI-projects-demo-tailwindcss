import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Intro from '../components/intro'
import Features from '../components/features'
import Testimonials from '../components/testimonials'
import Timeline from '../components/timeline'
import Status from '../components/status'
import Team from '../components/team'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Intro />
    <Timeline />
    <Features />
    <Team />
    <Testimonials />
    <Status/>
    <Footer />
    
    </>
  )
}

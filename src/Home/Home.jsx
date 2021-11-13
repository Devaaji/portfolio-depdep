import React from 'react'
import About from '../components/aboutme/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import TopBar from '../components/topbar/TopBar'

function Home() {
    return (
        <>
        <TopBar/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home

import React from 'react'
import About from '../components/aboutme/About'
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
        </>
    )
}

export default Home

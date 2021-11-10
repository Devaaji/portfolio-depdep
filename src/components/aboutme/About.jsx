import React, { useEffect } from 'react'
import photo from '../../images/profile.jpg'
import { AboutContainer, GambarAbout, BoxProfile, Row, TextProfile, ImgProfile, TitleText, Skills, Skill } from './about.styles'
import AOS from 'aos'


function About() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    return (
        <AboutContainer id="About">
            <Row>
                <GambarAbout data-aos="fade-right">
                    <ImgProfile src={photo} alt="" />
                </GambarAbout>
                <BoxProfile data-aos="fade-left">
                    <TitleText>
                        About Me
                    </TitleText>
                    <Skills>
                        Skill:
                        <Skill>HTML</Skill>
                        <Skill>CSS</Skill>
                        <Skill>Express.js</Skill>
                        <Skill>React</Skill>
                        <Skill>Mongodb</Skill>
                    </Skills>
                    <TextProfile>
                        I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.
                        These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.
                        Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs.
                    </TextProfile>
                </BoxProfile>
            </Row>
        </AboutContainer>
    )
}

export default About

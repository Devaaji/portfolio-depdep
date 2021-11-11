import React, { useEffect } from 'react'
import photo from '../../images/profile.jpg'
import { AboutContainer, GambarAbout, BoxProfile, Row, TextProfile, ImgProfile, TitleText, Skills, Skill } from './about.styles'
import AOS from 'aos'


function About() {
    useEffect(() => {
        AOS.init({
            duration: 2000
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error quidem corporis, dolorum nam, aliquam ea, porro expedita possimus nulla fugiat excepturi repudiandae non officiis. Aspernatur rerum ullam nemo alias sit nihil quam iure voluptates, ratione vero nam odit quae!
                    </TextProfile>
                </BoxProfile>
            </Row>
        </AboutContainer>
    )
}

export default About

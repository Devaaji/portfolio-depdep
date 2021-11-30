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
                        <Skill>Node.js</Skill>
                    </Skills>
                    <TextProfile>
                    You can be called Deva, I am 20 years old. I'm a Student Semester 5 at University of Bandar Lampung . I have a desire to be a frontend web designer and web UI designer. "Hope your day is better"
                    </TextProfile>
                </BoxProfile>
            </Row>
        </AboutContainer>
    )
}

export default About

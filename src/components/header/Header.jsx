import React from 'react'
import {
    HeaderContainer, Row, LeftHeader, NameH2, TextIntro,
    IconAkun, Ig, LinkId, FB, Github, Btn, BtnCV, BtnAbout
} from './header.styles'
import Typical from 'react-typical'
import { steps } from '../../stepon'

function Header() {
    return (
        <HeaderContainer id="Home">
            <Row>
                <LeftHeader>
                    <NameH2>
                        <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
                        <TextIntro>Front End Web Developer</TextIntro>
                    </NameH2>
                </LeftHeader>
                <Btn>
                    <BtnCV>
                        Download CV
                    </BtnCV>
                    <BtnAbout>
                        About Me
                    </BtnAbout>
                </Btn>
            </Row>
            <IconAkun>
                <Github />
                <LinkId />
                <Ig />
                <FB />
            </IconAkun>
        </HeaderContainer>
    )
}

export default Header

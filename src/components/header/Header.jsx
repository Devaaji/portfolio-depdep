import React from 'react'
import {
    HeaderContainer, Row, LeftHeader, NameH2,
    IconAkun, Ig, LinkId, FB, Github, Btn, BtnCV, BtnAbout, LinkTo
} from './header.styles'
import Typical from 'react-typical'
import { steps } from '../../stepon'

function Header() {
    return (
        <HeaderContainer id="Home">
            <Row>
                <LeftHeader>
                    <NameH2>
                       Hi, <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
                        
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
                <LinkTo href="https://github.com/Devaaji"><Github /></LinkTo>
                <LinkTo href="https://www.linkedin.com/in/deva-aji-saputra-95aa2313b/"> <LinkId /></LinkTo>
                <LinkTo href="https://www.instagram.com/devaajisaputra/?hl=en"><Ig /></LinkTo>
                <LinkTo href="https://www.facebook.com/deva.Aji.saputra.facom"><FB /></LinkTo>
            </IconAkun>
        </HeaderContainer>
    )
}

export default Header

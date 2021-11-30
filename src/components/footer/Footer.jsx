import React from 'react'
import { FooterContainer, NamaFooter,TopBack, IconTop } from './footer.styles'

function Footer() {
    return (
        <>
        <FooterContainer>
           <NamaFooter>
           © 2021 Deva Aji Saputra
           </NamaFooter>
        <TopBack to="Home" activeClass="active" spy={true} smooth={true}>
            <IconTop/>
        </TopBack>
        </FooterContainer>
        </>
    )
}

export default Footer

import React from 'react'
import {ContainerContact, TitleContact, BoxContact, CardContact, FullInputbottom, IconWA, Input, CardInput, InputTextArea, SubmitSend} from './contact.styles'

function Contact() {
    return (
        < >
        <ContainerContact id="contactme">
            <BoxContact>
                <CardContact>
        <TitleContact >
            Contact Me
        </TitleContact>
                    <CardInput>
                    <Input type="name" placeholder="Name"/>
                    <Input type="email" placeholder="Email"/>
                    <InputTextArea type="text" placeholder="Your Messagge"/>
                    <FullInputbottom>
                    <SubmitSend type="submit" value="submit">SEND</SubmitSend>
                    <IconWA/>
                    </FullInputbottom>
                    </CardInput>
                </CardContact>
            </BoxContact>
        </ContainerContact>
        </>
    )
}

export default Contact

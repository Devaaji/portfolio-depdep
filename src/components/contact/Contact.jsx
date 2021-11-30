import React from 'react'
import { ContainerContact, TitleContact, BoxContact, CardContact, FullInputbottom, IconWA, Input, CardInput, InputTextArea, SubmitSend, LinkTo } from './contact.styles'

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
                            <Input type="name" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                            <InputTextArea type="text" placeholder="Your Messagge" />
                            <FullInputbottom>
                                <LinkTo href="mailto:devaaji5@gmail.com?Subject=Kesan%20Anda">
                                <SubmitSend type="submit" value="submit">SEND</SubmitSend>
                                </LinkTo>
                                <LinkTo href="https://api.whatsapp.com/send?phone=628979111476&text=Silahkan%20Lanjut%20Ke%20Chat%20Terimakasih">
                                <IconWA/>
                                </LinkTo>
                            </FullInputbottom>
                        </CardInput>
                    </CardContact>
                </BoxContact>
            </ContainerContact>
        </>
    )
}

export default Contact

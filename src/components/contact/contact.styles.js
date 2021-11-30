import styled from "styled-components";

import { FaWhatsapp } from 'react-icons/fa'

export const ContainerContact = styled.div`
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 100%;
padding: 25px;
height: max-content;`

export const TitleContact = styled.h2`
width: 100%;
text-align: center;
padding: 15px;`

export const BoxContact = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
height: 100%;
max-width: 1200px;`

export const CardContact = styled.div`
border-radius: 10px;
border: 2px solid whitesmoke;
background-color: rgba(0,0,0,0.1);
width: 550px;
box-shadow: 5px 10px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const CardInput = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
width: 90%;
`

export const Input = styled.input`
border-radius: 6px;
background-color: rgba(0,0,0,0.1);
padding: 8px;
border: none;
outline: none;
border-bottom: 2px solid black;
margin-bottom: 20px;`

export const InputTextArea = styled.textarea`
border-radius: 6px;
background-color: rgba(0,0,0,0.1);
padding: 8px;
border: none;
outline: none;
border-bottom: 2px solid black;
margin-bottom: 20px;`

export const FullInputbottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`

export const SubmitSend = styled.div`
cursor: pointer;
width: max-content;
padding: 3px;
border-radius: 5px;
border: 2px solid black;
transition: all 0.3s ease-in-out;

&:hover {
    color: whitesmoke;
    background-color: black;
    transform: scale(1.2);
}`

export const IconWA = styled(FaWhatsapp)`
font-size: 1.5rem;
cursor: pointer;
&:hover {
    color: green;
}`

export const LinkTo = styled.a`
text-decoration: none;
color: inherit`
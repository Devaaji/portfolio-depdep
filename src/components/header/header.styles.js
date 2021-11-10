import styled from "styled-components";
import {FaInstagram} from 'react-icons/fa'
import {AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

export const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
align-items: center;
height: 85vh;

`
export const Row = styled.div`
background-color: rgba(0,0,0,0.1);
display: flex;
padding: 10px;
margin: 10px;
border-radius: 5px;
justify-content: center;
flex-direction: column;
box-shadow: 5px 10px;
z-index: 2;
`
export const LeftHeader = styled.div`
justify-content: center;
display:flex;
padding: 15px;
font-size: 1.5rem;
text-align: center;
align-items: center;
`
export const NameHeader = styled.div``

export const NameH2 = styled.div`
font-size: 1.6rem;

@media screen and (max-width: 375px) {
    font-size: 1.3rem;
}`

export const TextIntro = styled.div`
font-size: 1.6rem;

@media screen and (max-width: 375px) {
    font-size: 1.3rem;
}
`

export const IconAkun = styled.div`
margin-top: 10px;

`
export const Ig = styled(FaInstagram)`
font-size: 1.5rem;
margin-right: 10px;
transition: all 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transform: scale(1.2);
}`

export const LinkId = styled(AiFillLinkedin)`
font-size: 1.5rem;
transition: all 0.2s ease-in-out;
margin-right: 10px;
cursor: pointer;
&:hover {
    transform: scale(1.2);
}`

export const FB = styled(AiFillFacebook)`
font-size: 1.5rem;
margin-right: 10px;
transition: all 0.2s ease-in-out;
cursor: pointer;
&:hover {
    transform: scale(1.2);
}`

export const Github = styled(AiFillGithub)`
font-size: 1.5rem;
margin-right: 10px;
transition: all 0.2s ease-in-out;
cursor: pointer;
&:hover {
    transform: scale(1.2);
}`

export const Btn = styled.div`
display: flex;
padding: 5px;
justify-content: space-around;
margin: 7px;
`

export const BtnCV = styled.div`
border: 1px solid black;
transition: all 0.3s ease-in-out;
padding: 8px;
border-radius: 5px;
cursor: pointer;

&:hover {
    transform: scale(1.07);
    background-color: black;
    color: whitesmoke;
}
`

export const BtnAbout = styled.div`
border: none;
padding: 8px;
cursor: pointer;
border-radius: 5px;
background-color: black;
color: whitesmoke;

&:hover {
    background-color: grey;
}`



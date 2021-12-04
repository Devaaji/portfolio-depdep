import styled from "styled-components";

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export const Project = styled.div`
width: 100%;
height: 90%;
`
export const ProjectContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
export const NamaProject = styled.h2`
text-align: center;
margin: 30px;`

export const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
overflow: hidden;
text-align: center;

max-width: 1200px;
`
export const CardProject = styled.div`
display: flex;
position: relative;
overflow: hidden;
border-radius: 10px;
margin: 20px;
height: 250px;
width: 350px;
cursor: pointer;



@media screen and (max-width: 786px) {
    width: 90%;
}`

export const ImgCard = styled.img`
width: 100%;
border-radius: 10px;
object-fit: cover;
background-position: center;


`

export const HoverCard = styled.div`
width: 100%;
height: 100%;
opacity: 0;
bottom: 0;
position: absolute;

@media screen and (max-width: 786px) {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background: linear-gradient(0deg, rgba(0,0,0,0.7), transparent 60%) bottom;;
}

&:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    background: linear-gradient(0deg, rgba(0,0,0,0.7), transparent 50%) bottom;;
}`

export const HoverContainer = styled.div`
position: absolute;
align-items: center;
width: 100%;
padding: 10px;
display: flex;
color: whitesmoke;
bottom: 0;
`
export const CardTitle = styled.div``

export const TitleText = styled.div`
font-size: 1.3rem;`

export const Icons = styled.div`
flex: 1;
border: none;
width: 25px;
height: 25px;
display: flex;
justify-content: end;
align-items: center;

&:hover {
}`

export const IconToLink = styled(FaExternalLinkAlt)`
transition: all .2s ease-in-out;
font-size: 20px;

&:hover{
    transform: scale(1.2);
} 
`

export const Github = styled(FaGithub)`
margin-right: 15px;
font-size: 20px;
transition: all .2s ease-in-out;
&:hover{
    color: linen;
    transform: scale(1.2);
} 
`
export const LinkTo = styled.a`
text-decoration: none;
color: inherit;`
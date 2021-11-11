import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
width: 100%;
height: max-content;
background-color: black;
justify-content: center;
align-items: center;
padding: 60px 20px;`

export const Row = styled.div`
width: 1000px;
justify-content: center;
display: flex;
overflow: hidden;

@media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
}`

export const GambarAbout = styled.div`
flex: 2;
display: flex;
width: 100%;
overflow: hidden;
border-radius: 10px;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    max-height: 460px;
    background-position: bottom;
}`

export const ImgProfile = styled.img`
height: 100%;
background-position: top;
object-fit: cover;
background-repeat: no-repeat;
width: 100%;


`

export const BoxProfile = styled.div`
padding: 30px;
color: whitesmoke;
align-items: center;
flex: 2;

@media screen and (max-width: 768px) {
    padding: 10px;
}`

export const Skills = styled.div`
display: flex;
align-items: center;
margin: 10px 0px;
flex-wrap: wrap;
padding: 7px;
`

export const Skill = styled.div`
border: 2px solid whitesmoke;
margin-bottom: 3px;
border-radius: 8px;
margin-left: 6px;
padding: 4px;
cursor: pointer;

&:hover {
    background-color: whitesmoke;
    color: black;
}`


export const TitleText = styled.div`
font-size: 2rem;
padding: 10px 0;`

export const TextProfile = styled.p`

`


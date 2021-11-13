import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'
import { FaAngleDoubleUp } from 'react-icons/fa'




export const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-items: center;
position: relative;
background-color: black;
color: whitesmoke;
width: 100%;
height: 10vh;`

export const TopBack = styled(LinkS)`
position: absolute;
width:25px;
height: 25px;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 8px;
right: 20px;
border: 2px solid whitesmoke;
transition: all 0.5s ease-in-out;

&:hover {
    background-color: white;
    color: black;
    transform: scale(1.2);
}`

export const IconTop = styled(FaAngleDoubleUp)`

`

export const NamaFooter = styled.div`

`
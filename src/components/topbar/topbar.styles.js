import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.div`
display: flex;
height: 80px;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.9);
color: white;
border: none;
width: 100%;
z-index: 9;
position: fixed;
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
padding: 0 24px;
align-items: center;
width: 100%;
max-width: 1200px;
`
export const NavLogo = styled(LinkR)`
color: #fff;
justify-content: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;`

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
};

`

export const NavMenu = styled.ul`
display: flex;
list-style: none;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;

}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
padding: 0 1rem;
cursor: pointer;

&:hover {
    color: #ebf0b1;
    border-bottom: 5px solid #ebf0b1;
}

&:active {
    
    transform: scale(1.07);
}`
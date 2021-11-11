import React, { useEffect } from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './topbar.styles'
import { FaBars } from 'react-icons/fa'
import Aos from 'aos';

const TopBar = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <Nav data-aos="fade-down">
            <NavContainer>
                <NavLogo to="/">Depdep</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="Home" activeClass="active" spy={true} smooth={true}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="About" spy={true} smooth={true}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" spy={true} smooth={true}>Project</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contactus">Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default TopBar

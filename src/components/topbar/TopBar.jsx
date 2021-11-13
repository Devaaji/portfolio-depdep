import React, { useEffect, useState } from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './topbar.styles'
import { FaBars, FaTimes } from 'react-icons/fa'
import Aos from 'aos';

const TopBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const colseMenu = () => setClick(false)

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <Nav data-aos="fade-down">
            <NavContainer>
                <NavLogo to="/">Depdep</NavLogo>
                <MobileIcon onClick={handleClick}>
                    { click ? <FaTimes color="#fff" />
                    : <FaBars color="#fff" />
                    }
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks onClick={colseMenu} to="Home" activeClass="active" spy={true} smooth={true}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={colseMenu} to="About" spy={true} smooth={true}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={colseMenu} to="projects" spy={true} smooth={true}>Project</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={colseMenu} to="contactme" spy={true} smooth={true}>Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default TopBar

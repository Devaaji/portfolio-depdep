import React, { useEffect, useState } from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SelectLink } from './topbar.styles'
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
                    {click ? <FaTimes color="#fff" />
                        : <FaBars color="#fff" />
                    }
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <SelectLink>
                            <NavLinks onClick={colseMenu} to="Home" activeClass="active" spy={true} smooth={true}>Home</NavLinks>
                        </SelectLink>
                    </NavItem>
                    <NavItem>
                        <SelectLink>
                            <NavLinks onClick={colseMenu} to="About" spy={true} smooth={true}>About</NavLinks>
                        </SelectLink>
                    </NavItem>
                    <NavItem>
                        <SelectLink>
                            <NavLinks onClick={colseMenu} to="projects" spy={true} smooth={true}>Project</NavLinks>
                        </SelectLink>
                    </NavItem>
                    <NavItem>
                        <SelectLink>
                            <NavLinks onClick={colseMenu} to="contactme" spy={true} smooth={true}>Contact Me</NavLinks>
                        </SelectLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default TopBar

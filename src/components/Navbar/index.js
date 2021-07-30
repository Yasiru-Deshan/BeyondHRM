import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
         NavbarContainer, 
         NavLogo,
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
        } from './NavbarElements'; 

const Navbar = ({ toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = ()=>{
       if(window.scrollY >= 80) {
           setScrollNav(true)
       }else{
           setScrollNav(false)
       }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
              <NavbarContainer> 
                  <NavLogo to="/" onClick={toggleHome}>
                      BeyondHRM
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to='company'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                
                                    >Company</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="solutions"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Solutions</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="resources"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Resources</NavLinks>
                                      
                      </NavItem>

                      <NavItem>
                          <NavLinks to="membership"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Membership</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="contactus"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}>Contact Us</NavLinks>
                      </NavItem>
                    

                  </NavMenu>
                  

              </NavbarContainer>
             
        </Nav>
        </IconContext.Provider>
         
        </>
    );
};

export default Navbar;

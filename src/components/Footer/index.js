import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaYoutube} from 'react-icons/fa'
import {
          FooterContainer,
          FooterLink,
          FooterLinkItems,
          FooterLinksContainer,
          FooterLinksWrapper,
          FooterLinkTitle,
          FooterWrap,
          SocialIconLink,
          SocialIcons,
          SocialLogo,
          SocialMedia,
          SocialMediaWrap,
          WebsiteRights,
        
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>BeyondHRM</FooterLinkTitle>
                                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ac lacus at felis rutrum ullamcorper quis ac arcu. Donec dictum est non lacus viverra tristique. 
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet augue sit amet ipsum tincidunt rhoncus a sed risus.
                            </p>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            BeyondHRM
                        </SocialLogo>
                        <WebsiteRights>BeyondHRM © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
 
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

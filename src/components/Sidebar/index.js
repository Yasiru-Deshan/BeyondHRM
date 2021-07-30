import React from 'react'
import {
       SidebarContainer,
       Icon,
       CloseIcon,
       SideBtnWrap,
       SidebarMenu,
       SidebarRoute,
       SidebarWrapper,
       SidebarLink,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
              <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about" onClick={toggle}>
                       Company
                   </SidebarLink>
                   <SidebarLink to="discover" onClick={toggle}>
                       Solutions
                   </SidebarLink>
                   <SidebarLink to="services" onClick={toggle}>
                       Resources
                   </SidebarLink>
                   <SidebarLink to="signup" onClick={toggle}>
                       Membership
                   </SidebarLink>
                   <SidebarLink to="signup" onClick={toggle}>
                       Contact Us
                   </SidebarLink>
               </SidebarMenu>

               <SideBtnWrap>
                   <SidebarRoute to="/signin">Sign In</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

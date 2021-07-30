import React,{ useEffect} from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp
} from './ServiceElements';
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {

    useEffect(()=>{
        Aos.init({duration: 1500 });
    },[])

    return (
        <ServicesContainer id="services">
            <ServicesH1>How we can help you</ServicesH1>
            <ServicesWrapper>

                <ServicesCard data-aos="fade-right">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Premium Benifit</ServicesH2>
                    <Servicesp>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ac lacus at felis rutrum ullamcorper quis ac arcu.</Servicesp>
                </ServicesCard>

                <ServicesCard data-aos="fade-right">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Premium Benifit</ServicesH2>
                    <Servicesp>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ac lacus at felis rutrum ullamcorper quis ac arcu.</Servicesp>
                </ServicesCard>

                <ServicesCard data-aos="fade-right">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benifit</ServicesH2>
                    <Servicesp>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur ac lacus at felis rutrum ullamcorper quis ac arcu.</Servicesp>
                </ServicesCard>



            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services

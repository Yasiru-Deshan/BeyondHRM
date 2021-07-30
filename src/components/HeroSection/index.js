import React, { useState, useEffect} from 'react';
import { HeroContainer,
         HeroBg,
         ImgBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight,
         Button,
          } from './HeroElements';
import background from "../../images/image1.jpg"; 
import Aos from 'aos';
import "aos/dist/aos.css";

     

const HeroSection = () => {

    

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    useEffect(()=>{
        Aos.init({duration: 1500 });
    },[])

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <ImgBg style={{ backgroundImage: `url(${background})`}}/>
            </HeroBg>
            <HeroContent >
                <HeroH1 data-aos="fade-right">Do the Work You Love</HeroH1>
                <HeroP data-aos="fade-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  
                </HeroP>
                <HeroBtnWrapper data-aos="fade-up">
                    <Button onMouseEnter = {onHover} 
                            onMouseLeave = {onHover}>
                        Get started {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
            
        
    );
};

export default HeroSection;

import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


import { InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,
         ImgWrap,
         Img,
         Buttong
          } from './InfoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    
    useEffect(()=>{
        Aos.init({duration: 1500 });
    },[])
    
    return (

        
        
        <>
        <InfoContainer lightBg = {lightBg} id={id}>
            <InfoWrapper>
                <InfoRow data-aos="fade-up"  imgStart={imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>
                              {topLine}
                          </TopLine>

                          <Heading lightText={lightText}>
                              {headline}
                          </Heading>

                          <Subtitle darkText={darkText}>
                              {description}
                          </Subtitle>

                          <BtnWrap>
                              <Buttong>{buttonLabel}</Buttong>  
                          </BtnWrap>
                      </TextWrapper>
                    </Column1>

                    <Column2>
                       <ImgWrap>
                       <Img src={img} alt={alt}/>
                       </ImgWrap>
                    </Column2>

                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
           

            
         </>
    )
}

export default InfoSection;

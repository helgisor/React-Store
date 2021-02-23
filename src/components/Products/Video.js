import React, { useEffect, fragment } from 'react';
import styled from 'styled-components';
import videoBreak from '../../assets/videoBreak.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';

const Hero = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <VideoContainer>
        <HeroContainer
          data-aos='zoom-in'
          data-aos-delay='50'
          data-aos-duration='900'
        >
          <HeroBg>
            <VideoBg
              src={videoBreak}
              type='video/mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </HeroBg>
          <HeroContent>
            <HeroItems
              data-aos='zoom-in-up'
              data-aos-delay='200'
              data-aos-duration='1700'
            >
              <HeroHeading>Need Shoes?</HeroHeading>
              <HeroP>We got what you need</HeroP>
            </HeroItems>
          </HeroContent>
        </HeroContainer>
        <Text>
          <TextOne
            data-aos='zoom-in-up'
            data-aos-delay='50'
            data-aos-duration='1700'
          >
            Sneakers, slip-ons, clogs...
          </TextOne>
          <TextTwo
            data-aos='zoom-in-up'
            data-aos-delay='50'
            data-aos-duration='1900'
          >
            One stop store for the whole family. Newest releases, the most
            popular footwear and the best brands are just a click away.
            Guaranteed quality, fantastic support and insane discounts are what
            we're known for!
          </TextTwo>
        </Text>
      </VideoContainer>
    </>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 0 1rem;
  position: relative;
  margin-top: 8rem;
  color: #fff;

  /* @media screen and (max-width: 768px) {
    height: 60vh;
  } */

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  height: 80vh;
  margin-bottom: 4rem;
  margin-top: -7.9rem;

  @media screen and (max-width: 768px) {
    margin-top: -4.4rem;
  }
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`;

const HeroP = styled.p`
  /* font-size: clamp(1rem, 3vw, 3rem); */
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 400;
  color: rgba(88, 204, 237);
`;

const HeroHeading = styled.div`
  /* font-size: clamp(2rem, 4vw, 4rem); */
  font-size: clamp(2rem, 4vw, 2.7rem);
  margin-bottom: 2rem;
  font-weight: 400;
  color: rgba(88, 204, 237);
`;

const Text = styled.div`
  /* font-size: clamp(2rem, 4vw, 4rem); */
  font-size: clamp(2rem, 4vw, 2.7rem);
  /* margin-bottom: 2rem; */
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  /* margin-bottom: -10rem; */
`;

const TextOne = styled.div`
  /* font-size: clamp(2rem, 4vw, 4rem); */

  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 400;
  margin-bottom: 1.7rem;
`;

const TextTwo = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  max-width: 70%;
  font-weight: 400;
  text-align: center;
`;

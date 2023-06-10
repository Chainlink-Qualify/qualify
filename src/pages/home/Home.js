import React from "react";
import {
  Button,
  HomePageParent,
  HomePageNavBar,
  LinkContainer,
  NavBarContainer,
  LogoContainer,
  Wrapper,
  Overlay,
  TextContainer,
  CardWrapper,
  FooterWrapper
} from "./home.styles.js";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import landingimage from "../../assets/landingimage.png";
import successfulvetting from "../../assets/successfulvetting.png";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";




const Home = () => {

  return (
    <HomePageParent>
      <HomePageNavBar>
        <NavBarContainer>
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
          <LinkContainer><Link>About</Link>
          </LinkContainer>
       <LinkContainer> <Link marginRight={10}>Pricing</Link></LinkContainer>
       <LinkContainer> <Link marginRight={10}>Pricing</Link></LinkContainer>
       <LinkContainer><Link marginRight={10}>How it works</Link></LinkContainer>
        <LinkContainer><Link marginRight={20}>Support</Link></LinkContainer>
        <LinkContainer marginLeft={'20rem'}><Link to="/sign">Sign in</Link></LinkContainer>
          
          <Button>Get Started</Button>
        </NavBarContainer>
      </HomePageNavBar>
<Wrapper>
<TextContainer><h1>Welcome to Qualify, where talent meets opportunity!</h1>
<h2>The Platform that Connects Hiring Managers with Candidates with verified 
  work experiences.</h2>
  <Button>Get Started</Button></TextContainer>
<img src={landingimage} alt="landingimage" position="relative"/>
<Overlay><img src={successfulvetting} alt="successfulvetting" position="absolute"/></Overlay>

</Wrapper>

<CardWrapper><Card/></CardWrapper>
<FooterWrapper><Footer/></FooterWrapper>




    </HomePageParent>





  )


}

export default Home;

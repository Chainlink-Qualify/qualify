import React from "react";
import {
  Button,
  HomePageParent,
  HomePageNavBar,
  LinkContainer,
  NavBarContainer,
  LogoContainer,
  Wrapper
  
} from "./home.styles.js";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import landingimage from "../../assets/landingimage.png";




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
<img src={landingimage} alt="landingimage"/>
</Wrapper>






    </HomePageParent>





  )


}

export default Home;

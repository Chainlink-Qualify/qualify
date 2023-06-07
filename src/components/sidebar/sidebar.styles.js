import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 20%;
  height: 100vh;
  background: #f8f5fa;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: column;
  }

  @media ${device.laptop} {
    width: 10rem;
    height: 100%;
    background: #fff;
    border-right: 1px solid #f8f5fa;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    
    &:hover {
      width: 20%;
      display: flex;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      opacity: 1;

      & h1 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      & h3 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const SidebarLogoContainer = styled.div`
  align-items: center;
  color: #eeeeee;
  padding: 0.5rem;
  display:flex;
  flex-direction:row;

 

  

  @media ${device.laptop} {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    color: #f8f5fa;
    padding: 2rem 1rem;

    & h1 {
      font-family: "Urbane";
      font-style: normal;
      font-weight: 600;
      font-size: 3rem;
      opacity: 0;
    }

    & img {
      margin: 1rem;
      width:8rem;
      height:4rem;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 0.5rem;

  

  @media ${device.laptop} {
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    color: #000;
    padding: 0.2rem 0.2rem;

    & span {
      margin-left: 2rem;
      margin-right: 0.5rem;  
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2rem;
      
    }

    &.active {
      background: #752F9F;
      color: #fff;
    }

    &.active span {
      background: #752F9F;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 100%;
  margin-top: 0.5rem;
`;

export const LogoutArea = styled.div`
    flex: 10%;
    width: 90%;
    height:20%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    color: #000000;
    background:#f8f5fa;

    

  @media ${device.laptop} {
    margin-bottom: 1rem;
    padding: 1rem 1rem;

    & span {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.5rem;
     
    }
  }
`;
import { Link } from "react-router-dom";
import styled from "styled-components";


export const HomePageParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HomePageNavBar = styled.div`
    width: 100%;
    height: 10%;
    background: #fff;
    position: relative;
    display: flex;
    border: 1px #752F9F;
    border-radius:2px
`;

export const NavBarContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    position: relative;
`;

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #752F9F;
    margin-left: 1rem;
    margin-top: 1rem;

    & img {
    width: 5rem;
    height:2rem;
    }
    `;


export const Button = styled.button`
display: flex;
background:#752F9F;
width:10rem;
border: 1px solid #752F9F; 
border-radius:5px;
color:#ffffff;
height: 2.1rem;
align-items: center;
margin-top:0.6rem;
justify-content: center;
margin-left:10rem;

`;


export const LinkContainer = styled(Link)`
display: flex;
margin-top: 1.3rem;
margin-left: 2rem;
color: #eee;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
&:hover,
&:focus{
    color: #752F9F;
}
&:active{
    color: #752F9F;

 
`;


export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;

`;


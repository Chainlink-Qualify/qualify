import styled from "styled-components";

export const ApplicantHomeParent = styled.main`
  width: 100%;
  height: 100%;

  & .loader {
    position: absolute;
    top: 50%;
    left: 55%;
  }
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
  // position: relative;
`;

export const WalletWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#fff;
align-items: center;
margin-top: 1rem; 
margin-left:1rem;    
`;

export const VettingWrapper = styled.div`
width: 100%;
height: 70%;
display: flex;
background:#fff;
align-items: center;
margin-top: 5rem; 
margin-left:1rem;    
`;

export const DarkOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 29, 29, 0.6);
  z-index: 9;
  cursor: pointer;
`;
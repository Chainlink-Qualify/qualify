import styled from "styled-components";

export const CardParent = styled.main`
  width: 100vw;
  height: 100vh;
  background:#f8f5fa;
 

`;

export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap:1rem;
  padding:2rem;

  & p {
 font-weight:600;
 font-size:1.5rem;
  }
  
  & li{
  color:#752F9F;
  font-weight:500;
  margin-top:1rem;
  }
 
`;



export const StandardWrapper = styled.div`
  width: 50%;
  height: 70vh;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  padding:2rem;
  margin-left:3rem;
 
`;

export const PremiumWrapper = styled.div`
  width: 50%;
  height: 70vh;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #752F9F;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  padding:2rem;
  margin-left:3rem;
 
`;
export const FButton = styled.button`
display: flex;
background:#ffffff;
width:15rem;
border: 2px solid #752F9F; 
border-radius:5px;
color:#752F9F;
height: 2.5rem;
align-items: center;
justify-content: center;
font-weight:700;
margin-top:3rem;
margin-left:7rem;


`;

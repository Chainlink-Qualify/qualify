import styled from "styled-components";

export const SubscriptionParent = styled.main`
  width: 100%;
  height: 100%;

  

`;

export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap:1rem;
  padding:2rem;

  
 `;



export const StandardWrapper = styled.div`
  width: 40%;
  height: 35%;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: row;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  padding:2rem;
  margin-left:3rem;
 
  & img{
    width:5rem;
    height:5rem;
  }
`;

export const PremiumWrapper = styled.div`
  width: 35%;
  height: 70%;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #752F9F;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  padding:2rem;
  margin-left:1rem;
 
`;




import styled from "styled-components";

export const WalletParent = styled.div`
  width: 100vh;
  height: 40vh;
  background: #fff;
  border-right: 1px solid #f8f5fa;
  border-bottom: 1px solid #f8f5fa;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  }

  & h3{
    margin-top:1rem;
    margin-left:2rem;
  }

& p{
   
    line-height:2rem;
    font-weight:500;
}
  
  
`;

export const ContentWrapper = styled.div`
 display: flex;
 
`;
export const CButton = styled.button`
display: flex;
background:#752F9F;
width:10rem;
border: 2px solid #752F9F; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
font-weight:700;
margin-top:5rem;
margin-left:8rem


`;
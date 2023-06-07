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
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  }

  & h3{
    margin-left:2rem;
  }

& p{
    margin-left:2rem;
    line-height:0.5rem;
    font-weight:500;
}
  
  
`;

export const ContentWrapper = styled.div`
 display: flex;
 
`;
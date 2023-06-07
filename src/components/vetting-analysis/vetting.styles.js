import styled from "styled-components";

export const VettingParent = styled.div`
  width: 100vh;
  height: 40vh;
  background: #fff;
  display: flex;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  

  & h3{
    margin-left:2rem;
  }

& p{
    margin-left:2rem;
    line-height:0.5rem;
    font-weight:500;
}
  
  
`;


export const SummaryContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  padding: 2rem 2rem;
`;


export const SummaryCard = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  & img {
    width:auto;
    height: 16rem;
    margin-left:5rem;
  }
  

  & h1 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #917D6B;
  }
  `;
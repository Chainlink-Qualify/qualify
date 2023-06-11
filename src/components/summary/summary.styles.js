import styled from "styled-components";

export const SummaryParent = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f4f4f4;
  display: flex;
  justify-content: center;


`;






export const SummaryContainer = styled.section`
width: 100vw;
height: 90vh;
display: flex;
gap: 2rem;
justify-content: space-around;
align-items: center;
margin-right:15rem;
margin-left:15rem;


`;

export const SummaryCard = styled.div`
width: 70%;
height: 70%;
display: flex;
padding: 1rem 1rem;
background: ${(props) => (props.background ? props.background : "")};
border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
border-radius: 12px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
align-items: center;


`;

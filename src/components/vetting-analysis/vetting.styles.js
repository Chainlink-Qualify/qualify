import styled from "styled-components";

export const VettingParent = styled.div`
  width: 100vh;
  height: 70vh;
  background: #fff;
  display: flex;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid #CCCCCC;
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
  

  & h3{
    margin-top:2rem;
    margin-left:2rem;
    line-height:1rem;
  }


  
`;

export const CenterWrapper = styled.div`
align-items: center;

`;






export const SummaryContainer = styled.section`
width: 100%;
height: 70%;
display: flex;
gap: 1rem;
justify-content: space-around;
align-items: center;
margin-left: 2rem;

`;

export const SummaryCard = styled.div`
width: 30%;
height: 50%;
display: flex;
padding: 1rem 1rem;
background: ${(props) => (props.background ? props.background : "")};
border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
border-radius: 12px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
align-items: center;


& h1 {
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  color: #36164A;
}
`;
export const Button = styled.button`
display: flex;
background:#ffffff;
width:13rem;
border: 2px solid #752F9F; 
border-radius:5px;
color:#752F9F;
height: 2.5rem;
align-items: center;
justify-content: center;
font-weight:700;
margin-left:12rem;
margin-bottom:1rem;


`;
import styled from "styled-components";


export const TransactionParent = styled.aside`
  width: 55%;
  height: 135vh;
  display: flex;
 background-color: #fff;
 background: ${(props) => (props.background ? props.background : "")};
 border: 1px solid #CCCCCC;
 border-radius: 12px;
 box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
 margin-left:1rem;
  
 &h3{
  font-weight:500;
 }
  `;

export const Button = styled.button`
display: flex;
background:#ffffff;
width:20rem;
border: 2px solid #752F9F; 
border-radius:5px;
color:#752F9F;
height: 2.5rem;
align-items: center;
justify-content: center;
font-weight:700;
margin-top:47rem;
margin-right:8rem;

`;
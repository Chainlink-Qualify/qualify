import styled from "styled-components";

export const ActivityParent = styled.div`
 width: 90vw;
 height:50vh;
 display: flex;
 background-color: #fff;
 background: ${(props) => (props.background ? props.background : "")};
 border: 1px solid #CCCCCC;
 border-radius: 12px;
 box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);
   
`;


export const Table = styled.table`
  display: flex;
  border: none;
  border-collapse: collapse;
  margin-left:4rem;
  
  
& h1{
    font-weight:500;
    font-size:1.5rem;
    line-height:2rem;
    margin-top:1rem;
}
  & td {
    text-align:center;
    padding-right:4rem;
    font-weight:500;
    
  }
  
  `;

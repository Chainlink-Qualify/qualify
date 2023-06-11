import styled from "styled-components";

export const CenterParent = styled.main`
  width: 100vw;
  height: 100vh;
  background:#f8f5fa;
 

`;

export const CenterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  
& img{
    position: absolute;
    width:30rem;
    height: 3rem;
    margin-left:25rem;
}
 
`;

export const FirstDiv = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f5fa;
    margin-left: 10rem;
    color: #000000;
    margin-top: 5rem;

    & h1{
        line-height:3rem;
        font-weight: 400;
        font-size: 1.5rem;
    }
    & p{
        line-height:2rem;
    }
    
   
    `;

export const SecondDiv = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f5fa;
    color: #000000;
    margin-top: 5rem;
    margin-left:3rem;

    & h1{
        line-height:3rem;
        font-weight: 400;
        font-size: 1.5rem;
    }
    & p{
        line-height:2rem;
    }
    `;

export const ThirdDiv = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f5fa;
    color: #000000;
    margin-top: 5rem;
    margin-left:3rem;
    margin-right:2rem;

    & h1{
        line-height:3rem;
        font-weight: 400;
        font-size: 1.5rem;
    }
    & p{
        line-height:2rem;
    }
    `;

export const Button = styled.button`
    display: flex;
    background:#752F9F;
    width:10rem;
    border: 1px solid #752F9F; 
    border-radius:5px;
    color:#ffffff;
    height: 2.1rem;
    align-items: center;
    margin-top:0.4rem;
    justify-content: center;
    margin-left:10rem;
    
    `;
import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const MainContentArea = styled.div`
  flex: 1;
  border: 1px solid #8E44AD;
  display: flex;
  flex-direction: column;
`;

export const ApplicantDashboardHeader = styled.header`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #752F9F;
`;

export const ApplicantHeaderContainer = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 20%;
  height: 65%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: center;
  color: #000;

  & h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 12px;
  }
`;

export const SearchBarContainer = styled.section`
  flex: 1;
  height: 65%;
  margin-top: 0.7rem;
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #752F9F;
  border-radius: 5px;
  height: 95%;
  padding: 0 9px;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #fff;
    color: #726e6e;
    font-size: 1.5rem;
  }

  & .search-input::placeholder {
    color: #5d5e5f;
    line-height: 28px;
    font-size: 1.3rem;
  }

  & button {
    background: transparent;
    border: 0;
    outline: none;
  }

  & button img {
    width: 13px;
    height: 13px;
    margin: 0 10px;
  }
`;

export const NotificationContainer = styled.div`
  display:flex;
  width: 10%;
  height: 100%;
  display: flex;
  margin-top:1rem;
  margin-left:6rem;
 align-items: center;

  & img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Button = styled.button`
display: flex;
background:#752F9F;
width:5rem;
border: 1px solid #752F9F; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
margin-top:0.6rem;
justify-content: center;
margin-left:2rem;

`;

export const SettingContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  margin-left:10rem
  align-items: center;
  margin-top:3.1rem;

  & img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;


export const WalletWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#fff;
align-items: center;
padding-top: 2rem; 
margin-top: 2rem; 
margin-left:2rem;    
`;

export const VettingWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#fff;
align-items: center;
padding-top: 2rem; 
margin-top: 2rem; 
margin-left:2rem;    
`;


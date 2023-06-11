import React from "react";
import {
CenterParent,
CenterWrapper,
 FirstDiv,
 SecondDiv,
 ThirdDiv
} from "./center.styles.js";
import trusted from "../../assets/trusted.png";








const Center = () => {

  return (
    <CenterParent>
     

      <CenterWrapper>
        <img src={trusted} alt="trusted"/>
        <FirstDiv>
      <h1>Extensive Talent Database</h1>
     <p> Our platform hosts a vast and diverse talent pool
      <br></br> comprising of skilled professionals from various 
      <br></br>industries. Whether you're looking for software 
      <br></br>developers, marketing specialists, designers, or 
      <br></br>executives, we have a pool of talent ready to
      <br></br> meet your organization's unique requirements.</p>

      </FirstDiv>
      <SecondDiv>
        <h1>Verified Expert Evaluations</h1>
        <p>Qualify goes beyond traditional resume 
        <br></br>screening. We have partnered with industry
        <br></br> experts who rigorously evaluate each 
        <br></br>candidate's skills and qualifications. Our vetting 
        <br></br>process includes technical assessments,
        <br></br> interviews, and reference checks, ensuring that
        <br></br> you receive only the most qualified individuals 
        <br></br>for consideration</p>
      </SecondDiv>
      <ThirdDiv>
       <h1> Secure and Confidential</h1>
       <p>At TalentVet, we prioritize the security and 
       <br></br>confidentiality of your information. We employ
       <br></br> robust encryption protocols to safeguard your 
       <br></br>data and ensure that your interactions with
       <br></br> candidates remain confidential throughout the
       <br></br> hiring process.</p>

      </ThirdDiv>
      
      </CenterWrapper>
    </CenterParent>
  );
};

export default Center;
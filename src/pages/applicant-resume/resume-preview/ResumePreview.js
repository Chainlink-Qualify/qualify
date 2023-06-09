import React from "react";
import { Oval } from "react-loader-spinner";

import {
  ActionsBox,
  ContactBox,
  Container,
  Details,
  DivideWrapper,
  Header,
  Parent,
  Segment,
  Wrapper,
} from "./resume.preview.styles";

import message from "../../../assets/message.png";
import Button from "../../../components/custom-button/Button";



const ResumePreview = () => {

  return (
    <Parent>
      <Container>
        <Oval
          height={80}
          width={80}
          color="#752F9F"
          wrapperStyle={{}}
          wrapperClass="loader"
        
          ariaLabel="oval-loading"
          secondaryColor="#0570FB"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <Wrapper>
            <h1>Work Experience</h1>
            


          <Segment>
            <h1>Education and training</h1>
            {((education) => (
              <Details key={education.uuid}>
                <Header>
                  <h2>{education.experience}</h2>

                  <ActionsBox>
                    <p >
                      Edit
                    </p>
                    <p >
                      Delete
                    </p>
                  </ActionsBox>
                </Header>
                <h2>{education.organization}</h2>
                <p>
                  03/23 | {education.city}, {education.country}
                </p>
                <p>{education.main_activities}</p>

                <ContactBox>
                  <img src={message} alt="message" />
                  <p className="work-email">{education.website}</p>
                </ContactBox>
              </Details>
            ))}
          </Segment>
          <Segment>
            <h1>Personal skill</h1>
            <Details>
              <p></p>
            </Details>
          </Segment>
        </Wrapper>
      </Container>
      <DivideWrapper>
        <Button
          text="Previous"
          color="#fff"
          borderColor="#752F9F"
          
        />
        <Button
          text="Save"
          backgroundColor="#752F9F"
          
        />
      </DivideWrapper>
    </Parent>
  );
};

export default ResumePreview;
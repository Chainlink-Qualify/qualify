import React from "react";
import {
  ApplicantVettingParent,
  CenterWrapper,
  DataHeader,
  DataHeadersContainer,
  DataRowsContainer,
  DateContainer,
  EmailContainer,
  EmployerContainer,
  Header,
  NoDataFeedback,
  Rows,
  StatusBadge,
  StatusContainer,
  VettingHeadersContainer,
  Wrapper,
} from "./applicant.vetting.styles";
import avatar from "../../assets/avatar.png";




const Vetting = () => {

  return (
    <ApplicantVettingParent>
      <CenterWrapper>
        <VettingHeadersContainer>

          <Header>Successful Vetting</Header>
          <Header>Pending Requests</Header>
          <Header>Denied Requests</Header>
        </VettingHeadersContainer>

        <DataHeadersContainer>

          <DataHeader>Employer</DataHeader>
          <DataHeader>Date</DataHeader>
          <DataHeader>Status</DataHeader>
          <DataHeader>Email</DataHeader>

        </DataHeadersContainer>

        <DataRowsContainer>
          <Wrapper>

            <NoDataFeedback>No data</NoDataFeedback>


            <Rows>
              <EmployerContainer>
                <img
                  src={avatar}
                  alt="avatar"
                  className="employee-avatar"
                />

              </EmployerContainer>
              <DateContainer>
                <p className="date"></p>
              </DateContainer>
              <StatusContainer>
                <StatusBadge ></StatusBadge>
              </StatusContainer>
              <EmailContainer>

              </EmailContainer>
            </Rows>


          </Wrapper>
        </DataRowsContainer>
      </CenterWrapper>
    </ApplicantVettingParent>
  );
};

export default Vetting;
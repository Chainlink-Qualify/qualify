import React from "react";
import { ApplicantHomeParent, CenterWrapper, WalletWrapper, VettingWrapper, ActivityWrapper, Wrapper } from "./applicant.home.styles";
import Wallet from "../../components/wallet/Wallet";
import Vetting from "../../components/vetting-analysis/Vetting";
import Activity from "../../components/activity/Activity";
import Transaction from "../../components/transaction/Transaction";


const ApplicantHome = () => {

  return (

    <ApplicantHomeParent>

      <CenterWrapper>
        <Wrapper>
        <WalletWrapper>
          <Wallet />
        </WalletWrapper>
        <Transaction/>
        </Wrapper>
        <VettingWrapper>
          <Vetting />
        </VettingWrapper>
        <ActivityWrapper>
          <Activity />
        </ActivityWrapper>
      </CenterWrapper>
    </ApplicantHomeParent>










  );







};

export default ApplicantHome;
import React from "react";
import { ApplicantHomeParent,CenterWrapper, WalletWrapper,VettingWrapper } from "./applicant.home.styles";
import Wallet from "../../components/wallet/Wallet";
import Vetting from "../../components/vetting-analysis/Vetting";


const ApplicantHome=()=>{

return(

    <ApplicantHomeParent>

<CenterWrapper>
 <WalletWrapper> 
<Wallet/>
</WalletWrapper>     
        <VettingWrapper>
          <Vetting/>
          </VettingWrapper> 
        
          
      </CenterWrapper>
    </ApplicantHomeParent>










);







};

export default ApplicantHome;
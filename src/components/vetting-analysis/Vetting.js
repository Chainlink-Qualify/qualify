import React from "react";
import { CenterWrapper, Button,SummaryCard, SummaryContainer, VettingParent } from "./vetting.styles";




const Vetting =()=>{

return(
     <VettingParent>
       <CenterWrapper>
       <h3>Vetting Analysis</h3>
       <SummaryContainer>
       <SummaryCard background="#F2FCF9" borderColor="#F2FCF9">
        <h1>Completed Requests</h1>
       </SummaryCard>
       <SummaryCard background="#FFF9E5" borderColor="#FFF9E5">
        <h1>Pending Requests</h1>
       </SummaryCard>
       <SummaryCard background="FEF1F1" borderColor="FEF1F1">
        <h1>Denied Requests</h1>
       </SummaryCard>
       </SummaryContainer>
       <Button>Request Vetting</Button>
       </CenterWrapper>
</VettingParent>



)




}


export default Vetting;


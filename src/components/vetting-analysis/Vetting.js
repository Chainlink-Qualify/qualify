import React from "react";
import Button from "../custom-button/Button";
import { SummaryCard, SummaryContainer, VettingParent } from "./vetting.styles";




const Vetting =()=>{

return(<VettingParent>
       <h3>Vetting Analysis</h3>
       <SummaryContainer>
       <SummaryCard background="#22A57E" borderColor="#22A57E">
        <h1>Completed Requests</h1>
       </SummaryCard>
       <SummaryCard background="#FFF9E5" borderColor="#FFF9E5">
        <h1>Pending Requests</h1>
       </SummaryCard>
       <SummaryCard background="FEF1F1" borderColor="FEF1F1">
        <h1>Denied Requests</h1>
       </SummaryCard>
       </SummaryContainer>
       <Button text="Request Vetting"
       backgroundColor="#8E44AD"
       color="#FFFFFF"
       borderColor="#752F9F"
       width="13rem"
       />

</VettingParent>



)




}


export default Vetting;


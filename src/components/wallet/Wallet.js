import React from "react";
import { WalletParent, ContentWrapper } from "./wallet.styles";
import Button from "../custom-button/Button";




const Wallet =()=>{

return(<WalletParent>
       <h3>My Wallet</h3>
       <p>Balance</p>
<ContentWrapper><p><br></br>****** ETH/ $******</p>
<Button text="Connect Wallet"
              backgroundColor="#752F9F"
              color="#FFFFFF"
              borderColor="#752F9F"
              width="13rem"
              
/>
</ContentWrapper>

</WalletParent>



)




}


export default Wallet;


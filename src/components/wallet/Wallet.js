import React from "react";
import { WalletParent, ContentWrapper, CButton } from "./wallet.styles";





const Wallet =()=>{

return(<WalletParent>
       <h3>My Wallet</h3>
       <p>Balance</p>
<ContentWrapper><p><br></br>****** ETH/ $******</p>
<CButton>Connect Wallet</CButton>
</ContentWrapper>

</WalletParent>



)




}


export default Wallet;


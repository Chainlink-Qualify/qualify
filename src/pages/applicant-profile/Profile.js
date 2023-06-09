import React from "react";
import {
  SubscriptionParent,
  CenterWrapper,
  StandardWrapper,
  PremiumWrapper,
  } from "./profile.styles.js";
  import { getUserName } from "../../utils";
  import avatar from "../../assets/avatar.png";








const Profile = () => {

  return (
    <SubscriptionParent>
      

      <CenterWrapper>


        <StandardWrapper>
        <img src={avatar} alt="avatar"/>
        <h3>{getUserName()}
        <br></br>Developer</h3>
        </StandardWrapper>
        <PremiumWrapper>
          
        </PremiumWrapper>

      </CenterWrapper>
    </SubscriptionParent>
  );
};

export default Profile;
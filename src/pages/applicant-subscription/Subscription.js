import React from "react";
import {
  SubscriptionParent,
  CenterWrapper,
  StandardWrapper,
  PremiumWrapper,
  FButton,
  CButton
} from "./subscription.styles.js";








const Subscription = () => {

  return (
    <SubscriptionParent>
      <CButton>Connect Wallet</CButton>
      <h3>Choose the right plan for you</h3>
      <h4>Choose the right plan to suit your vetting needs</h4>

      <CenterWrapper>


        <StandardWrapper>
          <h1>Standard</h1>
          <p>0.03Eth/month ($20)</p>
          <FButton>Subscribe</FButton>
          <ol>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ol>
        </StandardWrapper>
        <PremiumWrapper>
          <h1>Premium</h1>
          <p>0.08Eth/month ($30)</p>
          <FButton>Subscribe</FButton>
          <ol>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ol>
        </PremiumWrapper>

      </CenterWrapper>
    </SubscriptionParent>
  );
};

export default Subscription;
import React from "react";
import {
  CardParent,
  CenterWrapper,
  StandardWrapper,
  PremiumWrapper,
  FButton
} from "./card.styles.js";








const Card = () => {

  return (
    <CardParent>
     

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
    </CardParent>
  );
};

export default Card;
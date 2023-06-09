import React from "react";
import { Oval } from "react-loader-spinner";

import Button from "../../../components/custom-button/Button";
import {
    ButtonsContainer,
    HeadingContainer,
    ResumeParent,
    Wrapper,
} from "./resume.home.styles";
;


const ResumeHome = () => {

    return (


        <ResumeParent>
            <Wrapper>
                <Oval
                    height={80}
                    width={80}
                    color="#0570FB"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    ariaLabel="oval-loading"
                    secondaryColor="#752F9F"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
                <HeadingContainer>
                    <h1>
                         Create a Resume
                    </h1>
                </HeadingContainer>

                <ButtonsContainer>

                    <Button
                        text="Build Resume"
                        backgroundColor="#752F9F"
                        width="15rem"

                    />
                </ButtonsContainer>
            </Wrapper>
        </ResumeParent>


    );
};

export default ResumeHome;
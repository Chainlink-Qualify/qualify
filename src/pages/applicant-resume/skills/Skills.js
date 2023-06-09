import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/custom-button/Button";
import FormTextArea from "../../../components/custom-textarea/FormTextArea";
import {
  getPersonalSkillsState,
  getResumeState,
  updateResume,
} from "../../../slices/resume";
import { addItemToList } from "../../../utils";
import {
  DivideWrapper,
  Heading,
  Parent,
  SkillsForm,
  Wrapper,
} from "./skills.styles";

// const initialState = {
//   personalSkills: "",
// };

const Skills = () => {
  const [personalSkills, setPersonalSkills] = useState(
    useSelector(getPersonalSkillsState)
  );

  const handleChange = (e) => {
    setPersonalSkills(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let data = useSelector(getResumeState);

  const routeToPreviousPage = () => {
    const newActiveHeaders = data.activeHeaders.filter((el) => el !== 3);
    const resume = {
      ...data,
      personal_skill: [personalSkills],
      activeHeaders: newActiveHeaders,
    };
    dispatch(updateResume(resume));
    navigate("/applicant/resume/build/education");
  };

  const handleSaveResume = () => {
    const resume = {
      ...data,
      work_experience: addItemToList(data.work_experience, data.workExperience),
      education_training: addItemToList(
        data.education_training,
        data.education
      ),
      personal_skill: [personalSkills],
    };
    dispatch(updateResume(resume));
    navigate("/applicant/resume/build/preview");
  };

  return (
    <Parent>
      <Wrapper>
        {" "}
        <Heading>Personal Skills</Heading>
        <SkillsForm>
          <FormTextArea
            labelName="Enter your personal skills"
            name="personalSkills"
            value={personalSkills}
            handleChange={handleChange}
          />

          <DivideWrapper>
            <Button
              text="Previous"
              color="#ffffff"
              backgroundColor="#752F9F"
              borderColor="#752F9F"
              handleClick={routeToPreviousPage}
            />
            <Button
              text="Preview"
              backgroundColor="#752F9F"
              handleClick={handleSaveResume}
            />
          </DivideWrapper>
        </SkillsForm>
      </Wrapper>
    </Parent>
  );
};

export default Skills;
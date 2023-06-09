import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  ApplicantDashboardHeader,
  ApplicantHeaderContainer,
  Button,
  NotificationContainer,
  InfoContainer,
  MainContentArea,
  ParentContainer,
  SearchBarContainer,
  SearchBarForm,
  SettingContainer
} from "./applicant.dashboard.styles";
import searchIcon from "../../assets/search-icon.png";
import notification from "../../assets/notification.png";
import setting from "../../assets/setting.png";
import { getUserName } from "../../utils";
import { sideBarLinks } from "./applicant.routes";
import ApplicantHome from "../../pages/applicant-home/ApplicantHome";
import Vetting from "../../pages/applicant-vetting/Vetting";
import PersonalInformation from "../../pages/applicant-resume/personal-information/PersonalInformation";
import WorkExperience from "../../pages/applicant-resume/work-experience/WorkExperience";
import Education from "../../pages/applicant-resume/education/Education";
import Skills from "../../pages/applicant-resume/skills/Skills";
import ResumePreview from "../../pages/applicant-resume/resume-preview/ResumePreview";
import ResumeHome from "../../pages/applicant-resume/home/ResumeHome";
import ApplicantBuildResume from "../../pages/applicant-resume/ApplicantResume";
import Subscription from "../../pages/applicant-subscription/Subscription";
import Profile from "../../pages/applicant-profile/Profile";




const ApplicantDashboard = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />
      <MainContentArea>
        <ApplicantDashboardHeader>
          <ApplicantHeaderContainer>
            <InfoContainer>
              <h3>Hello{getUserName()}!</h3>
            </InfoContainer>
            <SearchBarContainer>
              <SearchBarForm>
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Type to search..."
                />
              </SearchBarForm>
            </SearchBarContainer>
            <Button>Search</Button>
            <NotificationContainer>
              <img src={notification} alt="notification" />
            </NotificationContainer>
            <SettingContainer>
              <img src={setting} alt="setting" />
            </SettingContainer>
          </ApplicantHeaderContainer>
        </ApplicantDashboardHeader>

        <div
          className=""
          style={{
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route index element={<ApplicantHome />} />
            <Route path="/" element={<ApplicantHome />} />
            <Route path="/vetting" element={<Vetting />} />
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/resume" element={<ResumeHome />}>
            <Route path="build" element={<ApplicantBuildResume />}>
              <Route index element={<PersonalInformation />} />
              <Route path="work-experience" element={<WorkExperience />} />
              <Route path="education" element={<Education />} />
              <Route path="skills" element={<Skills />} />
              <Route path="preview" element={<ResumePreview />} />
            </Route>
            </Route>
          </Routes>





        </div>
      </MainContentArea>
    </ParentContainer >
  );
};

export default ApplicantDashboard;
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
            </Routes>
          




        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default ApplicantDashboard;
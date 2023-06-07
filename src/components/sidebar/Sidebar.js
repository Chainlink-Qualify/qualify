import React from "react";
import { BsBoxArrowLeft } from "react-icons/bs";
import {
  SidebarLogoContainer,
  SidebarParent,
  LogoutArea,
  SidebarLinksContainer,
  StyledNavLink
  
} from "./sidebar.styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ routes }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userToken");

    navigate("/sign-in");
  };

  return (
    <SidebarParent>
      <SidebarLogoContainer>
        <img src={logo} alt="logo" />
        
        </SidebarLogoContainer>
      
      <SidebarLinksContainer>
        {routes.map((link) => (
          <StyledNavLink
            to={link.path}
            style={{ textDecoration: "none" }}
            key={link.text}
          >
            <span>{link.icon}</span>
            <h3>{link.text}</h3>
          </StyledNavLink>
        ))}
      </SidebarLinksContainer>
      <LogoutArea onClick={handleLogout}>
        <span><BsBoxArrowLeft size={25} /></span>
        <h3>Logout</h3>
      </LogoutArea>
    </SidebarParent>
  );
};

export default Sidebar;
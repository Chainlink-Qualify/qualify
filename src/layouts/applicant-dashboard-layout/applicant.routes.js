import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineVerified, MdPayment, MdOutlineEventNote } from "react-icons/md";
import profile from "../../assets/profile.png";
import message from "../../assets/message.png";

export const sideBarLinks = [
  {
    path: "/applicant/",
    icon: <CgHomeAlt size={22} />,
    text: "Overview",
    alt: "dashboard-icon",
  },
  {
    path: "/applicant/vetting",
    icon: <MdOutlineVerified size={22} />,
    text: "Vetting",
    alt: "vetting-icon",
  },
  {
    path: "/applicant/resume",
    icon: <MdOutlineEventNote size={22} />,
    text: "Resume",
    alt: "resume-icon",
  },
  {
    path: "/applicant/subscription",
    icon: <MdPayment size={22} />,
    text: "Subscription",
    alt: "vetting-icon",
  },
  
  {
    path: "/applicant/inbox",
    icon: <img src={message} alt="message" />,
    text: "Inbox",
    alt: "message",
  },
  {
    path: "/applicant/profile",
    icon: <img src={profile} alt="profile" />,
    text: "Profile",
    alt: "profile",
  },
];
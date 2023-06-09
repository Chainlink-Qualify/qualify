/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicantDashboard from "./layouts/applicant-dashboard-layout/ApplicantDashboard";
/*import { ProtectedRoute } from "./custom-routes/ProtectedRoutes";*/
import Home from "./pages/home/Home";
import { AdminContainer, AuthContainer } from "./components"
import { SignIn, SignUp, ResetPassword, ForgotPassword, AdminHome, AdminUsers, AdminCompanies, AdminSettings, AdminRevenue, AdminTeam } from "./pages"

const path = {
  auth: "/auth",
  admin: "/admin"
}

function App() {
  return (
    <BrowserRouter>

  );
}

export default App;
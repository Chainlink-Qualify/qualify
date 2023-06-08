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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/applicant/" element={<ApplicantDashboard />} />

            <Route path={path.auth} element={<AuthContainer />}>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="*" element={<SignUp />} />
            </Route>

            <Route path={path.admin} element={<AdminContainer />}>
              <Route index element={<AdminHome />} />
              <Route path="registered-users" element={<AdminUsers />} />
              <Route path="registered-companies" element={<AdminCompanies />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="revenue" element={<AdminRevenue />} />
              <Route path="team-members" element={<AdminTeam />} />
            </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
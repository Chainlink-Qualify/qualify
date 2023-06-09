/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicantDashboard from "./layouts/applicant-dashboard-layout/ApplicantDashboard";
/*import { ProtectedRoute } from "./custom-routes/ProtectedRoutes";*/
import Home from "./pages/home/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/applicant/*" element={<ApplicantDashboard /> }/>
     
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
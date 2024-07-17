import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import MyRequests from "./pages/services/MyRequests";
import ProtectedRoute from "./utils/ProtectedRoute";
import Staffings from "./pages/staffings/Staffings";
import StaffingDetails from "./pages/staffings/StaffingDetails";
import SelectedStaffings from "./pages/staffings/SelectedStaffings";
import ConfirmServices from "./pages/services/ConfirmServices";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm-staffing" element={<SelectedStaffings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<ServiceDetails />} />
        <Route path="/staffings" element={<Staffings />} />
        <Route path="/staffing/:name" element={<StaffingDetails />} />
        <Route
          path="/my-requests"
          element={
            <ProtectedRoute>
              <MyRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/request-list"
          element={
            <ProtectedRoute>
              <ConfirmServices />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;

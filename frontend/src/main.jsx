import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// Pages
import Landing from "./Pages/Landing.jsx";
import Camera from "./Pages/Camera.jsx";
import Lighting from "./Pages/Lighting.jsx";
import Grip from "./Pages/Grips.jsx"; 
import About from "./pages/About.jsx";
import Scenarios from "./pages/Scenarios.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SignUp.jsx";
import FirstAC from "./Pages/FirstAC.jsx";
import Setup from "./Pages/Setup.jsx";
import Profile from "./Pages/Profile.jsx"; 
import AddSetup from "./pages/AddSetup";

// Auth
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />

          {/* Protected routes */}
          <Route
            path="camera"
            element={
              <PrivateRoute>
                <Camera />
              </PrivateRoute>
            }
          />
          <Route
            path="lighting"
            element={
              <PrivateRoute>
                <Lighting />
              </PrivateRoute>
            }
          />
          <Route
            path="grip"
            element={
              <PrivateRoute>
                <Grip />
              </PrivateRoute>
            }
          />
          <Route
            path="firstAC"
            element={
              <PrivateRoute>
                <FirstAC />
              </PrivateRoute>
            }
          />
          <Route
            path="scenarios"
            element={
              <PrivateRoute>
                <Scenarios />
              </PrivateRoute>
            }
          />
          <Route
            path="setups"
            element={
              <PrivateRoute>
                <Setup />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="add-setup"
            element={
              <PrivateRoute>
                <AddSetup />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

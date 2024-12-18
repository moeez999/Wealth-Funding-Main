import { ThemeProvider } from "@mui/material/styles";
import TuffxTheme from "./components/TuffxTheme";
import "./App.css";

import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";
import Chart from "./components/Chart";
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Challenges from "./components/Challenges/Challenges";
import HelpDesk from "./components/HelpDesk";
import Payment from "./components/Payment";
import WithDrawal from "./components/WithDrawal";
import AffiliateProgram from "./components/AffiliateProgram";

import Login from "./pages/authentication/Login";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import RegistrationDetails from "./components/RegistrationDetails";

import "./App.css";
import ContestProgram from "./components/ContestProgram";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <ThemeProvider theme={TuffxTheme}>
        <Router>
          <Routes>
            <Route path="/forgot-password" element={<Forget />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route
              path="/registration-details"
              element={<RegistrationDetails />}
            />
            <Route
              path="/*"
              element={
                <Sidebar>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/help" element={<HelpDesk />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/withdrawals" element={<WithDrawal />} />
                    <Route path="/portal" element={<AffiliateProgram />} />
                    <Route path="/certification" element={<Certifications />} />
                    <Route
                      path="/contest-programs"
                      element={<ContestProgram />}
                    />
                  </Routes>
                </Sidebar>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

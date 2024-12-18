// @ts-nocheck
// material-ui
import { Typography } from "@mui/material";

// project imports
import AuthLeft from "../../components/AuthLeft";
import { AuthRegister } from "../../components/AuthForms";
import authLeftBg from "../../assets/images/auth/authLeftBg.png";

import { stylesMui } from "./styles";

const divStyle = {
  backgroundImage: `url(${authLeftBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  borderRadius: "0rem 4.375rem 0rem 0rem",
};

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  return (
    <section className="w-full flex">
      <div
        className="w-full md:w-1/2 h-screen hidden md:block"
        style={divStyle}
      >
        {/* <div className="w-full md:w-1/2 hidden md:block" style={divStyle}> */}
        <AuthLeft variant="signup" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="md:w-4/5 xl:w-7/12">
          <div className="px-4 md:px-0 py-2 md:py-0">
            <Typography sx={stylesMui.headingPage}>
              Create New Account
            </Typography>
            <AuthRegister />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

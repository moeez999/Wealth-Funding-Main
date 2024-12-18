import React from "react";
import { Typography } from "@mui/material";
import Logo from "../../assets/images/auth/logo.svg";
import forgotImage from "../../assets/images/auth/forgetImg.png";
import loginImage from "../../assets/images/auth/loginImg.png";
import signupImage from "../../assets/images/auth/signupImg.png";
import { stylesMui } from "./styles";

const AuthLeft = ({ variant }) => {
  let imageSrc;
  let imageAlt;
  let subtext;
  // let wrapperClass = "";

  switch (variant) {
    case "forgot":
      imageSrc = forgotImage;
      imageAlt = "Forgot password";
      subtext = (
        <>
          Create an account to keep up to date with all of <br /> our features
          and contests!
        </>
      );
      break;
    case "login":
      imageSrc = loginImage;
      subtext = "Welcome back!";
      break;
    case "signup":
      imageSrc = signupImage;
      imageAlt = "Signup";
      subtext = (
        <>
          Create an account to keep up to date with all of <br /> our features
          and contests!
        </>
      );
      // wrapperClass = "md:w-[390px] lg:w-[400px] xl:w-[415px] 2xl:w-[450px]";
      break;
    default:
      imageSrc = Logo;
      imageAlt = "Auth image";
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full mt-10 mb-[1rem] ml-8 lg:ml-14">
          <img
            // className="md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 w-[229px] h-[100px]"
            src={Logo}
            alt="tuffx"
          />
          <div className="flex justify-start flex-col mt-4">
            <Typography sx={stylesMui.headingAuth}>
              Turn your dreams into <br />
              reality.
            </Typography>
            <Typography sx={stylesMui.subtextAuth}>{subtext}</Typography>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <div className={`${wrapperClass}`}> */}
          <div className="md:w-[390px] lg:w-[400px] xl:w-[415px] 2xl:w-[450px]">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLeft;

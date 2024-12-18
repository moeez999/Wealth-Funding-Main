import ReCAPTCHA from "react-google-recaptcha";
// import styled from "styled-components";

// const StyledCaptchaContainer = styled.div`
//   transform-origin: 0 0;
//   -webkit-transform-origin: 0 0;

//   transform: scaleY(0.7);
//   -webkit-transform: scaleY(0.7);

//   @media (min-width: 768px) {
//     transform: scaleX(1.025);
//     -webkit-transform: scaleX(1.025);
//   }

//   @media (min-width: 1024px) {
//     transform: scaleX(1.35);
//     -webkit-transform: scaleX(1.35);
//   }

//   @media (min-width: 1440px) {
//     transform: scaleX(1.4);
//     -webkit-transform: scaleX(1.4);
//   }
// `;

const recaptchaKey = import.meta.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY;

const GoogleRecaptcha = () => {
  return (
    // <StyledCaptchaContainer id="captcha">
    <ReCAPTCHA
      sitekey={recaptchaKey}
      onChange={(value) => {
        // Handle reCAPTCHA response
        console.log("reCAPTCHA value:", value);
      }}
    />
    // </StyledCaptchaContainer>
  );
};

export default GoogleRecaptcha;

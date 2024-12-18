import React from "react";

import { Button } from "@mui/material";

import { stylesMui } from "./styles";

const ButtonAuth = ({ labelText }) => {
  return (
    <div>
      <Button sx={stylesMui.buttonAuth} type="submit" fullWidth>
        {labelText}
      </Button>
    </div>
  );
};

export default ButtonAuth;

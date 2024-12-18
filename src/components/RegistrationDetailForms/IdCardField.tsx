import { useRef } from "react";
import { Typography } from "@mui/material";

import UploadIcon from "../../assets/images/documentUploadIcon.svg";

import { stylesMui } from "./styles";

interface IdCardFieldProps {
  label?: string;
  description?: string;
}

const IdCardField: React.FC<IdCardFieldProps> = ({
  label = "Country identity card",
  description = "On desktop, Simply drag and drop your file in this field. Acceptable formats: JPEG, JPG or PNG.",
}) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      //@ts-ignore
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
  };
  return (
    <div className="h-[6.25rem] px-[1.69rem] w-full flex justify-between items-center rounded-lg bg-[#F4F4F4] border border-dashed border-gray-400">
      <div className="flex flex-col">
        <Typography sx={{ ...stylesMui.inputLabel, color: "#0D1D54" }}>
          {label}
        </Typography>
        <Typography sx={{ ...stylesMui.inputLabel, fontSize: "0.75rem" }}>
          {description}
        </Typography>
      </div>
      <div className="mr-4">
        <img
          src={UploadIcon}
          alt="upload icon"
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        />
        <input
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default IdCardField;

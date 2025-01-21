import { useRef, useState } from "react";

import CameraIcon from "../../assets/images/cameraIcon.svg";

const PhotoUpload = ({setFile}) => {
  const fileInputRef = useRef(null);
  const [is_fill, setFill]=useState(false)

  const handleIconClick = () => {
    if (fileInputRef.current) {
      //@ts-ignore
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    setFill(true)
    setFile(selectedFile)
    //console.log("Selected File:", selectedFile);
  };
  return (
    <div className={`w-[7.5rem] h-[7.5rem] 2xl:w-[15.125rem] 2xl:h-[15.125rem] flex items-center justify-center rounded-lg ${!is_fill ? "bg-[#F4F4F4]" : "bg-[#fca854]" } border border-dashed border-gray-400`}>
      <img
        src={CameraIcon}
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
  );
};

export default PhotoUpload;

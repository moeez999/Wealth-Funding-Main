import { useRef } from "react";

import CameraIcon from "../../assets/images/cameraIcon.svg";

const PhotoUpload = () => {
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
    <div className="w-[7.5rem] h-[7.5rem] 2xl:w-[15.125rem] 2xl:h-[15.125rem] flex items-center justify-center rounded-lg bg-[#F4F4F4] border border-dashed border-gray-400">
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

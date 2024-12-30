import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";

const Pagination = ({next, prev}) => {
  return (
    <>
      <hr className="h-px py-[0.24px] my-4 bg-[#858585]"></hr>
      <div className="w-full bg-white flex flex-row items-center justify-between overflow-x-auto mt-8 rounded-[0.375rem]">
        <div className="flex flex-row items-center">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <button onClick={()=>prev()} className="hidden xl:block font-medium text-lg font-[Montserrat] text-[#00BE64] cursor-pointer  p-[0.90rem] rounded-lg">
            Previous
          </button>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            1{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            2{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            3{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            4{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            5{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            6{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            7{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            .{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            .{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            .{" "}
          </div>
          <div className="font-[Montserrat] text-[#00BE64] cursor-pointer font-medium text-lg ">
            12{" "}
          </div>
        </div>

        <div className="flex flex-row items-center">
          <button onClick={()=>next()} className="hidden xl:block font-medium text-lg font-[Montserrat] text-[#00BE64] cursor-pointer  p-[0.90rem] rounded-lg">
            Next
          </button>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
      <hr className="mt-[5.81rem]"></hr>
    </>
  );
};

export default Pagination;

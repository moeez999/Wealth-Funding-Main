import AddIcon from "@mui/icons-material/Add";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import EditChallengeModal from "./ChallengesModal";
import NewModal from "../NewModal";

const Challenges = () => {
  const [open, setOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddOpen = () => setAddModal(true);
  const handleAddClose = () => setAddModal(false);
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  return (
    <>
      <div className="mt-4 md:mt-11 mx-4 lg:mx-9">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px] mt-4">
          Challenges
        </div>
        <div className="font-normal text-[#646464] font-[Montserrat] text-[14px] lg:text-[18px]">
          Set up the profit targets & draw-down limits.
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-6 items-start gap-y-3 md:items-center">
          <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[20px] lg:text-[24px] line-[29.3px]">
            Your Activity
          </div>

          <div className="flex flex-row items-center gap-x-6 md:gap-x-2">
            <FormControl>
              <InputLabel sx={{ textAlign: "center", mb: 10 }}>
                Filters
              </InputLabel>
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#ffffff",
                  // height: 36,
                  width: 102,
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      backgroundColor: "#ffffff",
                      height: 36,
                      width: 153,
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "& .MuiSelect-icon": {
                        fontSize: 32,
                      },
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button
              onClick={handleAddOpen}
              className="bg-[#00BE64] text-white cursor-pointer  p-[0.99rem] rounded-lg"
            >
              <div className="flex items-center gap-x-1">
                <AddIcon fontSize="small" />
                <div className="font-normal text-sm font-[Montserrat]">
                  Add New
                </div>
              </div>
            </button>
          </div>
        </div>
        <EditChallengeModal handleClose={handleClose} open={open} />
        <NewModal handleClose={handleAddClose} open={addModal} />

        <div className="bg-white mt-4 flex flex-col gap-y-9 padding-[1.5rem] w-full overflow-x-auto p-6 mb-3 rounded-lg">
          <div className="flex flex-row items-center gap-28">
            <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
              Balance
            </div>
            <div className="flex flex-row items-center gap-x-12 ">
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $10,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $25,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $50,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $100,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $200,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <IconButton onClick={handleOpen}>
                <img src="../../Icons/editIcon.svg" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-row items-center gap-28">
            <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
              Balance
            </div>
            <div className="flex flex-row items-center gap-x-12 ">
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $10,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $25,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $50,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $100,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                $200,000
              </div>
              <div className="font-[Montserrat] font-semibold text-[16px] text-[#00BE64]">
                |
              </div>
              <IconButton>
                <img src="../../Icons/editIcon.svg" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenges;

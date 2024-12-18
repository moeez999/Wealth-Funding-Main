import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Overview from "./Withdrawals/Overview";
import Request from "./Withdrawals/Request";

import EditModal from "./EditModal";
import NewModal from "./NewModal";

const WithDrawal = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddOpen = () => setAddModal(true);
  const handleAddClose = () => setAddModal(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];

  return (
    <>
      <div className="mt-4 md:mt-11 mx-4 lg:mx-2 xl:mx-12">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px]">
          Withdrawal
        </div>

        <EditModal handleClose={handleClose} open={open} />
        <NewModal handleClose={handleAddClose} open={addModal} />

        <div className="flex flex-col xl:flex-row  gap-y-4 xl:justify-between mt-3 xl:items-center">
          <div className="flex flex-row gap-3 items-center">
            <button className=" bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#00BE64" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#00BE64]">
                  Refresh
                </div>
              </div>
            </button>
            <div className="">
              <FormControl>
                <TextField
                  placeholder="Search for withdrawals..."
                  sx={{
                    borderRadius: "0.5rem",
                    input: {
                      "&::placeholder": {
                        color: "#00BE64",
                        opacity: 1,
                      },
                    },
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      height: 50,
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "0.5rem",
                      },
                    },
                  }}
                  variant="outlined"
                  //   onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <SearchIcon /> */}
                        <img
                          src="../../Icons/SearchAffiliateIcon.svg"
                          width={25}
                          height={25}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="flex flex-wrap justify-start xl:justify-between  items-start lg:items-center gap-x-3 gap-y-4">
            <button
              onClick={handleAddOpen}
              className=" bg-white text-white cursor-pointer  p-[0.75rem] rounded-md"
            >
              <div className="flex items-center gap-x-1">
                <AddIcon fontSize="small" sx={{ color: "#00BE64" }} />
                <div className="font-normal font-[Montserrat] text-[#00BE64]">
                  New
                </div>
              </div>
            </button>
            <FormControl
              sx={{
                "& .MuiFormControl-root": {
                  // height: 160,
                },
              }}
            >
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
                  width: 180,
                  height: 48,
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      width={50}
                      height={50}
                      src="../../Icons/dateIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">Date</InputLabel>
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 16,

                      border: "1px solid #00BE64",

                      "&:hover": {
                        backgroundColor: "#00BE64",
                        color: "#FFFFFF",
                      },

                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
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
            <FormControl
              sx={{
                "& .MuiFormControl-root": {
                  // height: 160,
                },
              }}
            >
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
                  width: 180,
                  height: 48,
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      width={40}
                      height={40}
                      src="../../Icons/bankIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">P.Method</InputLabel>
                {options.map((option) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 16,

                      border: "1px solid #E2E5E7",

                      "&:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
                      },

                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
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
          </div>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            fontFamily: "Montserrat",
            "& button:focus": {
              color: "#00BE64",
            },

            "& .MuiTab-root.Mui-selected": {
              color: "#00BE64",
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Montserrat",
            },
          }}
          TabIndicatorProps={{
            sx: { bgcolor: "#00BE64" },
          }}
        >
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "#00BE64",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Overview"
          />
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "#00BE64",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Request"
          />
        </Tabs>
        {/* {value === 0 && <Overview handleOpen={handleOpen} />} */}
        {value === 0 && <Overview />}
        {/* {value === 1 && <Request handleOpen={handleOpen} />} */}
        {value === 1 && <Request />}
      </div>
    </>
  );
};

export default WithDrawal;

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

import Participants from "./Affliates/Participants";
import Program from "./Affliates/Program";
import Visits from "./Affliates/Visits";
import EditModal from "./EditModal";
import NewModal from "./NewModal";

const AffiliateProgram = () => {
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

  const filterOptions: { label: string; value: string }[] = [
    { label: "Select filter", value: "" },
    { label: "Sign Up Bonus", value: "signupbonus" },
    { label: "Referral Bonus", value: "referral bonus" },
    { label: "Cancel", value: "cancel" },
  ];

  return (
    <>
      <div className="mt-4 md:mt-11 mx-4 lg:mx-12">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px]">
          Affiliate Program
        </div>

        <EditModal handleClose={handleClose} open={open} />
        <NewModal handleClose={handleAddClose} open={addModal} />

        <div id="mobile" className="md:hidden flex flex-wrap w-full  md:flex-row gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
        <div className="flex w-full flex-row justify-between items-center gap-x-3 gap-y-6">
            <button className="w-1/2 bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#00BE64" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>
            <FormControl
              sx={{
               
                  width:"50%",
              
              }}
            >
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#ffffff",
                  
                  height: 50,
             
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
                      src="../../Icons/filterIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">Filters</InputLabel>
                {filterOptions.map((option) => (
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

              
              <FormControl fullWidth>
             
                <TextField
                  placeholder="Search for payments..."
                  sx={{
                    borderRadius: "0.5rem",
                    input: {
                      "&::placeholder": {
                        color: "#959BA4",
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
               
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                      
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
       
          <div className="flex w-full flex-row gap-3">
            <button
              onClick={handleAddOpen}
              className="w-1/2 bg-white text-white cursor-pointer  p-[0.75rem] rounded-md"
            >
              <div className="flex items-center gap-x-1">
                <AddIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal font-[Montserrat] text-[#646464]">
                  New
                </div>
              </div>
            </button>
            <FormControl
              sx={{
                width:"50%",
               
              }}
            >
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#ffffff",
                  
                  height: 50,
             
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

        <div id="desktop" className="hidden md:flex flex-wrap md:flex-row gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
          <div className="flex flex-wrap md:flex-row gap-3 items-center">
            <button className=" bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>
            <FormControl
              sx={{
                "& .MuiFormControl-root": {
                  height: 200,
                },
              }}
            >
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#ffffff",
                  width: 150,
                  height: 50,
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
                      src="../../Icons/filterIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">Filters</InputLabel>
                {filterOptions.map((option) => (
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
            <div className="">
              <FormControl>
                <TextField
                  placeholder="Search for payments..."
                  sx={{
                    borderRadius: "0.5rem",
                    input: {
                      "&::placeholder": {
                        color: "#959BA4",
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
          <div className="flex flex-row justify-between items-center gap-x-3 gap-y-6">
            <button
              onClick={handleAddOpen}
              className=" bg-white text-white cursor-pointer  p-[0.75rem] rounded-md"
            >
              <div className="flex items-center gap-x-1">
                <AddIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal font-[Montserrat] text-[#646464]">
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
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#4B5563" }} />
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
              color: "#221835",
            },

            "& .MuiTab-root.Mui-selected": {
              color: "#221835",
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              fontFamily: "Montserrat",
            },
          }}
          TabIndicatorProps={{
            sx: { bgcolor: "#221835" },
          }}
        >
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "#646464",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Program"
          />
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "#646464",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Visits"
          />
          <Tab
            sx={{
              fontWeight: 500,
              fontSize: { xs: 14, sm: 16 },
              color: "#646464",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
            }}
            label="Participants"
          />
        </Tabs>
        {/* {value === 0 && <Program handleOpen={handleOpen} />} */}
        {value === 0 && <Program />}
        {/* {value === 1 && <Visits handleOpen={handleOpen} />} */}
        {value === 1 && <Visits />}
        {/* {value === 2 && <Participants handleOpen={handleOpen} />} */}
        {value === 2 && <Participants />}
      </div>
    </>
  );
};

export default AffiliateProgram;

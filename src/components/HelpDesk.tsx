import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "./Pagination";
import { useState } from "react";
import EditModal from "./EditModal";
import NewModal from "./NewModal";

const columns: GridColDef[] = [
  {
    field: "editFaq",
    headerName: "Edit FAQs",
    width: 300,
    editable: false,
  },
  {
    field: "liveChat",
    headerName: "Hanlde Live Chat",
    width: 300,
    editable: false,
  },
  {
    field: "ticket",
    headerName: "Support tickets",
    width: 300,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    editFaq: "Edit FAQs",
    liveChat: "Handle live chat",
    ticket: "Support tickets",
  },
  {
    id: 2,
    editFaq: "Edit FAQs",
    liveChat: "Handle live chat",
    ticket: "Support tickets",
  },
];

const HelpDesk = () => {
  const [open, setOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);
  // const handleOpen = () => setOpen(true);
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
      <div className="mt-4 md:mt-11 mx-4 md:xl:mx-8 xl:mx-12">
        <div className="font-semibold text-[#221835] font-[Montserrat] text-[24px] lg:text-[38px]">
          Help Desk
        </div>
        <div className="font-normal text-[#646464] font-[Montserrat] text-[14px] lg:text-[18px]">
          Set up the profit targets & draw-down limits.
        </div>
        <div className="font-medium text-[#221835] font-[Montserrat] text-[14px] lg:text-[24px] line-[29.3px] mt-4">
          support@wealthfunding.com
        </div>

        <EditModal handleClose={handleClose} open={open} />
        <NewModal handleClose={handleAddClose} open={addModal} />

        <div id="mobile" className="md:hidden flex flex-wrap w-full  md:flex-row gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
        <div className="flex w-full flex-row justify-between items-center gap-x-3 gap-y-6">
            <button className="w-1/2 bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>
       
            <FormControl sx={{width:"50%"}}>
             
             <TextField
               placeholder="Search for payments..."
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
            
       
          </div>

              
           
       
          <div className="flex w-full flex-row gap-3">
            <button
              onClick={handleAddOpen}
              className="w-1/2 bg-white text-white cursor-pointer  p-[0.75rem] rounded-md"
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


        <div id="desktop" className="hidden md:flex flex-col md:flex-row gap-y-4 justify-start md:justify-between mt-3 items-start md:items-center">
          <div className="flex flex-row gap-3 items-center">
            <button className=" bg-white text-white cursor-pointer  p-[0.90rem] rounded-lg">
              <div className="flex items-center gap-x-1">
                <RefreshIcon fontSize="small" sx={{ color: "#646464" }} />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Refresh
                </div>
              </div>
            </button>
            <div className="">
              <FormControl>
                <TextField
                  placeholder="Search for certificates..."
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
        <Box sx={{ width: "100%", mt: 4 }}>
          <DataGrid
            sx={{
              border: "none",
              ".MuiDataGrid-cell": {
                border: "none",
              },
              ".MuiDataGrid-columnHeaders": {
                backgroundColor: "#00BE64",
                color: "white",
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: 500,
                borderRadius: "8px",
              },
              ".MuiDataGrid-row": {
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                border: "none",
                mt: "3px",
              },
            }}
            rows={rows}
            getRowId={(row: any) => {
              return row?.id;
            }}
            columns={columns}
            hideFooter
            checkboxSelection
            // disableRowSelectionOnClick
          />
        </Box>
        <Pagination />
      </div>
    </>
  );
};

export default HelpDesk;

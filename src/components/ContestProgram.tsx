import {
  Box,
  FormControl,
  IconButton,
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
import EditModal from "./EditModal";
import NewModal from "./NewModal";
import { useState } from "react";

const rows = [
  {
    id: 1,
    challenge: "Hyr",
    conditions: ">>054",
    actions: "",
  },
  {
    id: 2,
    challenge: "Hyr",
    conditions: ">>054",
    actions: "",
  },
];

const ContestProgram = () => {
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
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: false,
    },
    {
      field: "challenge",
      headerName: "Challenge",
      width: 200,
      editable: false,
    },
    {
      field: "public",
      headerName: "Public",
      width: 150,
      editable: false,
      renderCell: () => (
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-black-800 rounded-full peer dark:bg-black-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
        </label>
      ),
    },
    {
      field: "conditions",
      headerName: "Conditions",
      width: 200,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      editable: false,
      renderCell: () => (
        <>
          <IconButton>
            {" "}
            <img width={20} height={20} src="../../Icons/viewIcon.svg" />
          </IconButton>
          <IconButton onClick={handleOpen}>
            {" "}
            <img width={30} height={30} src="../../Icons/editIcon.svg" />
          </IconButton>
          <IconButton>
            {" "}
            <img width={20} height={20} src="../../Icons/deleteIcon.svg" />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="mt-4 md:mt-11 mx-4 md:lg:mx-8 xl:mx-12">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px]">
          Contest Programs
        </div>
        <div className="font-normal text-[#646464] font-[Montserrat] text-[14px] lg:text-[18px]">
          Edit or create a new contest
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
              ".MuiDataGrid-columnHeaders": {
                backgroundColor: "#00BE64",
                color: "white",
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: 500,
                borderRadius: "8px",
              },
              "& .MuiDataGrid-row": {
                fontFamily: "Montserrat",
                fontWeight: 500,
                color: "#0F0B19",
                fontSize: "14px",
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

export default ContestProgram;

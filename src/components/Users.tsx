import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "./Pagination";
import { useState } from "react";
import EditModal from "./EditModal";
import NewModal from "./NewModal";

const rows = [
  {
    id: 1,
    login: "Mikhalil@dev4traders.com",
    name: "Mikhalil",
    email: "Mikhalil@dev4traders.com",
    cur: ">>5",
    max: "0",
    status: "Go",
    actions: "actions",
  },
  {
    id: 2,
    login: "Mikhalil@dev4traders.com",
    name: "Mikhalil",
    email: "Mikhalil@dev4traders.com",
    cur: ">>5",
    max: "0",
    status: "Go",
    actions: "actions",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleAddOpen = () => setAddModal(true);
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
      width: 150,
      editable: false,
    },
    {
      field: "login",
      headerName: "Login",
      width: 250,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: false,
    },
    {
      field: "cur",
      headerName: "Cur",
      width: 150,
      editable: false,
    },
    {
      field: "max",
      headerName: "Max",
      width: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
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
      <div className="mt-4 md:mt-11 mx-2 md:mx-4 lg:mx-12">
        <div className="font-semibold text-[#221835] font-[Montserrat] text-[24px] lg:text-[38px]">
          Users
        </div>
        <div className="font-normal text-[#646464] font-[Montserrat] text-[14px] lg:text-[18px]">
          Here you will find all the users.
        </div>

        <EditModal handleClose={handleClose} open={open} />
        <NewModal handleClose={handleAddClose} open={addModal} />

        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-center lg:justify-between mt-3">
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-4">
            <FormControl>
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
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      width={40}
                      height={40}
                      src="../../Icons/timeIcon.svg"
                    />
                  </InputAdornment>
                }
              >
                <InputLabel htmlFor="select-placeholder">
                  Date Joined
                </InputLabel>
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

            <FormControl>
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
                <InputLabel htmlFor="select-placeholder">P. Method</InputLabel>
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

            <FormControl>
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
              >
                <InputLabel htmlFor="select-placeholder">
                  Account Size
                </InputLabel>
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

            <FormControl>
              <Select
                // IconComponent={ExpandMoreIcon}
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
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
              >
                <InputLabel htmlFor="select-placeholder">Phase</InputLabel>
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

            <FormControl>
              <Select
                // IconComponent={ExpandMoreIcon}
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
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
              >
                <InputLabel htmlFor="select-placeholder">Add-Ons</InputLabel>
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
                        backgroundColor: "#00BE64",
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
          <button className=" bg-[#00BE64] text-white cursor-pointer font-normal text-lg py-[6px] px-7 rounded-md">
            <div className="flex flex-row items-center justify-center gap-x-4">
              <div> Export</div>
              <img src="../../Icons/exportIcon.svg" />
            </div>
          </button>
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
          />
        </Box>
        <Pagination />
      </div>
    </>
  );
};

export default Users;

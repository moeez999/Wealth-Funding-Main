import { Box, IconButton } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import AddIcon from "@mui/icons-material/Add";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";
import { useState } from "react";
// import EditModal from "../EditModal";
// import NewModal from "../NewModal";

const rows = [
  {
    id: 1,
    addons: "Pending Withdrawal",
    username: "In-Progress Withdrawal",
    amount: "Declined Payments",
    actions: "actions",
  },
  {
    id: 2,
    addons: "Pending Withdrawal",
    username: "In-Progress Withdrawal",
    amount: "Declined Payments",
    actions: "actions",
  },
];

const Request = () => {
  const [open, setOpen] = useState(false);
  // const [addModal, setAddModal] = useState(false);
  const [addModal] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleAddOpen = () => setAddModal(true);
  // const handleAddClose = () => setAddModal(false);

  console.log(open, addModal);
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];

  console.log(options);

  const columns: GridColDef[] = [
    {
      field: "addons",
      headerName: "Add-ons",
      width: 300,
      editable: false,
    },
    {
      field: "username",
      headerName: "Username",
      width: 300,
      editable: false,
    },
    {
      field: "id",
      headerName: "ID",
      width: 300,
      editable: false,
    },

    {
      field: "amount",
      headerName: "Amount",
      width: 300,
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
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </Box>
      <Pagination />
    </>
  );
};

export default Request;

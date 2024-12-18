import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";
import { useState } from "react";
// import EditModal from "../EditModal";
// import NewModal from "../NewModal";

const rows = [
  {
    id: 1,
    pendingwithdrawal: "Pending Withdrawal",
    progresswithdrawal: "In-Progress Withdrawal",
    completedpayments: "Completed Payments",
    declinedpayments: "Declined Payments",
    actions: "actions",
  },
  {
    id: 2,
    pendingwithdrawal: "Pending Withdrawal",
    progresswithdrawal: "In-Progress Withdrawal",
    completedpayments: "Completed Payments",
    declinedpayments: "Declined Payments",
    actions: "actions",
  },
];

const Overview = () => {
  const [open, setOpen] = useState(false);
  // const [addModal, setAddModal] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handleAddOpen = () => setAddModal(true);
  // const handleAddClose = () => setAddModal(false);

  console.log(open);
  //@ts-ignore
  const options: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  const columns: GridColDef[] = [
    {
      field: "pendingwithdrawal",
      headerName: "Pending Withdrawal",
      width: 300,
      editable: false,
    },
    {
      field: "progresswithdrawal",
      headerName: "In-Progress Withdrawal",
      width: 300,
      editable: false,
    },
    {
      field: "completedpayments",
      headerName: "Completed Payments",
      width: 300,
      editable: false,
    },

    {
      field: "declinedpayments",
      headerName: "Declined Payments",
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
          //@ts-ignore
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
    </>
  );
};

export default Overview;

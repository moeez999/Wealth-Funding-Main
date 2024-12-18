import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Pagination from "../Pagination";

const rows = [
  {
    id: 1,
    ID: "123",
    Name: "John Doe",
    URI: "https://example.com",
    Participants: "5",
    Payout: "$100",
    Timer: "30 days",
    MinimumPayoutThreshold: "$50",
    Commission: "10%",
    PortalEnabled: "Yes",
    Actions: "Actions",
  },
  {
    id: 2,
    ID: "123",
    Name: "John Doe",
    URI: "https://example.com",
    Participants: "5",
    Payout: "$100",
    Timer: "30 days",
    MinimumPayoutThreshold: "$50",
    Commission: "10%",
    PortalEnabled: "Yes",
    Actions: "Actions",
  },
];

const Visits = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  console.log(open);
  const columns: GridColDef[] = [
    {
      field: "ID",
      headerName: "ID",
      width: 150,
      editable: false,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "URI",
      headerName: "URI",
      width: 150,
      editable: false,
    },
    {
      field: "Participants",
      headerName: "Participants",
      width: 150,
      editable: false,
    },
    {
      field: "Payout",
      headerName: "Payout",
      width: 150,
      editable: false,
    },
    {
      field: "Timer",
      headerName: "Timer",
      width: 150,
      editable: false,
    },
    {
      field: "MinimumPayoutThreshold",
      headerName: "Minimum Payout Threshold",
      width: 150,
      editable: false,
    },
    {
      field: "Commission",
      headerName: "Commission",
      width: 150,
      editable: false,
    },
    {
      field: "PortalEnabled",
      headerName: "Portal Enabled",
      width: 150,
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

export default Visits;

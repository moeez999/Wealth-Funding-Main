import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "../Pagination";

interface UnpaidProps {
  handleOpen: () => void;
}

const rows = [
  {
    id: 1,
    slug: "slug",
    user: "user",
    email: "email",
    plan: "plan",
    price: "price",
    via: "via",
    stauts: "stauts",
    updatedat: "Updated At",
    action: "action",
  },
  {
    id: 2,
    slug: "slug",
    user: "user",
    email: "email",
    plan: "plan",
    price: "price",
    via: "via",
    stauts: "stauts",
    updatedat: "Updated At",
    action: "action",
  },
];

const Unpaid: React.FC<UnpaidProps> = ({ handleOpen }) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      editable: false,
    },
    {
      field: "slug",
      headerName: "Slug",
      width: 100,
      editable: false,
    },
    {
      field: "user",
      headerName: "User",
      width: 100,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 100,
      editable: false,
    },
    {
      field: "plan",
      headerName: "Plan",
      width: 100,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      editable: false,
    },
    {
      field: "via",
      headerName: "Via",
      width: 100,
      editable: false,
    },
    {
      field: "stauts",
      headerName: "Stauts",
      width: 100,
      editable: false,
    },
    {
      field: "updatedat",
      headerName: "Updated At",
      width: 100,
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
      <div className="font-medium text-[#00BE64] font-[Montserrat] text-[14px] lg:text-[18px] mt-3">
        Client Transactions
      </div>
      <Box sx={{ width: "100%", mt: 2 }}>
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
    </>
  );
};

export default Unpaid;

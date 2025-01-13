import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import useFetchAllAccounts from "../hooks/useFetchAllAccounts";

const columns: GridColDef[] = [
  //   { field: "id", type: "number", headerName: "ID", width: 90 },
  {
    field: "accountId",
    headerName: "Account Id",
    width: 250,
    editable: false,
  },
  {
    field: "accountName",
    headerName: "Account Name",
    width: 250,
    editable: false,
  },
  {
    field: "userId",
    headerName: "User",
    width: 150,
    editable: false,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: false,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: false,
  },
  {
    field: "createdDateTime",
    headerName: "Created",
    type: "number",
    width: 200,
    editable: false,
  },
  /*{
    field: "equity",
    headerName: "Equity",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "profit",
    headerName: "Profit",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    editable: false,
  },*/
];

const rows = [
  {
    id: 1,
    number: "Number",
    title: "title",
    user: "Snow",
    growth: "Jon",
    positions: 35,
    balance: 1000,
    equity: 500,
    profit: 200,
    product: "Product A",
  },
  {
    id: 2,
    number: "Number",
    title: "title",
    user: "Lannister",
    growth: "Cersei",
    positions: 42,
    balance: 1500,
    equity: 700,
    profit: 300,
    product: "Product B",
  },
  // Add more rows as needed
];

const Accounts = () => {
  const [accountData, setAccountData] = useState([]);
  const [offset, setOffset] = useState(0);

  
  const { data, isLoading, error } = useFetchAllAccounts(offset); // Appel du hook directement
  
  useEffect(() => {
    console.log('====================================');
    console.log(offset);
    console.log('====================================');
      if (data) {
          setAccountData(data.data); // Mettre à jour les données utilisateur
      }
  }, [offset,data]);
  return (
    <>
      <Box sx={{ width: "100%" }}>
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
          rows={accountData}
          getRowId={(row: any) => {
            return row?.accountId;
          }}
          columns={columns}
          hideFooter
          // checkboxSelection
          // disableRowSelectionOnClick
        />
      </Box>
      <Pagination next={()=>setOffset(offset+1)} prev={()=>offset>0?setOffset(offset-1):null} />
    </>
  );
};

export default Accounts;

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [allDataUsers, setAllDataUsers] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/users`;

  const gettAllUsers = () => {
    axios.get(url).then((res) => {
      setAllDataUsers(res.data);
    });
  };

  useEffect(() => {
    gettAllUsers();
  }, []);

  const getFullAddress = (params) => {
    // console.log(params);
    return `${params.row.address.street || ""} ${
      params.row.address.suite || ""
    }`;
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      valueGetter: getFullAddress,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "website",
      headerName: "Website",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="User" subtitle="List of User" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={allDataUsers} columns={columns} />
      </Box>
    </Box>
  );
};

export default User;

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Album = () => {
  const [allDataAlbum, setAllDataAlbum] = useState([]);

  const urlAlbum = `https://jsonplaceholder.typicode.com/albums`;

  const getAllAlbum = () => {
    axios.get(urlAlbum).then((res) => {
      // console.log(res.data);
      setAllDataAlbum(res.data);
    });
  };

  useEffect(() => {
    getAllAlbum();
  }, []);

  const columns = [
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
    },
    {
      field: "id",
      headerName: "Id",
      flex: 0.5,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Album" subtitle="List of Album by User" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={allDataAlbum} columns={columns} />
      </Box>
    </Box>
  );
};

export default Album;

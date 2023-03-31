import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Photo = () => {
  const [allDataPhotos, setAllDataPhotos] = useState([]);

  const urlPhotos = `https://jsonplaceholder.typicode.com/photos`;

  const getAllPhotos = () => {
    axios.get(urlPhotos).then((res) => {
      // console.log(res.data);
      setAllDataPhotos(res.data);
    });
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  const columns = [
    {
      field: "albumId",
      headerName: "Album ID",
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
    {
      field: "url",
      headerName: "Url",
      flex: 1,
      renderCell: (params) => <img src={params.value} />,
    },
    {
      field: "thumbnailUrl",
      headerName: "Thumbnail Url",
      flex: 1,
      renderCell: (params) => <img src={params.value} />,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Photo" subtitle="List of Photo from an Album" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={allDataPhotos} columns={columns} />
      </Box>
    </Box>
  );
};

export default Photo;

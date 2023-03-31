import * as React from "react";
import { PropTypes } from "prop-types";
import { Box, Typography, Paper, Popper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Post = () => {
  const [allDataPost, setAllDataPost] = useState([]);

  const urlPost = `https://jsonplaceholder.typicode.com/posts`;

  const gettAllPost = () => {
    axios.get(urlPost).then((res) => {
      // console.log(res.data);
      setAllDataPost(res.data);
    });
  };

  useEffect(() => {
    gettAllPost();
  }, []);

  const isOverflown = (element) => {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  };

  const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };

    const handleMouseLeave = () => {
      setShowFullCell(false);
    };

    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }

      function handleKeyDown(nativeEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          setShowFullCell(false);
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);

    return (
      <Box
        ref={wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignItems: "center",
          lineHeight: "24px",
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
        }}
      >
        <Box
          ref={cellDiv}
          sx={{
            height: "100%",
            width,
            display: "block",
            position: "absolute",
            top: 0,
          }}
        />
        <Box
          ref={cellValue}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </Box>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width, marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: wrapper.current.offsetHeight - 3 }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </Box>
    );
  });

  GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };
  const renderCellExpand = (params) => {
    // console.log(params);
    return (
      <GridCellExpand
        value={params.value || ""}
        width={params.colDef.computedWidth}
      />
    );
  };

  renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.string,
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      width: 20,
    },
    {
      field: "userId",
      headerName: "UserId",
      flex: 0.5,
      width: 20,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      renderCell: renderCellExpand,
      width: 100,
    },
    {
      field: "body",
      headerName: "Body",
      flex: 1,
      renderCell: renderCellExpand,
      width: 100,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Post" subtitle="List of Post by User" />
      <Box m="10px 0 0 0" height="75vh">
        <DataGrid rows={allDataPost} columns={columns} />
      </Box>
    </Box>
  );
};

export default Post;

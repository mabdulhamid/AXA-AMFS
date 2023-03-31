import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
// import { datas } from "../data/datas";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="p-2">
        <Link to="/" className="flex items-center gap-2 py-3">
          <HomeOutlinedIcon />
          <div className="">Dashboard</div>
        </Link>
        <Link to="/user" className="flex items-center gap-2 py-3">
          <PeopleOutlineOutlinedIcon />
          <div className="">User</div>
        </Link>
        <Link to="/post" className="flex items-center gap-2 py-3">
          <ContactPageOutlinedIcon />
          <div className="">Post</div>
        </Link>
        <Link to="/album" className="flex items-center gap-2 py-3">
          <ReceiptOutlinedIcon />
          <div className="">Album</div>
        </Link>
        <Link to="/photo" className="flex items-center gap-2 py-3">
          <PersonOutlineOutlinedIcon />
          <div className="">Photo</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

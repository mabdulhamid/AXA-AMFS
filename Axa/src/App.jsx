import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard";

import Sidebar from "./components/Sidebar";
import User from "./pages/User";
import Album from "./pages/Album";
import Photo from "./pages/Photo";
import Post from "./pages/Post";

function App() {
  return (
    <div className="w-full h-screen object-cover flex items-center">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/post" element={<Post />} />
          <Route path="/album" element={<Album />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

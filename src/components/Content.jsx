import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";

function Content() {
  return (
    <main className="flex-auto ml-2 bg-backdrop rounded-lg overflow-auto">
      <Navbar />
      <div className="px-6 py-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;

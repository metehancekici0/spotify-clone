import React, { useEffect } from "react";
import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { Icon } from "../Icons";
import CustomTooltip from "./Tooltip";

import { useMatch } from "react-router-dom";
import OtherButtons from "./Navbar/OtherButtons";

function Navbar() {
  const searchRoute = useMatch("/search");

  return (
    <div className="h-16 flex items-center justify-between px-4">
      <Navigation />
      <div className="flex gap-2">
        <OtherButtons premium={searchRoute == null ? true : false} />
        <Auth />
      </div>
    </div>
  );
}

export default Navbar;

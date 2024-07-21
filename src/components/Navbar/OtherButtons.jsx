import React from "react";
import { Icon } from "../../Icons";
import CustomTooltip from "../Tooltip";
import Auth from "./Auth";

function OtherButtons({ premium }) {
  return (
    <>
      {premium && <button className="bg-white text-black rounded-full h-8 px-4 text-sm font-extrabold hover:scale-105">Premium'u keşfet</button>}
      <button className="bg-black text-white rounded-full h-8 px-4 text-sm font-extrabold flex items-center gap-1 hover:scale-105">
        <Icon name="download" size={16} />
        <span>Uygulamayı Yükle</span>
      </button>
      <CustomTooltip title="Yenilikler">
        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-link hover:text-white">
          <Icon name="notification" size={16} />
        </button>
      </CustomTooltip>
    </>
  );
}

export default OtherButtons;

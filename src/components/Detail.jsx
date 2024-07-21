import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomTooltip from "./Tooltip";
import { Icon } from "../Icons";
import { setShowDetail } from "../stores/player";

function Detail() {
  const dispatch = useDispatch();
  const { current } = useSelector((store) => store.player);

  return (
    <div className="ml-2 bg-backdrop h-full rounded-lg w-[17.5rem] flex-shrink-0">
      <div className="flex items-center justify-between px-4 my-2 min-h-12">
        <Link to="/" className="font-bold text-white text-base hover:underline">
          {current.title}
        </Link>
        <div className="flex gap-1 items-center">
          <CustomTooltip title={current.description + " için diğer seçenekler"}>
            <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
              <Icon name="tertiary" size={16} />
            </button>
          </CustomTooltip>
          <CustomTooltip title="Kapat">
            <button
              onClick={() => {
                dispatch(setShowDetail(false));
              }}
              className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100 hover:bg-white/10 rounded-full"
            >
              <Icon name="times" size={16} />
            </button>
          </CustomTooltip>
        </div>
      </div>
      <div className="px-4 flex flex-col">
        <img src={current.image} className="w-full object-cover rounded-lg mb-3" alt="" />
        <h3 className="text-2xl font-bold hover:underline">{current.description}</h3>
        <p className="text-white/70 text-base hover:underline">{current.artist} </p>
      </div>
    </div>
  );
}

export default Detail;

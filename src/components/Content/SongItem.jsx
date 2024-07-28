import React from "react";
import { Icon } from "../../Icons";
import { Link } from "react-router-dom";
import { setCurrent } from "../../stores/player";
import { useDispatch, useSelector } from "react-redux";

function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((store) => store.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return "rounded-lg";

      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    if (current.id == item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  const isCurrentItem = current?.id === item.id && playing;
  return (
    <Link to="/" key={item.id} className="flex flex-col p-3 rounded-md hover:bg-white/10 gap-2 group">
      <div className="relative">
        <img src={item.image} alt={item.title} className={`w-full aspect-square object-cover ${imageStyle(item)}`} />
        <button
          onClick={updateCurrent}
          className={`h-12 w-12 flex items-center justify-center rounded-full group-hover:translate-y-0 bg-primary2 text-black absolute bottom-2 right-2 ${!isCurrentItem ? "opacity-0 translate-y-2" : ""} group-hover:opacity-100 transition duration-200 ease-linear hover:bg-primary shadow-lg hover:scale-105 outline-none`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="text-base text-white line-clamp-1">{item.title} </h6>
        <p className="text-link text-sm line-clamp-2">{item.description} </p>
      </div>
    </Link>
  );
}

export default SongItem;

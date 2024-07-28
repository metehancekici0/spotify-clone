import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../Icons";

function MiniBoxes() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-4 gap-1 mb-4">
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab6761610000e5ebdf779d858eeb831056fd60f6" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Cansever</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab6761610000e5eb27b3b0e9154e12899b9ff22e" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Müslüm Gürses</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img
          className="h-full object-cover"
          src="https://mosaic.scdn.co/640/ab67616d00001e0204c6b093d1f41d6886a6c9f0ab67616d00001e020684f63bda5a0e689b7d2901ab67616d00001e02738af749b1b13567de9a4a1fab67616d00001e027795a558f68bf11b1077ab8b"
          alt=""
        />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Müslüm Gürses - En İyiler</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab67616d0000b2737795a558f68bf11b1077ab8b" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Küskünüm</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab6761610000e5eb434d15d210fc5de83bfb7285" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Metin Işık</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://misc.scdn.co/liked-songs/liked-songs-640.png" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4 line-clamp-2">Beğenilen Şarkılar</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab6761610000e5ebdf779d858eeb831056fd60f6" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4">Cansever</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
      <Link to="/" className="h-12 flex items-center bg-white/10 m-1 rounded-md group hover:bg-white/20 transition duration-200 ease-linear">
        <img className="h-full object-cover" src="https://i.scdn.co/image/ab6761610000e5eb27b3b0e9154e12899b9ff22e" alt="" />
        <div className="flex items-center justify-between flex-1 px-2">
          <span className="font-bold text-sm w-full pr-4">Müslüm Gürses</span>
          <button className="w-8 h-8 rounded-full bg-[#1ed760] text-black flex items-center justify-center shadow-md shrink-0 opacity-0 group-hover:opacity-100">
            <Icon name="play" size={16} />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default MiniBoxes;

import React from "react";
import { Icon } from "../../../Icons";

function Table() {
  return (
    <ul className="flex flex-wrap overflow-auto h-full">
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-md text-link">
            <Icon name="music" size={89} />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">2. Çalma Listem</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Çalma listesi • Metehan Çekici</p>
          </div>
        </a>
      </li>
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-md text-link">
            <img src="/img/a.webp" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">1. Çalma Listem</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Çalma listesi • Metehan Çekici</p>
          </div>
        </a>
      </li>
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-full overflow-hidden text-link">
            <img src="/img/b.webp" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">Azer Bülbül</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Sanatçı</p>
          </div>
        </a>
      </li>
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-full overflow-hidden text-link">
            <img src="/img/c.webp" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">Müslüm Gürses</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Sanatçı</p>
          </div>
        </a>
      </li>
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-full overflow-hidden text-link">
            <img src="/img/d.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">Ahmet Kaya</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Sanatçı</p>
          </div>
        </a>
      </li>
      <li className="w-1/2">
        <a href="#" className="flex flex-col w-full hover:bg-highlight p-3 rounded-md">
          <div className="w-full aspect-square flex items-center justify-center bg-active mb-2 rounded-full overflow-hidden text-link">
            <img src="/img/e.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-base overflow-ellipsis whitespace-nowrap overflow-hidden">Ferdi Tayfur</p>
            <p className="text-link text-sm overflow-ellipsis whitespace-nowrap overflow-hidden">Sanatçı</p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default Table;

import React from "react";
import { Icon } from "../../../Icons";

function List() {
  return (
    <ul>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center rounded-sm text-link">
            <Icon name="music" size={24} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">2. Çalma Listem</p>
            <p className="text-link text-sm xl:tracking-tight">Çalma listesi • Metehan Çekici</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center overflow-hidden rounded-sm text-link">
            <img src="/img/a.webp" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">1. Çalma Listem</p>
            <p className="text-link text-sm xl:tracking-tight">Çalma listesi • Metehan Çekici</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center rounded-full overflow-hidden text-link">
            <img src="/img/b.webp" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">Azer Bülbül</p>
            <p className="text-link text-sm xl:tracking-tight">Sanatçı</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center rounded-full overflow-hidden text-link">
            <img src="/img/c.webp" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">Müslüm Gürses</p>
            <p className="text-link text-sm xl:tracking-tight">Sanatçı</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center rounded-full overflow-hidden text-link">
            <img src="/img/d.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">Ahmet Kaya</p>
            <p className="text-link text-sm xl:tracking-tight">Sanatçı</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center overflow-hidden rounded-sm text-link">
            <img src="/img/liked-songs-64.png" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">Beğenilen Şarkılar</p>
            <p className="text-link text-sm xl:tracking-tight">Çalma listesi • 4 şarkı</p>
          </div>
        </a>
      </li>
      <li>
        <a href="#" className="p-2 rounded-md hover:bg-highlight flex gap-3">
          <div className="bg-active w-12 h-12 flex items-center justify-center rounded-full overflow-hidden text-link">
            <img src="/img/e.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base">Ferdi Tayfur</p>
            <p className="text-link text-sm xl:tracking-tight">Sanatçı</p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default List;

import React from "react";

function Compact() {
  return (
    <ul>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">2. Çalma Listem</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Çalma listesi</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">1. Çalma Listem</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Çalma listesi</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">Azer Bülbül</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Sanatçı</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">Müslüm Gürses</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Sanatçı</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">Ahmet Kaya</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Sanatçı</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">Beğenilen Şarkılar</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Çalma listesi</span>
        </button>
      </li>
      <li>
        <button className="hover:bg-highlight px-2 py-1 rounded-lg w-full text-link text-start flex items-center gap-1">
          <span className="text-white">Ferdi Tayfur</span>
          <span className="text-xs">•</span>
          <span className="text-sm text-link">Sanatçı</span>
        </button>
      </li>
    </ul>
  );
}

export default Compact;

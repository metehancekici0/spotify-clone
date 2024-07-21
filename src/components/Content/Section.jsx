import React from "react";
import { Link } from "react-router-dom";
import SongItem from "./SongItem";

function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="flex justify-between items-center h-16">
        <Link to={more ?? "#"} className="font-bold text-2xl tracking-tight hover:underline">
          {title}
        </Link>
        {more && (
          <Link to={more} className="text-link text-sm font-bold hover:underline">
            Tümünü göster
          </Link>
        )}
      </header>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Section;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SongItem from "./SongItem";

function Section({ title, more = false, items }) {
  const [cardCount, setCardCount] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let newCardCount;
      if (width > 1279) {
        newCardCount = 5;
      } else if (width >= 1024) {
        newCardCount = 4;
      } else if (width >= 767) {
        newCardCount = 3;
      } else {
        newCardCount = 2;
      }

      if (newCardCount !== cardCount) {
        setCardCount(newCardCount);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardCount]);
  return (
    <section>
      <header className="flex justify-between items-center h-16">
        <Link to={more ?? "#"} className="font-bold text-2xl lg:text-lg tracking-tight hover:underline">
          {title}
        </Link>
        {more && (
          <Link to={more} className="text-link text-sm font-bold hover:underline">
            Tümünü göster
          </Link>
        )}
      </header>
      <div className="grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-x-6 2xl:gap-x-0">
        {items.slice(0, cardCount).map((item) => (
          <SongItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Section;

import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";

function CustomRange({ value, step, min, max, onChange }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="h-7 w-full flex group"
          style={props.style}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: isHovered ? ["#1db954", "#535353"] : ["#ffffff", "#535353"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          key={props.key}
          className={`w-3 h-3 rounded-full bg-white ${!isDragged && "opacity-0"} group-hover:opacity-100 outline-none`}
          style={{
            ...props.style,
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)",
          }}
        />
      )}
    />
  );
}

export default CustomRange;

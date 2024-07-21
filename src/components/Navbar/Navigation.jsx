import React from "react";
import { Icon } from "../../Icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="flex gap-x-2">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-black bg-opacity-70"
      >
        <Icon name="prev" size={16} />
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
        className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-black bg-opacity-70"
      >
        <Icon name="next" size={16} />
      </button>
    </nav>
  );
}

export default Navigation;

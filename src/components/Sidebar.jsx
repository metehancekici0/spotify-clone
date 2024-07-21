import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";
import CustomTooltip from "./Tooltip";
import DisplayCompact from "./Sidebar/Displays/Compact";
import DisplayList from "./Sidebar/Displays/List";
import DisplayTable from "./Sidebar/Displays/Table";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const [alignment, setAlignment] = useState("Son Çalınanlar");
  const [display, setDisplay] = useState("Kompakt");

  const dropdown = useRef(null);
  const dropdownToggle = useRef(null);

  const closeDropdown = (e) => {
    if (dropdownIsActive && dropdown.current && !dropdown.current.contains(e.target) && !dropdownToggle.current.contains(e.target)) {
      setDropdownIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [dropdownIsActive]);

  return (
    <aside className="w-420 flex-shrink-0">
      <nav className="bg-backdrop rounded-lg">
        <ul className="py-2 px-3">
          <li className="py-1 px-3">
            <Link to="/" className="flex gap-5 h-10 items-center text-link select-none duration-200 transition ease-linear hover:text-white">
              <Icon name="home" />
              <span className="font-bold text-base">Ana sayfa</span>
            </Link>
          </li>
          <li className="py-1 px-3">
            <Link to="/search" className="flex gap-5 h-10 items-center text-link select-none duration-200 transition ease-linear hover:text-white">
              <Icon name="search" />
              <span className="font-bold text-base">Ara</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="library bg-backdrop rounded-lg mt-2">
        <header className="flex justify-between items-center gap-2 py-2 px-4">
          <CustomTooltip title="Kitaplığın'ı Daralt">
            <button className="flex px-2 h-10 items-center text-link select-none duration-200 transition ease-linear hover:text-white">
              <Icon name="book" />
              <span className="font-bold text-base ml-3">Kitaplığın</span>
            </button>
          </CustomTooltip>
          <div>
            <CustomTooltip title="Çalma listesi veya klasör oluştur">
              <button className="p-2 text-link rounded-full duration-200 transition ease-linear hover:text-white hover:bg-highlight mr-2">
                <Icon name="plus" size={16} />
              </button>
            </CustomTooltip>
            <CustomTooltip title="Daha fazla göster">
              <button className="p-2 text-link rounded-full duration-200 transition ease-linear hover:text-white hover:bg-highlight">
                <Icon name="rightArrow" size={16} />
              </button>
            </CustomTooltip>
          </div>
        </header>
        <div className="my-2 mx-4 gap-2 flex items-center">
          <button className="rounded-full text-white bg-button py-1 px-3 text-sm h-8 font-medium hover:bg-buttonHover transition duration-200 ease-linear">
            Çalma listeleri
          </button>
          <button className="rounded-full text-white bg-button py-1 px-3 text-sm h-8 font-medium hover:bg-buttonHover transition duration-200 ease-linear">
            Sanatçılar
          </button>
        </div>
        <div className="flex flex-col h-34 pt-1 mb-2">
          <div className="flex justify-between items-center px-4">
            <CustomTooltip title="Kitaplığın'da ara">
              <button className="p-2 text-link rounded-full duration-200 transition ease-linear hover:text-white hover:bg-buttonHover">
                <Icon name="search" size={17} />
              </button>
            </CustomTooltip>
            <div className="relative">
              <button
                ref={dropdownToggle}
                onClick={() => {
                  setDropdownIsActive(!dropdownIsActive);
                }}
                className="py-1 px-3 active:scale-100 active:text-link flex gap-1 text-sm text-link items-center hover:text-white hover:scale-105"
              >
                <span>{alignment && alignment}</span>
                <Icon name="lines" size={16} />
              </button>
              <div
                ref={dropdown}
                className={`absolute right-2 top-9 bg-active p-1 rounded-md flex flex-col w-40 shadow-2xl ${!dropdownIsActive && "hidden"}`}
              >
                <div className="flex flex-col border-b-white border-solid border-b border-opacity-20 pb-1">
                  <p className="font-semibold text-xs px-2 py-3 text-link select-none">Şuna göre sırala:</p>
                  <button
                    onClick={() => {
                      setAlignment("Son Çalınanlar");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${alignment == "Son Çalınanlar" && "text-primary2"}`}
                  >
                    <span>Son çalınanlar</span> {alignment == "Son Çalınanlar" && <Icon name="check" size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setAlignment("Yeni Eklenenler");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${alignment == "Yeni Eklenenler" && "text-primary2"}`}
                  >
                    <span>Yeni Eklenenler</span> {alignment == "Yeni Eklenenler" && <Icon name="check" size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setAlignment("Alfabetik");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${alignment == "Alfabetik" && "text-primary2"}`}
                  >
                    <span>Alfabetik</span> {alignment == "Alfabetik" && <Icon name="check" size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setAlignment("Oluşturan");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${alignment == "Oluşturan" && "text-primary2"}`}
                  >
                    <span>Oluşturan</span> {alignment == "Oluşturan" && <Icon name="check" size={16} />}
                  </button>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-xs px-2 py-3 text-link select-none">Görünüm seçeneği</p>
                  <button
                    onClick={() => {
                      setDisplay("Kompakt");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${display == "Kompakt" && "text-primary2"}`}
                  >
                    <div className="flex gap-2 items-center">
                      <Icon name="lines" size={15} />
                      <span>Kompakt</span>
                    </div>
                    {display == "Kompakt" && <Icon name="check" size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setDisplay("Liste");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${display == "Liste" && "text-primary2"}`}
                  >
                    <div className="flex gap-2 items-center">
                      <Icon name="list" size={15} />
                      <span>Liste</span>
                    </div>
                    {display == "Liste" && <Icon name="check" size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setDisplay("Tablo");
                    }}
                    className={`p-2 text-sm text-start flex justify-between items-center cursor-default hover:bg-lightHover ${display == "Tablo" && "text-primary2"}`}
                  >
                    <div className="flex gap-2 items-center">
                      <Icon name="table" size={15} />
                      <span>Tablo</span>
                    </div>
                    {display == "Tablo" && <Icon name="check" size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 overflow-auto" style={{ height: "calc(100% - 146px)" }}>
          {display && display == "Kompakt" && <DisplayCompact />}
          {display && display == "Liste" && <DisplayList />}
          {display && display == "Tablo" && <DisplayTable />}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

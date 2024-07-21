import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import CustomTooltip from "../Tooltip";
import { Icon } from "../../Icons";
import { Link } from "react-router-dom";

function Auth() {
  const user = {
    name: "Metehan Çekici",
    avatar: "https://i.scdn.co/image/ab67757000003b824628ecaa75b70bc6230c28e0",
  };

  return (
    <Menu as="nav" className="relative">
      <CustomTooltip title={user.name}>
        <MenuButton className="rounded-full overflow-hidden w-8 h-8 object-cover object-center border-2 border-black">
          <img src={user.avatar} alt={user.name} />
        </MenuButton>
      </CustomTooltip>
      <MenuItems anchor="bottom end" className="bg-active w-48 p-1 rounded-md absolute top-full right-0 translate-y-2">
        <MenuItem>
          <Link
            className="flex justify-between items-center gap-3 px-3 data-[focus]:bg-white/10 hover:bg-white/10 rounded-md text-sm h-10 font-semibold cursor-default text-white text-opacity-80 hover:text-opacity-100"
            to="/settings"
          >
            Hesap
            <Icon name="external" size={16} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="flex justify-between items-center gap-3 px-3 data-[focus]:bg-white/10 hover:bg-white/10 rounded-md text-sm h-10 font-semibold cursor-default text-white text-opacity-80 hover:text-opacity-100"
            to="/settings"
          >
            Profil
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="flex justify-between items-center gap-3 px-3 data-[focus]:bg-white/10 hover:bg-white/10 rounded-md text-sm h-10 font-semibold cursor-default text-white text-opacity-80 hover:text-opacity-100"
            to="/settings"
          >
            Premium'a Yükselt
            <Icon name="external" size={16} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className="flex justify-between items-center gap-3 px-3 data-[focus]:bg-white/10 hover:bg-white/10 rounded-md text-sm h-10 font-semibold cursor-default text-white text-opacity-80 hover:text-opacity-100"
            to="/settings"
          >
            Ayarlar
          </Link>
        </MenuItem>
        <div className="h-px bg-white/10" />
        <MenuItem>
          <Link
            className="flex justify-between items-center gap-3 px-3 data-[focus]:bg-white/10 hover:bg-white/10 rounded-md text-sm h-10 font-semibold cursor-default text-white text-opacity-80 hover:text-opacity-100"
            to="/settings"
          >
            Oturumu Kapat
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default Auth;

import fbIcon from "../assets/icons/fb_icon.svg";
import tgIcon from "../assets/icons/tg_icon.svg";
import instIcon from "../assets/icons/inst_icon.svg";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#9feabb] text-gray-700 text-center p-4 ">
      <p className="text-sm">© 2025 Wordflow English School. All rights reserved.</p>
      <p className="text-xs">Follow us on social media!</p>
      <div className="mt-2">
        <ul className="flex space-x-8 justify-center items-center">
            <li className="hover:scale-110 transition-transform duration-200">
                <a href="#"> <img src={tgIcon} className="w-7" /> </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-200">
                <a href="#"> <img src={fbIcon} alt="facebook" className="w-7"/> </a>
            </li>
            <li className="hover:scale-110 transition-transform duration-200">
                <a href="#"> <img src={instIcon} className="w-8" /></a>
            </li>
        </ul>

      </div>
    </footer>
  );
}
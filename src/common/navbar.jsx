import React from "react";
import CustomButton from "./fish_button";

const Navbar = () => {
  return (
    <nav className="bg-[#2364C5] border-gray-200 dark:bg-gray-900 h-[67px]">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="w-[358px] h-[65px]">
          <img src="images/Logo_left.svg" className="h-auto w-auto" alt="Fisher Logo" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#2364C5] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <button className="w-[256px] h-[55px] bg-[#FFEB37] rounded-[220px] text-[20px] text-[#A4B8FF] font-extrabold">
                Jackpot : 13.52 SOL
              </button>
            </li>
            <li>
              <a href="#" className="w-[358px] h-[67px]">
                <img src="images/discorde.svg" className="h-auto w-auto" alt="Fisher Logo" />
              </a>
            </li>
            <li>
              <a href="#" className="w-[358px] h-[67px]">
                <img src="images/twitter.svg" className="h-auto w-auto" alt="Fisher Logo" />
              </a>
            </li>
            <li>
              <button className="w-[256px] h-[55px] bg-[#FFEB37] rounded-[220px] text-[20px] text-[#A4B8FF] font-extrabold">
                SOL/USDT : 59.23
              </button>
            </li>
            <li>
              <button className="w-[256px] h-[55px] bg-[#FFEB37] rounded-[220px] text-[25px] text-[#A4B8FF] font-extrabold">
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
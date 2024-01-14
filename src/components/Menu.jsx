import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";

const Menu = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar />
        <div className="grid place-items-center pt-[200px] h-[800px] gap-3">
        <Link to="/fishing">
          <div>
            <button className="w-[440px] h-[106px] bg-[#FFEB37] rounded-[220px] text-[60px] text-[#A4B8FF] shadow-md font-extrabold">
              FISH
            </button>
          </div>
        </Link>
          
        <Link to="/collection">
          <div>
            <button className="w-[573px] h-[106px] bg-[#FFEB37] rounded-[220px] text-start px-[30px] text-[55px] text-[#A4B8FF] shadow-md font-extrabold">
              COLLECTION
            </button>
          </div>
        </Link>

        <Link to='/admin'>
          <div>
            <button className="w-[573px] h-[106px] bg-[#FFEB37] rounded-[220px] text-start px-[30px] shadow-md text-[55px] text-[#A4B8FF] font-extrabold">
              ADMIN
            </button>
          </div>
        </Link>
        <Link to="/leaderboard">
          <div>
            <button className="w-[573px] h-[106px] bg-[#FFEB37] flex rounded-[220px] justify-between text-start items-center px-[30px] shadow-md text-[55px] text-[#A4B8FF] font-extrabold">
              <p>LEADERBOARD</p>
              <img
              className="w-[79px] h-[69px]"
                src="/images/trophy.svg"
                alt="solfisher"
              />
            </button>
          </div>
        </Link>
        </div>
      </section>
    </>
  );
};

export default Menu;
import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section className="Welcome">
        <div className="mx-auto">
          <img
            className="mx-auto"
            src="/images/SOLFISHERS.svg"
            alt="solfisher"
          />
          <div className="flex justify-center">
            <Link to="/menu">
              <button className="w-[440px]  h-[106px] bg-[#FFEB37] rounded-[220px] text-[60px] text-[#A4B8FF] font-extrabold">
                Let's Fish!
              </button>
            </Link>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Welcome;
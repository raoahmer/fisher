import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";

const Welcome = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar />
        <div className="mx-auto my-[5%] flex flex-col justify-center items-center">
          <img
            className="mx-auto"
            src="/images/Frame.svg"
            alt="solfisher"
          />
          <div className="flex justify-center my-[5%]">
            <Link to="/menu">
              <button className="w-[440px]  h-[106px] bg-[#FFEB37] rounded-[220px] text-[60px] text-[#A4B8FF] font-extrabold">
              <img
                className="mx-auto"
                src="/images/fish_button.svg"
                alt="solfisher"
              />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
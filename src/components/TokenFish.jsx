import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";

const TokenHome = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar />
        <div className="mx-auto my-[10%] flex flex-col justify-center items-center">
          <img
            className="mx-auto"
            src="/images/token_fish.svg"
            alt="solfisher"
          />
        </div>
      </section>
    </>
  );
};

export default TokenHome;
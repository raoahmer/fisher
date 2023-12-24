import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";

const FishHome = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar />
        <div className="mx-auto my-[7%] flex flex-col justify-center items-center">
          <img
            className="mx-auto"
            src="/images/fish_home.svg"
            alt="solfisher"
          />
        </div>
      </section>
    </>
  );
};

export default FishHome;
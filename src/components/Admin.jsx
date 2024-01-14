import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar5 from "../common/navbar5";
import Navbar from "../common/navbar";

const Admin = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar name='admin' bg='straight' />
        <div className="mx-auto my-[2%] flex flex-col justify-center items-center">
          <img
            className="mx-auto"
            src="/images/admin_screen.svg"
            alt="solfisher"
          />
        </div>
      </section>
    </>
  );
};

export default Admin;
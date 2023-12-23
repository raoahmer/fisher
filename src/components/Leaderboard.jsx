import React from "react";
import '../styles/tailwind.css'
import Navbar3 from "../common/navbar3";

const Leaderboard = () => {
  return (
    <>
      <section className="Welcome">
        <Navbar3 />
        <div className="mx-auto w-[85%] flex my-[2%]">
          <img src="images/leaderboard_screen.svg" alt="Leatherboard" />
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
import React from "react";
import '../styles/tailwind.css'
import Navbar from "../common/navbar";

const Leaderboard = (props) => {
  return (
    <>
      <section className="Welcome">
        <Navbar name={props.name} bg={props.bg} />
        <div className="mx-auto w-[85%] flex my-[2%]">
          <img src="images/leaderboard_screen.svg" alt="Leatherboard" />
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";

const Mode = (props) => {
  return (
    <>
      <section className="Welcome">
        <Navbar name={props.name}/>
        <div className="mx-auto my-[15%] flex justify-center items-center w-[80vw]">
          <Link className="block" to="/fishing" >
            <button>
              <img
              className="mx-auto w-[27vw] h-[33vh]"
              src="/images/fish_icon.svg"
              alt="solfisher"
            />
            </button>
          </Link>
          <Link className="block" to="/collection">
            <button>
              <img
              className="mx-auto  w-[27vw] h-[33vh]"
              src="/images/collection.svg"
              alt="solfisher"
            />
            </button>
          </Link>
          <Link className="block" to="/leaderboard">
            <button>
              <img
              className="mx-auto  w-[27vw] h-[33vh]"
              src="/images/leatherboard.svg"
              alt="solfisher"
            />
            </button>
          </Link>
          <Link className="block" to="/admin">
            <button>
              <img
              className="mx-auto  w-[27vw] h-[33vh]"
              src="/images/admin.svg"
              alt="solfisher"
            />
            </button>
          </Link>
          
        </div>
      </section>
    </>
  );
};

export default Mode;
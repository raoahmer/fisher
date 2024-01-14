import React from "react";
import '../../src/App.css';
import CustomButton from "../common/fish_button";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";
import { WalletProvider } from '@solana/wallet-adapter-react';

const Home = () => {
  return (
    <>
      <section className="Welcome">
        <WalletProvider>
          <Navbar name='fisher' />
        </WalletProvider>
        <div className="mx-auto my-[5%] flex flex-col justify-center items-center">
          <img
            className="mx-auto"
            src="/images/home_screen.svg"
            alt="solfisher"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
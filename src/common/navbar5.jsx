import React from "react";
import CustomButton from "./fish_button";
// import { WalletProvider } from '@solana/wallet-adapter-react';
import Wallet from '../components/Wallet'; //
// import { useWallet } from '@solana/wallet-adapter-react';

const Navbar5 = () => {

  // console.log(useWallet && useWallet)
  // const wallet = ''
  // const handleConnectWallet = async () => {
  //   // Connect to the wallet or perform any wallet-related actions
  //   if (!wallet.connected) {
  //     await wallet.connect();
  //   } else {
  //     // Handle disconnect logic if needed
  //     await wallet.disconnect();
  //   }
  // };

  return (
    <nav className="z-10">
      <img src="images/navbar_admin.svg" className="w-[100vw]" alt="Fisher Logo" />
    </nav>
  );
};

export default Navbar5;
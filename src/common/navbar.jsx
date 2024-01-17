import React from "react";
import { useEffect, useState } from "react";
import * as buffer from "buffer";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { clusterApiUrl } from "@solana/web3.js";

window.Buffer = buffer.Buffer;
const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) return provider;
  }
};

const Navbar = ({ name, bg }) => {

  const [provider, setProvider] = useState(undefined);
  const [receiverPublicKey, setReceiverPublicKey] = useState(undefined);
  const [walletBalance, setWalletBalance] = useState(0)
  const [walletId, setWalletId] = useState(null);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  useEffect(() => {
    const provider = getProvider();
    if (provider) setProvider(provider);
  }, []);

  const disconnectWallet = () => {
    // Add logic to disconnect the wallet
    if (provider && receiverPublicKey) {
      // Example: Disconnecting a Phantom wallet
      try {
        provider.disconnect();
        console.log('Wallet disconnected');
      } catch (err) {
        console.error('Error disconnecting wallet:', err);
      }

      // Clear state variables
      setReceiverPublicKey(undefined);
      setWalletBalance(null);
    }
  };

  console.log('public keyyyy', PublicKey)
  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      try {
        const { publicKey } = await provider.connect();
        console.log('Connected to Phantom Wallet. Public key:', publicKey);
        setReceiverPublicKey(publicKey);
        const balance = await connection.getBalance(new PublicKey(publicKey));
        setWalletBalance(balance)
        setWalletId(publicKey.toString());
      } catch (err) {
        console.error('Error connecting to Phantom Wallet:', err);
      }
    }
  };

  return (
    <nav className={`relative flex justify-between items-center ${bg === 'straight' ? 'nav2_bg h-[13vh]' : 'h-[20vh]'}`}>
      <div className="w-[30vw] justify-center mx-auto z-20">
        <img src={`images/${logoSelectionList[name]}`} className="w-[355px] flex mx-auto h[155px]" alt="Fisher Logo" />
      </div>
      <div className="flex items-center justify-around w-[65vw] z-20">
        <div className="sol_content_bg flex justify-between px-[20px] items-center">
          <p className="text-white font-medium">JACKPOT</p>
          <p className="text-[#7BDAFF] mx-auto">13.52 SOL</p>
        </div>
        <div className="sol_content_bg flex justify-between px-[20px] items-center">
          <p className="text-white font-medium">SOL/$</p>
          <p className="text-[#7BDAFF] mx-auto">{walletBalance}</p>
        </div>
        <div>
          {provider && !receiverPublicKey && (
            <button className="button" onClick={connectWallet}>
              <img src="images/connect_wallet.svg" className="w-[280px] h[110px]" alt="Fisher Logo" />
            </button>
          )}
          {provider && receiverPublicKey && (
            <button
              className="h-[100px] min-w-fit w-fit p-4 bg-no-repeat text-white border-none cursor-pointer"
              style={{ backgroundImage: 'url("images/connect_button_bg.svg")' }}
            >
              {walletId}
            </button>
          )}
        </div>
        <div>
          <img src="images/icons.svg" className="w-[217px] h-[109px]" alt="Fisher Logo" />
        </div>

      </div>
      <div className="absolute">
        <img src="images/nav_bg.svg" className="min-w-[100vw]" alt="Fisher Logo" />
      </div>
    </nav>
  );
};

export default Navbar;


const logoSelectionList = {
  fisher: "sol_fisher.svg",
  mode: "jackpot_button.svg",
  leaderboard: "leaderboard_icon.svg",
  admin: "admin_icon.svg",
  collection: "collection_button.svg",
}
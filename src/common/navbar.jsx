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
  const [senderKeypair, setSenderKeypair] = useState(undefined);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  useEffect(() => {
    const provider = getProvider();
    if (provider) setProvider(provider);
  }, []);

  const createSender = async () => {
    try {
      const senderKeypair = Keypair.generate();
      console.log('Sender account: ', senderKeypair.publicKey.toString());

      const airdropSignature = await connection.requestAirdrop(
        senderKeypair.publicKey,
        LAMPORTS_PER_SOL * 2
      );

      await connection.confirmTransaction(airdropSignature);
      console.log('Airdrop transaction signature:', airdropSignature);
      console.log('Wallet Balance:', (await connection.getBalance(senderKeypair.publicKey)) / LAMPORTS_PER_SOL);

      setSenderKeypair(senderKeypair);
    } catch (error) {
      console.error('Error creating sender:', error);
    }
  };

  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      try {
        const publicKey = await provider.connect();
        console.log('Connected to Phantom Wallet. Public key:', publicKey.toBase58());
        setReceiverPublicKey(publicKey);
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
          <p className="text-[#7BDAFF] mx-auto">59.23</p>
        </div>
        <div>
          {provider && !receiverPublicKey && (
            <button className="button" onClick={connectWallet}>
              <img src="images/connect_wallet.svg" className="w-[280px] h[110px]" alt="Fisher Logo" />
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
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalButton, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Wallet = () => {
  const { wallet } = useWallet();

  return (
    <div>
      <WalletMultiButton />
      {wallet && <WalletDisconnectButton />}
      {!wallet && <WalletModalButton />}
    </div>
  );
};

export default Wallet;